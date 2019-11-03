import {
	Endpoint,
	EndpointInitializer,
	HasId,
	HasModel,
	Operation,
	OperationParams,
} from './pikapi'

export interface CrudEndpoint<Model, OP = OperationParams> extends Endpoint {
	create: Operation<HasModel<Model> & OP, string>
	read: Operation<HasId & OP & { default: Model }, Model>
	update: Operation<HasId & HasModel<Model> & OP>
	destroy: Operation<HasId & OP>
}

export type CrudEndpointInitializer<Model> = EndpointInitializer<CrudEndpoint<Model>>
