import { PikaPI } from './PikaPI'

interface User {
	id: 'hello'
	age: number
	status: 'active' | 'disabled'
}

interface MyApi {
	users: string
}

const api: PikaPI<MyApi> = {
	users: 'hello',
}
