import { EndpointParams, OperationParams } from './pikapi'

export interface FetchEndpointParams extends EndpointParams {
	options: Partial<RequestInit>
}

export interface FetchOperationParams extends OperationParams {
	options: Partial<RequestInit>
}
