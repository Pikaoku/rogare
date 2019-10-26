import {
	Endpoint,
	EndpointAction,
	EndpointActionParams,
	EndpointInitializer,
	HasId,
	HasModel,
	HasOptions,
} from './PikaPI'

export interface CrudParamsCreate<Model> extends EndpointActionParams {
	data: Model | Partial<Model>
}

export type CrudParamsRead = HasId & HasOptions
export type CrudParamsUpdate<Model> = HasId & HasModel<Model> & HasOptions

export type CrudParams<Model> =
	| CrudParamsCreate<Model>
	| CrudParamsRead
	| CrudParamsUpdate<Model>

export interface CrudEndpoint<Model> extends Endpoint {
	create: EndpointAction<CrudParamsCreate<Model>, string>
	read: EndpointAction<CrudParamsRead, Model>
	update: EndpointAction<CrudParamsUpdate<Model>>
	destroy: EndpointAction<CrudParamsRead>
}

export type CrudEndpointInitializer<Model> = EndpointInitializer<
	CrudEndpoint<Model>
>
