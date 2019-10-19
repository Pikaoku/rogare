import { createCrud } from '../crud'
import { EndpointArgs, HasOptions, HasData, HasId, ValidatorArgs } from '../PikaPI'

type RestFetchApiParams = HasOptions & EndpointArgs & {
    formatter?: (endpoint: string, id: string) => string
}

const defaultFormatter = (endpoint: string, id: string) => `${endpoint}/${id}`

async function genericFetch(endpoint: string, method: string = 'GET', options: {} = {}, body: {} = {}) {
    return await fetch(endpoint, {
        ...options,
        body: JSON.stringify(body),
        method
    });
}

const RestFetchAPI = {
	post: async ({
		data,
		endpoint,
		options = {},
	}: RestFetchApiParams & HasData) => {
		await genericFetch(endpoint, 'POST', options, data)
	},
	get: async ({
		id,
        endpoint,
        formatter = defaultFormatter,
		options = {},
	}: RestFetchApiParams & HasId) => 
		await genericFetch(formatter(endpoint, id), 'GET', options),
	patch: async ({
		id,
		data,
        endpoint,
        formatter = ,
		options = {},
	}: RestFetchApiParams & HasId & HasData ) => {
		await genericFetch(formatter(endpoint, id), 'PATCH', options, data)
	},
	delete: async ({
		id,
        endpoint,
        formatter = defaultFormatter,
		options = {},
	}: RestFetchApiParams & HasId) => {
		await genericFetch(formatter(endpoint, id), 'DELETE', options)
	},
}

export default RestFetchAPI

export function newFetchCrud<Model>({ recipe, validator, endpoint}: EndpointArgs & ValidatorArgs<Model>) {
	return createCrud({
		create: {
            request: RestFetchAPI.post
        },
        read: {
            request: RestFetchAPI.get
        },
        update: {
            request: RestFetchAPI.patch,
        },
        delete: {
            request: RestFetchAPI.delete
        },
        getResponseId: async (response) => {
            const json = await response.json()
            return json.body
        },
        getResponseData: async (response) => {
            const json = await response.json()
            return json.body
        }
	})({ recipe, validator, endpoint })
}
