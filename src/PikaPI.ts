import { SubscribableOrPromise } from 'rxjs'

// TODO: Revisit idea of changing file structure.

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

export type EndpointActionParams = HasOptions & (HasData | HasId)

export type EndpointAction<T = void> = (
	params: EndpointActionParams
) => SubscribableOrPromise<T>

export type EndpointParams = { endpoint: string } & HasOptions

export interface Endpoint {
	readonly [key: string]: EndpointAction<any>
}

export type EndpointInitializer = (params: EndpointParams) => Endpoint

export interface PikaPi {
	readonly [key: string]: EndpointInitializer
}