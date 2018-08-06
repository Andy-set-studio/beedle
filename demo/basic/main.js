import Store from './beedle.js';

// Set actions, mutations and initial state
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

// Create our store instance
const storeInstance = new Store({
    actions,
    mutations,
    initialState
});

// Grab the textearea and dispatch the action on 'input'
const textElement = document.querySelector('textarea');

textElement.addEventListener('input', () => {

    // Dispatch the action, which will subsequently pass this message to the mutation
    // which in turn, updates the store's state
    storeInstance.dispatch('saySomething', textElement.value.trim());
});

// Grab the text element and attach it to the stateChange event
const messageElement = document.querySelector('.js-message-element');

// This fires every time the state updates
storeInstance.subscribe(state => {
    messageElement.innerText = state.message;
});
