import { Endpoint as ENDPOINT, Has, Operation as OPERATION } from '..'

export type Params<M> = OPERATION.Params & (Has.Model<M> | Has.Id)

export type Responses<M> = string | M | void

export type BaseOperation<M, R = Responses<M>> = OPERATION.Base<Params<M>, R>
export type PromiseOperation<M, R = Responses<M>> = BaseOperation<M, PromiseLike<R>>

export type Endpoint<
	M,
	O extends BaseOperation<M, Responses<M>> = BaseOperation<M>
> = ENDPOINT.Base<O> & {
	create: O & ((...args: any[]) => string)
	read: O & BaseOperation<M, M>
	update: O & BaseOperation<M, M>
	destroy: O & BaseOperation<M, M>
}

export type PromisesEndpoint<M, R = Responses<M>> = Endpoint<M, PromiseOperation<M, R>>
