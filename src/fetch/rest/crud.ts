import { CrudEndpointInitializer } from '../../crud'

export const RestCrud: CrudEndpointInitializer<unknown> = ({
	endpoint,
	options: endpointOptions = {},
	request = fetch,
}) => {
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
