# State

Beedle's state tree is a single object that can contain whatever data you want. It's _guarded_ by a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) which keeps an eye on things for you and tells Beedle if something has been modified. 

## Example object 

```javascript
const initialState = {
    title: 'A title',
    items: [
        {
            title: 'Item 1',
            url: '/'
        }
    ]
};
```



## Getting an item 

Presuming you've instantiated Beedle like the [getting started](/#getting-started) example, you can access state in a couple of ways.



### Example

Here's a basic example of getting the title from state once the `storeInstance` has been created.

```javascript
// An initialised store. Params redacted for brevity
const storeInstance = new Store({
    ...
});

// Log the title of the above state example
console.log(storeInstance.state.title);
```

You can also use a [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to clean things up a bit

```javascript
// Get the state only
const { state } = storeInstance;

console.log(state.title);
```



## Modifying state

To modify state, it's best to dispatch an [action](/guide/actions.html). Head over there to carry on.

[Move to Actions guide >](/guide/actions.html).
