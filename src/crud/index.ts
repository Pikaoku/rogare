import {
	ApiEndpoint,
	BaseEndpoint,
	HasId,
	HasModel,
	HasOptions,
} from '../PikaPI'

// TODO: Investigate the viability of using FEAR instead of CRUD

export type CrudParamsCreate<Model> = HasModel<Model> & HasOptions
export type CrudParamsRead = HasId & HasOptions
export type CrudParamsUpdate<Model> = HasId & HasModel<Model> & HasOptions

export interface CrudEndpointMethods<Model> extends ApiEndpoint {
	create: (args: CrudParamsCreate<Model>) => Promise<string>
	read: (args: CrudParamsRead) => Promise<Partial<Model>>
	update: (args: CrudParamsUpdate<Model>) => Promise<void | null | undefined>
	delete: (args: CrudParamsRead) => Promise<void | null | undefined>
}

export abstract class CrudEndpoint<Model> extends BaseEndpoint
	implements CrudEndpointMethods<Model> {
	constructor(args: ApiEndpoint) {
		super(args)
	}
	public abstract async create(args: CrudParamsCreate<Model>): Promise<string>
	public abstract async read(args: CrudParamsRead): Promise<Model>
	public abstract async update(args: CrudParamsUpdate<Model>): Promise<void>
	public abstract async delete(args: CrudParamsRead): Promise<void>
}
