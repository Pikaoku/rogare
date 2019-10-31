import { CrudEndpoint } from '../../crud'
import { EndpointParams } from '../../PikaPI'
import { FetchEndpointParams } from '../../fetch'

export function RestFetchCrud<Model>({
	endpoint,
	options: endpointOptions = {},
	request = fetch,
}: FetchEndpointParams): CrudEndpoint<Model, FetchOperationParams> {
	return {
		create: ({ data, options = {} }) =>
			Promise.resolve(
				request(
					new Request(endpoint, {
						...endpointOptions,
						...options,
						body: data,
						method: 'POST',
					})
				)
			),
		read: ({}) => Promise.resolve().then(() => ({})),
		update: ({}) =>
			Promise.resolve().then(() => {
				/* */
			}),
		destroy: () =>
			Promise.resolve().then(() => {
				/* */
			}),
	}
}
