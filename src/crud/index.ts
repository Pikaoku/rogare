import { Endpoint as ENDPOINT, Has, Operation as OPERATION } from '..'

export type Params<M> = OPERATION.Params & (Has.Model<M> | Has.Id)

export type Operation<M, R = void> = OPERATION.Base<Params<M>, R>

export type Endpoint<M> = ENDPOINT.Base<Operation<M>> & {
	create: Operation<M, string>
	read: Operation<M, M>
	update: Operation<M, void>
	destroy: Operation<M, void>
}

export type PromisesOperation<M, R = void> = OPERATION.Promises<Params<M>, PromiseLike<R>>

export type PromisesEndpoint<M> = Endpoint<M> & {
	create: Operation<M, PromiseLike<string>>
	read: Operation<M, PromiseLike<M>>
	update: Operation<M, PromiseLike<void>>
	destroy: Operation<M, PromiseLike<void>>
}
