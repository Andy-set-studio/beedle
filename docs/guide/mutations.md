# Mutations

Mutations provide a synchronous method of *mutating* state. They have one job and one job only: mutate the state and return it.

## Example

Presuming you're following-on from the [getting started guide](/#getting-started), We'll add a new mutation like so:

```javascript
const mutations = {
    setTitle(state, payload) {
        state.title = payload;
        return state;
    }
}
```



The `setTitle` method has two parameters:

- `state` is the current version of your store's state before this mutation
- `payload` is the data that was passed in by your [action](/guide/actions.html)

Mutations like this should be as simple as possible and *only* mutate the state. Anything more complex should be done at an [action](/guide/actions.html) level.



## Commit 

The `commit` method is part of the Beedle object and runs mutations for you. See the [actions guide](/guide/actions.html#example) for an example of this in action.
