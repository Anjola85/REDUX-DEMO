const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
// middle-ware imports
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

// FIRST STEP -> ACTION
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// SECOND STEP -> REDUCERS: (updates the state): i.e controles how the state transition happen
// (previousState, action) => newState

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// THIRD STEP -> REDUX STORE

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake()); //dispatch(action): allows state to be updated
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

// explanation
// how to compile multiple reducers and states
// combining all reducers by using the built in redux method
// combineReducers accepts an object that has a key value pair which corresponds to the reducer
