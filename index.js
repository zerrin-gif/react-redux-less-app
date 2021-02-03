import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { compose, applyMiddleware, createStore,combineReducers } from "redux";
import { Provider } from "react-redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import thunk from "redux-thunk";

function reducer(state, action) {
  console.log(action);
  if (action.type==='changeState') {
    return action.payload.newState;
  }
  return "State 123";
}
const allEnancers = compose(
applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const rootReducer=combineReducers({
  product:productReducer,
  user:userReducer
});
// const store = createStore(reducer);
const store = createStore(rootReducer,{
  product:[{name:'Sony',type:'GAME BOX'}],
  user:'Tommy'
},allEnancers
);

// const updateUserAction = {
//   type: "userUpdate",
//   payload: { user: "New Tommy" },
// };
// store.dispatch(updateUserAction);

console.log(store.getState());

const action = {
  type: "changeState",
  payload: { newState: "My new state" },
};

store.subscribe(()=>{
  console.log("Store update:",store.getState());
});

store.dispatch(action);
// store.dispatch(action);
// store.dispatch(action);

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App count={4} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
