import { SubscribableOrPromise } from 'rxjs'

import { HasOptions, HasPagination } from './utils'

export type OperationParams = HasOptions & HasPagination

export type Operation<Params = OperationParams, ReturnType = void> = (
	params: Params
) => PromiseLike<ReturnType>

export interface EndpointParams extends HasOptions, HasPagination {
	endpoint: string
}

export interface Endpoint {
	// tslint:disable-next-line: no-any
	readonly [key: string]: Operation<any, any>
}

export type EndpointInitializer<EndpointType = Endpoint, Params = EndpointParams> = (
	params: Params
) => EndpointType

export type CompoundEndpointInitializer = (...args: EndpointInitializer[]) => Endpoint

export interface PikaPi {
	readonly [key: string]: Endpoint
}

export * from './crud'
export * from './utils'
