import { Async, Base, Has } from '..'

export type Params<M> = Base.OParams & (Has.Model<M> | Has.Id)
export type Operation<M, R = string | M | void, P = Params<M>> = Async.Operation<R, P>

export type Create<M> = Operation<M, string, Params<M> & Has.Model<M>>
export type Read<M> = Operation<M, M, Params<M> & Has.Id>
export type Update<M> = Operation<M, void, Params<M> & Has.Model<M> & Has.Id>
export type Destroy<M> = Operation<M, void, Params<M> & Has.Id>

export type Endpoint<M> = Base.Endpoint & {
	create: Operation<M, string>
	read: Operation<M, M>
	update: Operation<M, void>
	destroy: Operation<M, void>
}
