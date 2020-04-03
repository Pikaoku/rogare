import * as Has from './helpers/has'

export { Has }

export type OperationParams = Has.Options & Has.Pagination
export type Operation<R = void, P = OperationParams> = (params: P) => R
export type EndpointParams = Has.Options & Has.Pagination & { endpoint: string }
export type Endpoint<O = Operation> = { readonly [key: string]: O }
export type Initializer<E = Endpoint, P = EndpointParams> = (params: P) => E

export type ValueOperation<
	R = string,
	P extends OperationParams = OperationParams
> = Operation<R, P>
export type ValueEndpoint<R = string> = Endpoint<Operation<R>>

export type AsyncOperation<
	R = void,
	P extends OperationParams = OperationParams
> = Operation<PromiseLike<R>, P>
export type AsyncEndpoint<O = Operation<any, OperationParams>> = Endpoint<O>
export type AsyncInitializer<E = Endpoint<any>, P = Partial<EndpointParams>> = (
	params?: P
) => E

export type ListParams = Has.Pagination & EndpointParams
export type ListOperation<R = any, P extends ListParams = ListParams> = AsyncOperation<
	R[],
	P
>
export type ListEndpoint<
	R = string,
	PARAMS extends ListParams = ListParams
> = AsyncEndpoint<ListOperation<R[], PARAMS>>
export type ListInitializer<
	E extends AsyncEndpoint<ListOperation> = AsyncEndpoint<ListOperation>,
	P extends ListParams = ListParams
> = AsyncInitializer<E, P>
