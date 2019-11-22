import { Has, Where } from '..'

export type Params = Has.Options & Has.Pagination
export type Base<R = void, P = Params> = (params: P) => R

export type Promises<R = void, P = Params> = Base<P, PromiseLike<R>>

export type ListParams = Where.Base & Has.Pagination & Params
export type List<R = void, P extends ListParams = ListParams> = Base<P, R>
