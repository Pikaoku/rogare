import * as Crud from './crud'
import * as Helpers from './helpers'

export type OperationParams = Helpers.HasOptions & Helpers.HasPagination

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

type CompoundEndpointInitializer = (...args: EndpointInitializer[]) => Endpoint

interface Rogare {
	readonly [key: string]: Endpoint
}

export { Rogare, Crud, Helpers }
