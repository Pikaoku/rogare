import { Async, Base, Has, Where } from '..'

export type Params = Where.Base & Has.Pagination & Base.EParams

export type Operation<R = any[], P extends Params = Params> = Async.Operation<R, P>

export type Endpoint<R = string | number, P extends Params = Params> = Base.Endpoint<
	Operation<R[], P>
>
