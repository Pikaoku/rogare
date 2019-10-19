import { ApiArgs } from '../PikaPI'
import { PromiseRequestNode } from './promise'

interface HasOptions {
	options?: object
}
interface HasData {
	data: object
}
interface HasId {
	id: string
}

export type SimpleCrudCreate = HasData & HasOptions
export type SimpleCrudRead = HasId & HasOptions
export type SimpleCrudUpdate = HasId & HasData & HasOptions
export type SimpleCrudDelete = HasId & HasOptions

export interface SimpleCrudActions<Model> extends PromiseRequestNode {
	create: ({  }: SimpleCrudCreate) => Promise<string>
	read: ({  }: SimpleCrudRead) => Promise<Model>
	update: ({  }: SimpleCrudUpdate) => Promise<void>
	delete: ({  }: SimpleCrudDelete) => Promise<void>
}

export type SimpleCrud<Model> = (args: ApiArgs) => SimpleCrudActions<Model>

export function newSimpleCrud<Model>(
	args: ApiArgs,
	actions: SimpleCrudActions<Model>
): SimpleCrudActions<Model> {
	return actions
}
