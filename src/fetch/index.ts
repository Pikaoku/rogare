import {
	CrudEndpoint,
	CrudParamsCreate,
	CrudParamsRead,
	CrudParamsUpdate,
} from '../crud'
import { ApiEndpoint } from '../PikaPI'
import {
	defaultErrorHandler,
	HasErrorHandler,
	RequestErrorHandler,
} from '../handlers/errors'

type Furnisher<Model> = (data: Partial<Model>) => Model | Partial<Model>

export interface FetchCrudEndpointParams<Model> extends ApiEndpoint {
	furnish?: Furnisher<Model>
}

export class FetchCrudEndpoint<Model> extends CrudEndpoint<Model>
	implements HasErrorHandler {
	public readonly errorHandler: RequestErrorHandler
	protected readonly furnish: Furnisher<Model>

	constructor({
		furnish = (data: Partial<Model>) => data,
		errorHandler = defaultErrorHandler,
		...rest
	}: FetchCrudEndpoint<Model>) {
		super(rest)
		this.furnish = furnish
		this.errorHandler = errorHandler
	}

	public async create({
		data,
		options,
	}: CrudParamsCreate<Model>): Promise<string> {
		const response = await this.doRequest('POST', options, data)
		return this.extractId(response)
	}

	public async read({ id, options }: CrudParamsRead): Promise<Model> {
		const response = await this.doRequest('GET', options, undefined, id)
		return this.furnish(this.extractModel<Model>(response.body)) // FIXME: Type Error
	}
	public async update(args: CrudParamsUpdate<Model>): Promise<void> {
		throw new Error('Method not implemented.')
	}
	public async delete(args: CrudParamsRead): Promise<void> {
		throw new Error('Method not implemented.')
	}

	protected getEndpoint(id?: string) {
		return [this.endpoint, id].filter(a => !!a).join('/')
	}

	private doRequest(method: string, options = {}, data = {}, id?: string) {
		return Promise.resolve(
			fetch(this.getEndpoint(id), {
				...options,
				method,
				body: JSON.stringify(data),
			})
		).then(response => response.json(), this.errorHandler)
	}
}
