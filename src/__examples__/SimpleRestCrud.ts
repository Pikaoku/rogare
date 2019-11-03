import {PikAPi} from '../pikapi'
import { restFetchCrud } from '../rest/fetch/crud'

interface User {
    name: string,
    age: number,
    status: 'active' | 'disabled'
}

interface MyApi extends PikAPi {
    users: () =>  restFetchCrud<User>({ endpoint: 'users' })
}