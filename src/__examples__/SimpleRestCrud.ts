import {PikaPi} from '../PikaPI'
import { restFetchCrud } from '../rest/fetch/crud'

interface User {
    name: string,
    age: number,
    status: 'active' | 'disabled'
}

interface MyApi extends PikaPi {
    users: () =>  restFetchCrud<User>({ endpoint: 'users' })
}