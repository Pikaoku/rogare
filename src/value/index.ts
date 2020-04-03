import { Base } from '..'

export type Operation<R, P = Base.OParams> = Base.Operation<R, P>
export type Endpoint<R = string> = Base.Endpoint<Operation<R>>
