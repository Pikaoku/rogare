import * as crud from './crud'
import * as fetch from './fetch'
import * as main from './PikaPI'

export default {
	...main,
	...crud,
	...fetch,
}
