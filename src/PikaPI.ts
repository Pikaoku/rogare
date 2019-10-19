import { SubscribableOrPromise } from 'rxjs'

export interface EndpointArgs {
	endpoint: string
}

export interface ValidatorArgs<Model> {
	validator: (data: Partial<Model>, recipe: Model) => Model
	recipe: Model
}

export type Request<T, A = any> = (args: A) => SubscribableOrPromise<T>
export type PromiseRequest<T, A = any> = (args: A) => Promise<T>

export interface HasOptions {
	options?: object
}
export interface HasData {
	data: object
}
export interface HasModel<Model> {
	data: Partial<Model>
}
export interface HasId {
	id: string
}

export type RequestNode<RequestType> = (
	args: EndpointArgs
) => {
	[key: string]: RequestType | RequestNode<RequestType>
}

export interface EndpointParams<Model> {
	getResponseData: (response: any) => Partial<Model>
	getResponseId: (response: any) => string
}
