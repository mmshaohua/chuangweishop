import { createStore, compose } from "redux";
const initialState ={data:null},
const reducer = (state=initialState, action) => {
  return state;
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());
export default store;
