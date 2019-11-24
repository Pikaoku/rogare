import { Endpoint } from '..'
import { Operation } from '..'

export type OperationParams = Operation.Params & {
	catch?: (error: PromiseRejectionEvent) => any
}

export type PromiseOperation<
	R = any,
	P extends OperationParams = OperationParams
> = Operation.Base<R, P>

export type PromiseEndpoint = Endpoint.Base<PromiseOperation>
