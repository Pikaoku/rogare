> A pattern for consistent client-side API requests

## The What

A collection of types and interfaces that produce a typesafe and typehinted client-side api for hitting some generic backend.

## The Why

I was writing the same code too often. No similar package was available so I made myself one.

## Usage

The purpose of this package is to allow for consistent and fast client side API logic generation. To that end, I should be able to type an api object:

```TS
export const api: PikaPI = {
    // ...
}
```

And recieve IDE warnings if my api doesn't follow the pattern.

To achive _rapidly_ generating the API, I can use the `EndpointInitializer` type to quickly generate `Endpoint`s:

```TS
import {UserModel, OrderModel} from '../../data/modals'
import {baseUrl} from '../../config/auth'
import {mwsEndpointOptions} from '../../config/amazon/mws'

export const api: PikaPI = {
    users: GenericCrudEndpoint<UserModel>({ endpoint: `${baseUrl}/'users'` }),
    orders: AmazonMwsOrdersEndpoint<OrderModel>(mwsEndpointOptions.orders)
}
```

## Gotchas

I wanted every part of the api to be flexible and extensible. To that end, every function takes a typed entity instead of a rigid list of params. 

For example:

```TS
    api.users.update({
        id: user.id,
        data: {
            'name': form.inputs.name
        },
        options: {
            verboseLog: true // optional param that you would usually let default
        }
    })
```

as opposed to:

```TS
    api.users.update(user.id, { 'name': form.inputs.name }, { verboseLog: true }})
```

Although the latter is shorter, I prefer the readability and extensibility of the former. And it's my package so I'll do what I want. 