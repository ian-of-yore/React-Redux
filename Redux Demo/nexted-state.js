const redux = require('redux');
const createStore = redux.legacy_createStore;
const produce = require('immer').produce;

// Defining the initial State
const initialState = {
    name: 'Montana',
    address: {
        street: 'Indian Reservation',
        city: 'Montana',
        street: 'Yellowstone'
    }
}

// Creating the action
const STREET_UPDATED = 'STREET_UPDATED';
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

// Defining the reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            })
        default: {
            return state;
        }
    }
}


// creating the redux store
const store = createStore(reducer);
console.log('Initial State', store.getState());
const unSubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})
store.dispatch(updateStreet('Sudden Valley'))
unSubscribe();
