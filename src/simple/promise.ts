export interface PromiseRequestNode {
	[key: string]: (...args: any[]) => Promise<any>
}
