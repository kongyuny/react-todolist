import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import indexlist from "./indexReducer";
let reducer = combineReducers({
    indexlist
})
let store = createStore(reducer,applyMiddleware(thunk));

export default store;