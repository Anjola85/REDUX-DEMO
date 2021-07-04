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
