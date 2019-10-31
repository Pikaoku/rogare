import {
	Endpoint,
	Operation,
	OperationParams,
	EndpointInitializer,
	HasId,
	HasModel,
} from './PikaPI'

export interface CrudEndpoint<Model, OP = OperationParams> extends Endpoint {
	create: Operation<HasModel<Model> & OP, string>
	read: Operation<HasId & OP, Model>
	update: Operation<HasId & HasModel<Model> & OP>
	destroy: Operation<HasId & OP>
}

export type CrudEndpointInitializer<Model> = EndpointInitializer<CrudEndpoint<Model>>
