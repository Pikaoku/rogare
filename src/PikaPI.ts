import { Subscribable, SubscribableOrPromise } from 'rxjs'

export interface HasOptions {
	options?: object
}
export interface HasData {
	data: object
}
export interface HasModel<Model> {
	data: Model | Partial<Model>
}
export interface HasId {
	id: string
}

// export type Request<T = SubscribableOrPromise<any>> = (args: any) => T
// export type PromiseRequest<T = any> = Request<Promise<T>>
// export type SubscribleRequest<T = any> = Request<Subscribable<T>>

export type EndpointActionParams = HasOptions & (HasData | HasId)

export type EndpointAction<T = void> = (
	params: EndpointActionParams
) => SubscribableOrPromise<T>

export type EndpointParams = {endpoint: string} & HasOptions
export interface Endpoint {
	readonly [key: string]: EndpointAction
}

export type EndpointInitializer = (params: EndpointParams) => Endpoint

export interface PikaPi {
	readonly [key: string]: EndpointInitializer
}