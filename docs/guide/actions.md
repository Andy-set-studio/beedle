---
title: Actions
---
# Actions

Actions are quite similar to [mutations](/guide/mutations.html), but they can contain async operations such as fetching data. The end-goal of an action is to `commit` one or more [mutations](/guide/mutations.html).



## Example

Presuming you're following-on from the [getting started guide](/#getting-started), We'll add a new action like so:

```javascript
const actions = {
    updateTitle(context, payload) {
        context.commit('setTitle', payload.text);
    }
}
```

The `updateTitle` method has two parameters:

- `context` is an instance of Beedle
- `payload` is whatever is passed as the second parameter when you [dispatch](#dispatch) an action

Inside that method, you'll see that we are calling `context.commit`. This is us running a [mutation](/guide/mutations.html) and we're passing only the text that we want `state.title` to be.



## Dispatch

The `dispatch` method is part of the Beedle object and runs actions for you. You can `dispatch` wherever there's a reference to your store. Let's use the `storeInstance` object from the [previous step](/guide/state.html).

```javascript
// An initialised store. Params redacted for brevity
const storeInstance = new Store({
    ...
});
    
// Dispatch the `updateTitle` action to update the title
storeInstance.dispatch('updateTitle', { text: 'The new text for the title' })
```

Like the [previous step](/guide/state.html), you can also use destructuring here too:

```javascript
const { dispatch } = storeInstance;

// A much cleaner call to the action
dispatch('updateTitle', { text: 'The new text for the title' });
```



## Mutating state

To actually modify the state, our [mutation](/guide/mutations.html) will take over.

[Move to Mutations guide >](/guide/mutations.html).
