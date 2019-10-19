import {
	EndpointArgs,
	EndpointParams,
	HasId,
	HasModel,
	HasOptions,
	ValidatorArgs,
} from '../PikaPI'

// TODO: Investigate the viability of using FEAR instead of CRUD

export type CrudCreateArgs<Model> = HasModel<Model> & HasOptions
export type CrudReadArgs = HasId & HasOptions
export type CrudUpdateArgs<Model> = HasId & HasModel<Model> & HasOptions
export type CrudDeleteArgs = HasId & HasOptions

interface CrudKeys {
	create: any
	read: any
	update: any
	delete: any
}

interface CrudRequests<Model> extends CrudKeys {
	create: (args: CrudCreateArgs<Model>) => Promise<string>
	read: (args: CrudReadArgs) => Promise<Model>
	update: (args: CrudUpdateArgs<Model>) => Promise<void | null | undefined>
	delete: (args: CrudDeleteArgs) => Promise<void | null | undefined>
}

export type CrudArgs<Model> = EndpointArgs & ValidatorArgs<Model>

export type Crud<Model> = (args: CrudArgs<Model>) => CrudRequests<Model>

export interface WrapperRequest<T> {
	request: (a: EndpointArgs & T) => Promise<any>
	middleware?: <U>(a: U) => U
}

export interface CrudEndpointParams<Model>
	extends EndpointParams<Model>,
		CrudKeys {
	create: WrapperRequest<CrudCreateArgs<Model>>
	delete: WrapperRequest<CrudDeleteArgs>
	read: WrapperRequest<CrudReadArgs>
	update: WrapperRequest<CrudUpdateArgs<Model>>
}

interface User {
	name: string
	age: number
	status: 'active' | 'disabled'
}

export function newCrud<Model>({
	create: c,
	read: r,
	update: u,
	delete: d, // FIXME: This is fucking disgusting, but delete is a JS keyword
	getResponseData,
	getResponseId,
}: CrudEndpointParams<Model>) {
	const crud: Crud<Model> = ({ recipe, validator, endpoint }) => {
		const withMiddleware = (action: WrapperRequest<any>) =>
			action.middleware || ((a: any) => a)
		return {
			create: ({ data, options = {} }) =>
				c
					.request({
						data: validator(data, recipe),
						endpoint,
						options,
					})
					.then(withMiddleware(c))
					.then(getResponseId),
			delete: ({ id, options = {} }) =>
				d
					.request({ endpoint, id, options })
					.then(withMiddleware(d))
					.then(),
			read: ({ id, options = {} }) =>
				r
					.request({ endpoint, id, options })
					.then(withMiddleware(r))
					.then(getResponseData)
					.then(),
			update: ({ id, data, options = {} }) =>
				u
					.request({
						data,
						endpoint,
						id,
						options,
					})
					.then(withMiddleware(r))
					.then(),
		}
	}
	return crud // CODESTYLE: Investigate if this guy can be got rid of
}
