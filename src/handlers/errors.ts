export type RequestErrorHandler = (e: any) => void
export interface HasErrorHandler {
	readonly errorHandler: RequestErrorHandler
}
// tslint:disable-next-line: no-console
export const defaultErrorHandler: RequestErrorHandler = (e: any) =>
	console.error(e)
