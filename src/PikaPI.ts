export type Request = (...args: any) => any

export interface ApiArgs {
	endpoint: string
	options?: object
}

export type RequestNode<RequestType extends Request> = (
	args: ApiArgs
) => {
	[key: string]: RequestType | RequestNode<RequestType>
}

// export interface HasStreams<Model> {
// 	lists: {
// 		[key: string]: Subscribable<Model>
// 	}
// }

export type PikaPI<ApiSpec> = {
	[K in keyof ApiSpec]: RequestNode<Request>
}

interface User {
	id: 'hello'
	age: number
	status: 'active' | 'disabled'
}

const api: SimpleCrudApi<User> = ({ endpoint, options }): SimpleCrud<User> => ({
	create: ({ data }) => Promise.resolve().then(() => JSON.stringify(data)),
	delete: ({ id }) => Promise.resolve(),
	read: ({ id }) => Promise.resolve().then(() => ({} as User)),
	update: ({ id, data }) => Promise.resolve(),
})
