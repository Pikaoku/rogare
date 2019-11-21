export type OperationParams = Has.Options & Has.Pagination

export type Operation<Params = OperationParams, ReturnType = void> = (
	params: Params
) => PromiseLike<ReturnType>

export interface EndpointParams extends Has.Options, Has.Pagination {
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