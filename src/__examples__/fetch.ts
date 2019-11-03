export function parseDataAsBody(data: any) {
	return JSON.stringify(data)
}

export async function fPost(
	endpoint: string,
	data: any,
	options: Partial<RequestInit> = {}
): Promise<string> {
	const response = await fetch(endpoint, {
		...options,
		body: parseDataAsBody(data),
		method: 'POST',
	})
	const json = await response.json()
	return json.body.toString()
}

export async function fGet(endpoint: string, options: Partial<RequestInit> = {}) {
	const response = await fetch(endpoint, { ...options, method: 'GET' })
	const json = await response.json()
	return json.body
}

export async function fPatch(
	endpoint: string,
	data: any,
	options: Partial<RequestInit> = {}
): Promise<void> {
	await fetch(endpoint, { ...options, body: parseDataAsBody(data), method: 'PATCH' })
	return
}

export async function fDelete(
	endpoint: string,
	options: Partial<RequestInit> = {}
): Promise<void> {
	await fetch(endpoint, { ...options, method: 'DELETE' })
	return 
}
