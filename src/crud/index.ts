import {
	EndpointArgs,
	EndpointParams,
	HasId,
	HasModel,
	HasOptions,
	ValidatorArgs,
} from '../PikaPI'

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
	middleware: <U>(a: U) => U
}

export interface CrudEndpointParams<Model>
	extends EndpointParams<Model>,
		CrudKeys {
	create: WrapperRequest<CrudCreateArgs<Model>>
	delete: WrapperRequest<CrudDeleteArgs>
	read: WrapperRequest<CrudReadArgs>
	update: WrapperRequest<CrudUpdateArgs<Model>>
}

export type CrudWrapper<Model> = (a: CrudEndpointParams<Model>) => Crud<Model>

interface User {
	name: string
	age: number
	status: 'active' | 'disabled'
}

export const newCrud: CrudWrapper<User> = ({
	create: c,
	delete: d, // FIXME: This is fucking disgusting, but delete is a JS keyword
	read: r,
	update: u,
	getResponseData,
	getResponseId,
}) => ({ recipe, validator, endpoint }) => {
	return {
		create: ({ data, options = {} }) =>
			c
				.request({
					data: validator(data, recipe),
					endpoint,
					options,
				})
				.then(c.middleware)
				.then(getResponseId),
		delete: ({ id, options = {} }) =>
			d
				.request({ endpoint, id, options })
				.then(d.middleware)
				.then(),
		read: ({ id, options = {} }) =>
			r
				.request({ endpoint, id, options })
				.then(r.middleware)
				.then(getResponseData),
		update: ({ id, data, options = {} }) =>
			u
				.request({
					data,
					endpoint,
					id,
					options,
				})
				.then(u.request)
				.then(),
	}
}
