import { Has } from '..'

export type Params = Has.Options & Has.Pagination
export type Base<P = Params, R = void> = (params: P) => R

export type Promises<P = Params, R = void> = Base<P, PromiseLike<R>>
