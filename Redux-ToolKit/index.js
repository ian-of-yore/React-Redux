const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

console.log('Initial State', store.getState());
const unSubscribe = store.subscribe(() => {
    console.log('Update State', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

unSubscribe();