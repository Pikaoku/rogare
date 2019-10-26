import { CrudEndpointInitializer } from '../../crud'

type Model = unknown

export const RestCrud: CrudEndpointInitializer<Model> = ({ endpoint, options }) => {
	return {
		create: ({ data, options }) => Promise.resolve().then(() => 'Hello'),
		read: ({  } ) => Promise.resolve().then(() => ({} as Model)),
		update: ({  }) =>
			Promise.resolve().then(() => {
				/* */
			}),
		destroy: () =>
			Promise.resolve().then(() => {
				/* */
			}),
	}
}
