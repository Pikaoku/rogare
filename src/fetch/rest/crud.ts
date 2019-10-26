import { CrudEndpointInitializer } from '../../crud'

type Model = unknown

export const RestCrud: CrudEndpointInitializer<Model> = () => {
	return {
		create: ({  }) => Promise.resolve().then(() => 'Hello'),
		read: ({  } ) => Promise.resolve().then(() => ({} as Model)),
		update: () =>
			Promise.resolve().then(() => {
				/* */
			}),
		destroy: () =>
			Promise.resolve().then(() => {
				/* */
			}),
	}
}
