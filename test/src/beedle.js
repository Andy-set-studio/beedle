import { expect } from 'chai';
import Store from '../../src/beedle.js';

// Create shared state objects. One that is initial, and one that is an updated version of the initial state
const initialState = {
    topLevel: 'Hi, I am at the top',
    nested: {
        secondLevel: 'Hello, I am nested at the second level' 
    }
};

const updatedState = {
    topLevel: 'Hi, I am at the top, m8',
    nested: {
        secondLevel: 'Hello, I am nested at the 2nd level' 
    }
};

// Create a shared store instance that all tests can use
const storeInstance = new Store({
    initialState,
    actions: {
        runUpdate(context, payload) {
            return context.commit('updateState', payload);
        }    
    },
    mutations: {
        updateState(state, payload) {
            Object.assign(state, payload);
            return state;
        }
    }
});

describe('src/beedle.js', () => {
    
    it('Dispatch returns true if action was found', () => {

        expect(storeInstance.dispatch('runUpdate', updatedState)).to.equal(true);
    });

    it('Dispatch returns false if action wasn\'t found', () => {

        expect(storeInstance.dispatch('nonExistentAction', { state: 'uh, oh' })).to.equal(false);
    });
    
    it('Commit returns true if mutation was found', () => {

        expect(storeInstance.commit('updateState', updatedState)).to.equal(true);
    });

    it('commit returns false if mutation wasn\'t found', () => {

        expect(storeInstance.commit('nonExistentMutation', updatedState)).to.equal(false);
    });

    it('Subscribe returns true if valid function passed in', () => {
        
        expect(storeInstance.subscribe(() => {})).to.equal(true);
    });

    it('Subscribe returns false if non-valid function passed in', () => {
        
        expect(storeInstance.subscribe(null)).to.equal(false);
    });

    it('Mutation overrides state', () => {
        storeInstance.commit('updateState', updatedState);

        expect(storeInstance.state).to.deep.equal(updatedState);
    });
});
