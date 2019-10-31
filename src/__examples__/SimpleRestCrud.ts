import {PikaPi} from '../PikaPI'

interface User {
    name: string,
    age: number,
    status: 'active' | 'disabled'
}

interface MyApi extends PikaPi {
    users: () => {
        
    }
}