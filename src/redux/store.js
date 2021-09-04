import AuthReducer from "./auth-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "../sagas";
import {AppReducer} from "./app-reducer";

let reducers = combineReducers({
    auth: AuthReducer,
    app: AppReducer,
});

const sagaMiddleWare = createSagaMiddleware();

let store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootWatcher);

export default store;