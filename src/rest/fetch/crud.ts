import { CrudEndpointInitializer, CrudEndpoint } from '../../crud'
import { EndpointParams } from '../../PikaPI'

export function RestFetchCrud<Model>({
	endpoint,
	options: endpointOptions = {},
	request = fetch,
}: EndpointParams): CrudEndpoint<Model> {
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
