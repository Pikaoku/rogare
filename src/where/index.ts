export type Comparison = 'is' | '>' | '>=' | '<' | '<=' | 'in'

export interface Base<V = any> {
	field: string
	op: Comparison
	value: V
}
