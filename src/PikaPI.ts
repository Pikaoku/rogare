import { SubscribableOrPromise } from 'rxjs'

// TODO: Revisit idea of changing file structure.

export interface Options {
	// tslint:disable-next-line: no-any
	[key: string]: any
}

export interface HasOptions {
	options?: Options
}
export interface HasData {
	data: {}
}
export interface HasModel<Model extends {}> extends HasData {
	data: Model | Partial<Model>
}
export interface HasId {
	id: string
}

/**
 *
 */

export interface EndpointActionParams extends HasOptions {
	noop?: boolean
}

export type EndpointAction<P = EndpointActionParams, R = void> = (
	params: P
) => SubscribableOrPromise<R>

export type EndpointParams = {
	endpoint: string
	// tslint:disable-next-line: no-any
	request?: (params: any) => Promise<any>
} & HasOptions

export interface Endpoint {
	// tslint:disable-next-line: no-any
	readonly [key: string]: EndpointAction<any, any>
}

export type EndpointInitializer<
	EndpointType = Endpoint,
	Params = EndpointParams
> = (params: Params) => EndpointType

export interface PikaPi {
	readonly [key: string]: EndpointInitializer
}
