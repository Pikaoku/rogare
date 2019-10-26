const opts: { [key: string]: Partial<RequestInit> } = {
	get: {
		method: 'GET',
	},
}

export function makeRequest({ endpoint, options }: any) {
	return new Request(endpoint, options)
}

const get = ({ requestHandler = fetch, ...rest }) => 
	requestHandler({ ...rest, ...opts.get }),

export  {
	get
	post: params => {},
	patch: params => {},
	delete: params => {},
}