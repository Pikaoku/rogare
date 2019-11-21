import { Has, Operation } from '..'

export type Params = Has.Options & Has.Pagination & { endpoint: string }

export interface Base<O = any> {
	readonly [key: string]: O
}
export type Promises<R = void> = Base<Operation.Promises<Operation.Params, R>>
export type EndpointInitializer<E = Base, P = Params> = (params: P) => E
