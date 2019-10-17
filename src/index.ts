export type Request = (...args: any) => any

export type PromiseRequest = (...args: any) => Promise<any>

import { Subscribable } from 'rxjs'

interface HasOptions {
	options?: object
}
interface HasData {
	data: object
}
interface HasId {
	id: string
}

export interface RequestNode<RequestType> {
	[key: string]: RequestType | RequestNode<RequestType>
}

export type PromiseRequestNode = RequestNode<PromiseRequest>

export interface SimpleCrud<Model> {
	create: ({  }: HasData & HasOptions) => Promise<string>
	read: ({  }: HasId & HasOptions) => Promise<Model>
	update: ({  }: HasId & HasData & HasOptions) => Promise<void>
	delete: ({  }: HasId & HasOptions) => Promise<void>
}

export interface HasStreams<Model> {
	lists: {
		[key: string]: Subscribable<Model>
	}
}

export interface PikAPI {
	[key: string]: PromiseRequestNode
}

interface User {
	id: 'hello'
	age: number
	status: 'active' | 'disabled'
}

const api: SimpleCrud<User> = {
	create: ({ data }) => Promise.resolve().then(() => JSON.stringify(data)),
	delete: ({ id }) => Promise.resolve(),
	read: ({ id }) => Promise.resolve().then(() => ({} as User)),
	update: ({ id, data }) => Promise.resolve(),
}
