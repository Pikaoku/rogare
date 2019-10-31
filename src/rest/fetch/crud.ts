import { CrudEndpoint } from '../../crud'
import {
	fDelete,
	FetchEndpointParams,
	FetchOperationParams,
	fGet,
	fPatch,
	fPost,
} from '../../fetch'

type RestFetchCrud<Model> =  CrudEndpoint<Model, FetchOperationParams>
export function restFetchCrud<Model>({
	endpoint: e,
	options: eops = {},
}: FetchEndpointParams): CrudEndpoint<Model, FetchOperationParams> {
	return {
		create: ({ data, options = {} }) => fPost(e, data, { ...eops, ...options }),
		read: async ({ id, default: d, options = {} }) => ({
			...d,
			...(await fGet(`${e}/${id}`, { ...eops, ...options })),
		}),
		update: ({ id, data, options = {} }) =>
			fPatch(`${e}/${id}`, data, { ...eops, ...options }),
		destroy: ({ id, options }) => fDelete(`${e}/${id}`, { ...eops, ...options }),
	}
}

const 