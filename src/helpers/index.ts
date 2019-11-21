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


