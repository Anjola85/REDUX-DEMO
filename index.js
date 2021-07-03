const redux = require("redux");
const createStore = redux.createStore;
// CODE FORMAT:  JS APP -> ACTION -> REDUCER -> REDUX STORE -> JS APP
// this happens in a matter of milli-seconds

// FIRST STEP -> ACTION
const BUY_CAKE = "BUY_CAKE";
// this function returns an action(which is an object with the TYPE property)
function buyCake() {
  return {
    type: BUY_CAKE, // this indicates the type of action to perform
    info: "First redux action",
  };
}

// SECOND STEP -> REDUCERS: (updates the state): i.e controles how the state transition happen
// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //using spread operator to create copy of the state object and only update the property that needs changing
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

// THIRD STEP -> REDUX STORE
// remeber to timport redux and redux.createStore

const store = createStore(reducer); //this creates the redux store. (1)holding application state
console.log("Initial state: ", store.getState()); //getState() returns initial state of the application

const unsubscribe = store.subscribe(
  //this is a listener: it logs to the console anytime the store updates.
  () => console.log("Updated state: ", store.getState()) //allows app to subscribe to changes in the store
);

store.dispatch(buyCake()); //dispatch(action): allows state to be updated
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

// EXPLANATION;
// when dispatch("action") is called, the reducer sees the action type which is "buyCake()". Next the store state is updated
// the listener is then called which logs to the console THE UPDATED STATE.
