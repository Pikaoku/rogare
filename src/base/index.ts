import { Has } from '..'

export type OParams = Has.Options & Has.Pagination
export type Operation<R = void, P = OParams> = (params: P) => R

export type EParams = Has.Options & Has.Pagination & { endpoint: string }
export interface Endpoint<O = any> {
	readonly [key: string]: O
}

export type Initializer<E = Endpoint, P = EParams> = (params: P) => E
