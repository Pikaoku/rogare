import {
	Endpoint,
	EndpointAction,
	HasId,
	HasModel,
	HasOptions,
	EndpointParams,
} from './PikaPI'

export type CrudParamsCreate<Model> = HasModel<Model> & HasOptions
export type CrudParamsRead = HasId & HasOptions
export type CrudParamsUpdate<Model> = HasId & HasModel<Model> & HasOptions

export type CrudParams<Model> =
	| CrudParamsCreate<Model>
	| CrudParamsRead
	| CrudParamsUpdate<Model>

export interface CrudEndpoint<Model> extends Endpoint {
	create: EndpointAction<string>
	read: EndpointAction<Model>
	update: EndpointAction
	destroy: EndpointAction
}

// export type CrudEndpointParams = EndpointParams

export type CrudEndpointInitializer<Model> = (
	params: EndpointParams
) => CrudEndpoint<Model>
