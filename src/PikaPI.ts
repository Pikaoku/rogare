import { Subscribable, SubscribableOrPromise } from 'rxjs'

export interface EndpointArgs {
	endpoint: string
}

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

export type Request<T = SubscribableOrPromise<any>> = (args: any) => T
export type PromiseRequest<T = any> = Request<Promise<T>>
export type SubscribleRequest<T = any> = Request<Subscribable<T>>

export interface ApiEndpoint {
	readonly endpoint: string
}

export abstract class BaseEndpoint implements ApiEndpoint {
	public readonly endpoint: string

	constructor({ endpoint }: ApiEndpoint) {
		this.endpoint = endpoint
	}

	protected extractId(body: any): string {
		if (!body.id) {
			throw new Error('Could not extract ID from response object')
		}
		return body.id
	}

	protected extractModel<Model>(data: Partial<Model>): Partial<Model> {
		return data
	}
}
