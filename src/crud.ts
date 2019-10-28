import {
	Endpoint,
	Operation,
	OperationParams,
	EndpointInitializer,
	HasId,
	HasModel,
	HasOptions,
} from './PikaPI'

export type CrudOperationParamsCreate<Model> = HasModel<Model> & OperationParams
export type CrudOperationParamsRead = HasId & HasOptions & OperationParams
export type CrudOperationParamsUpdate<Model> = HasId &
	HasModel<Model> &
	HasOptions &
	OperationParams

export type CrudOperationParams<Model> =
	| CrudOperationParamsCreate<Model>
	| CrudOperationParamsRead
	| CrudOperationParamsUpdate<Model>

export interface CrudEndpoint<Model> extends Endpoint {
	create: Operation<CrudOperationParamsCreate<Model>, string>
	read: Operation<CrudOperationParamsRead, Model>
	update: Operation<CrudOperationParamsUpdate<Model>>
	destroy: Operation<CrudOperationParamsRead>
}

export type CrudEndpointInitializer<Model> = EndpointInitializer<CrudEndpoint<Model>>
