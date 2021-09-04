import {all} from "redux-saga/effects";
import {authWatcher} from "./auth-saga";
import {appWatcher} from "./app-saga";

export function* rootWatcher() {
    yield all([authWatcher(), appWatcher()]);
}
