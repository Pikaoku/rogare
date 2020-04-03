import { Async, Base, Crud } from '..'

export interface Simple {
	[key: string]: Base.Endpoint<Base.Operation<any>>
}

export interface SimpleAsync {
	[key: string]: Async.Endpoint
}
