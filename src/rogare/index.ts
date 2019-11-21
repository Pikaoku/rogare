import { Has } from '..'




type CompoundEndpointInitializer = (...args: EndpointInitializer[]) => Endpoint

interface Rogare {
	readonly [key: string]: Endpoint
}
