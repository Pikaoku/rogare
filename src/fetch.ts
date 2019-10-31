import { EndpointParams, OperationParams } from './PikaPI'

export interface FetchEndpointParams extends EndpointParams {
	options: Partial<RequestInit>
}

export interface FetchOperationParams extends OperationParams {
	options: Partial<
}
