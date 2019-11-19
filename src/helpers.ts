export type WhereOp = 'is' | '>' | '>=' | '<' | '<=' | 'in'
// tslint:disable-next-line: no-any
export interface SimpleWhere<V = any> {
	field: string
	op: WhereOp
	value: V
}

export function where(field: string, op: WhereOp, value: any): SimpleWhere {
	return {
		field,
		op,
		value,
	}
}

export interface HasPagination {
	limit?: number
	offset?: number
}

export interface HasOptions {
	options?: { [key: string]: any }
}

export interface HasData {
	data: {}
}

export interface HasModel<Model extends {}> extends HasData {
	data: Model | Partial<Model>
}
export interface HasId {
	id: string
}
