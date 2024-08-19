import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducers from "./authReducers";
const RootReducers = combineReducers({
  AuthReducers,
});
export const store = createStore(RootReducers, applyMiddleware(thunk));