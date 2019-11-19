import {
	Endpoint,
	EndpointInitializer,
	HasId,
	HasModel,
	Operation,
	OperationParams,
} from '.'

export interface CrudEndpoint<Model, E = PromiseLike<Model>, OP = OperationParams>
	extends Endpoint<E> {
	create: Operation<HasModel<Model> & OP, string>
	read: Operation<HasId & OP & { default: Model }, Model>
	update: Operation<HasId & HasModel<Model> & OP>
	destroy: Operation<HasId & OP>
}

export type CrudEndpointInitializer<Model> = EndpointInitializer<CrudEndpoint<Model>>
