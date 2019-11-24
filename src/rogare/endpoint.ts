import { Has, Operation } from '..'

export interface Base<O = any> {
	readonly [key: string]: O
}

export type Simple<O extends Operation.Base> = Base<O>
export type Promises<O extends Operation.Promise = Operation.Promise> = Simple<O>
export type Values<V = string | number> = Base<V>

export type BaseParams = Has.Options & Has.Pagination & { endpoint: string }
export type Initializer<E = Base, P = BaseParams> = (params: P) => E
