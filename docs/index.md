---
title: Beedle
---
# Beedle

![The current build status based on whether tests are passing](https://api.travis-ci.org/hankchizljaw/beedle.svg?branch=master)
![The Uncompressed size of Beedle](http://img.badgesize.io/https://unpkg.com/beedle?label=Uncompressed%20Size)
![The GZIP size of Beedle](http://img.badgesize.io/https://unpkg.com/beedle?compression=gzip&label=GZIP%20Size)
![The Brotli size of Beedle](http://img.badgesize.io/https://unpkg.com/beedle?compression=brotli&label=Brotli%20Size)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Beedle is a tiny library to help you manage state across your application. Inspired by great libraries like Vuex and Redux, Beedle creates a central store that enables you predictably control and cascade state across your application.

This library was initially created as a prototype for [this article on CSS-Tricks](https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/), where you learn how to build a state management system from scratch with Vanilla JavaScript.

[**See the documentation**](https://beedle.hankchizljaw.io)
[**See the project structure**](https://beedle-structure.hankchizljaw.io)

## Demos
- [**Basic demo**](https://beedle-basic-demo.hankchizljaw.io/) 
- [**Advanced demo**](https://beedle-advanced-demo.hankchizljaw.io/) 
- [**Vue JS demo**](https://beedle-vue-demo.hankchizljaw.io/) 
- [**React JS demo**](https://beedle-react-demo.hankchizljaw.io/) 

# How it works

Beedle creates a pattern where a single source of truth, the '*Application State*' cascades state across your app in a predictable fashion. To modify state, a set flow of `actions` and `mutations` help create a traceable data-flow that makes things a little easier to debug. 

Using a [Pub/Sub pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) which notifies anything that is subscribed to changes, a fully reactive front-end can be achieved with a few kilobytes of vanilla JavaScript.

![A flow diagram that shows an action that calls a mutation, which mutates the state and triggers an update to anything that is listening](https://s3-us-west-2.amazonaws.com/s.cdpn.io/174183/beedle-flow-diagram.png)

As the diagram above shows, a simple, predictable flow is created by pushing data into an `action` which subsequently calls one or more `mutations`. Only the `mutation` can modify state, which helps with keeping track of changes.

## A mini library for small projects

Beedle is inspired by libraries like Redux, but certainly isn't designed to replace it. Beedle is aimed more at tiny little applications or where a development team might be looking to create the smallest possible footprint with their JavaScript.

## Performance budget

Beedle is intended to be tiny, so the largest that the uncompressed size will ever get to is 5kb.

## Browser support

Beedle is aimed at browsers that support ES6 by default. It also uses a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to monitor state, so [anything that supports Proxy](https://caniuse.com/#feat=proxy) will support Beedle.

You could use the [Proxy polyfill](https://github.com/GoogleChrome/proxy-polyfill) to support more browsers.

Most major browsers will support Beedle with no issues. 

## Getting started

You can pull Beedle down via [npm](http://npmjs.com) or take a [zip of this repository](https://github.com/hankchizljaw/beedle/archive/master.zip). The rest of this guide assumes you've used npm.

### 1) Install

Run `npm install beedle` in your project directory.



### 2) Create a `store` instance

First up, import it into your JavaScript:

```JavaScript
import Store from 'beedle';
```



Once you've got that you should create some `actions`, `mutations` and some initial state:

```javascript
const actions = {
    saySomething(context, payload) {
        context.commit('setMessage', payload);
    }
};

const mutations = {
    setMessage(state, payload) {
        state.message = payload;

        return state;
    }
};

const initialState = {
    message: 'Hello, world'
};
```

Once you've got those setup, you can create a `Store` instance like this:

```javascript
const storeInstance = new Store({
    actions,
    mutations,
    initialState
});
```

### 3) Use in your app

Let's say you've got a text box that you type a message into. When the content is changed, it could dispatch a new message to your store:

```javascript

// Grab the textarea and dispatch the action on 'input'
const textElement = document.querySelector('textarea');

textElement.addEventListener('input', () => {

    // Dispatch the action, which will subsequently pass this message to the mutation
    // which in turn, updates the store's state
    storeInstance.dispatch('saySomething', textElement.value.trim());
});
```

### 4) Listen for changes

Beedle uses the Pub/Sub pattern to transmit changes. Let's attach the message to a DOM element:

```javascript
// Grab the text element and attach it to the stateChange event
const messageElement = document.querySelector('.js-message-element');

// This fires every time the state updates
storeInstance.subscribe(state => {
    messageElement.innerText = state.message;
});
```

Head over to the [basic demo](https://beedle-basic-demo.hankchizljaw.io/) to see this in action 🚀

## Acknowledgements 

Thanks to [Eli Fitch](https://twitter.com/EliFitch/) for giving me the idea to call this Beedle. This matches my preference to call my little projects names based on Zelda. [Here's Beedle from Zelda](https://zelda.gamepedia.com/Beedle).

Thanks to the incredible people who maintain projects such as [Redux](http://redux.js.org), [Vuex](http://vuex.vuejs.org) and [MobX](http://mobx.js.org) et. al. Thanks for making our lives easier and for inspiring this project.
