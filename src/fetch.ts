import { HasOptions } from './PikaPI'

export type FetchOptions = HasOptions & {
	options: Partial<RequestInit>
}
