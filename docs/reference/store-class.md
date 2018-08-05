# Store Class
The core Beedle `Store` class is the main organ grinder. When you `import` Beedle, this is the default export that you'll get.

## Constructor

The Store's `constructor` takes a `params` object which is required. It could technically be empty, but it's recommended that you pass at least some default state in.

### Available `params` parameters

#### `actions`

An object literal containing `action` methods that are called by the [dispatch](#dispatch-actionkey-payload) method.

##### Example

```javascript
const actions = {
    actionMethod(context, payload) {
        ...
    }
}
```

#### `mutations`

An object literal containing `mutation` methods that are called by the [commit](#commit-mutationkey-payload) method.

##### Example

```javascript
const mutations = {
    mutationMethod(state, payload) {
        ...
    }
}
```

#### `initialState`

This is the default state of your application. If set, this will override the default state that Beedle sets, which is an empty `object`.

##### Example

```javascript
const initialState = {
    favouriteAnimal: 'Pamsters',
    description: 'They are actually Prairie Dogs, but Pamsters is a better name',
    pets: [
        {
            type: 'cat',
            name: 'Dora'
        },
        {
            type: 'cat',
            name: 'Delilah'
        }
    ]
}
```

## Methods

### `dispatch(actionKey, payload)`

This method calls a named `action` and passes along a payload. It'll log an error if the specified action can't be found.

#### `actionKey: String`

A string representation of your `action` name. If your action is called `myAction` you'll call it with `dispatch` like this: 

```javascript
dispatch('myAction', { some: 'data' })
```

#### `payload: mixed` (optional)

The data that you want to pass along with to your `action`. 



#### Result

The `dispatch` method will run your action and pass it the following:

- `context`: A reference to the Store
- `payload`: Whatever was passed into the `dispatch` method

### `commit(mutationKey, payload)`

This method calls a named `mutation` and passes along a payload. It'll log an error if the specified action can't be found.

#### `mutationKey: String`

A string representation of your `mutation` name. If your mutation is called `myMutation` you'll call it with `dispatch` like this: 

```javascript
context.commit('myMutation', { some: 'data' })
```

::: tip

The `context` is available because we're calling this `mutation` from within an `action` which is the recommended flow

:::

#### `payload: mixed` (optional)

The data that you want to pass along with to your `mutation`.

### `subscribe(callback)`

This method allows you to pass a callback that should be fired when the store's state is modified. You can run the method as many times, with as many functions as you like as it stores them in a collection.

#### `callback: function`

A valid function that is called when the state is mutated. The callback is called like so:

```javascript
callback(data);
```

The `data` parameter is the `state` in its current form after the mutation that fired this event.