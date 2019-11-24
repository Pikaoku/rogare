export interface Pagination {
	limit?: number
	offset?: number
}
export interface Options {
	options?: {
		[key: string]: any
	}
}
export interface Data {
	data: {}
}
export interface Model<M extends {}> extends Data {
	data: M | Partial<M>
}
export interface Id {
	id: string
}
