import { Base } from '..'

export type Operation<R = void, P = Base.OParams> = Base.Operation<PromiseLike<R>, P>
export type Endpoint<O = Operation<any, Base.OParams>> = Base.Endpoint<O>
export type Initializer<E = Endpoint<any>, P = Partial<Base.EParams>> = (params?: P) => E
