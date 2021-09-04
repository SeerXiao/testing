import {put, takeEvery, call} from "redux-saga/effects";

import {
    FETCH_SIGN_IN,
    FETCH_SIGN_IN_FAILURE,
    FETCH_SIGN_IN_SUCCESS,
    FETCH_SIGN_OUT,
    FETCH_SIGN_OUT_FAILURE,
    FETCH_SIGN_OUT_SUCCESS,
    FETCH_SIGN_UP,
    FETCH_SIGN_UP_FAILURE,
    FETCH_SIGN_UP_SUCCESS,
    SET_WAITING_FOR_RESPONSE
} from "../redux/auth-reducer";

import app from '../base';
import {authApi} from "../api/authAPI";

function* signIn({payload}){
    try {
        debugger
        const request = yield authApi.login(payload);
        // yield (put ({type: SET_WAITING_FOR_RESPONSE}));
        // const auth = app.auth();
        // const result = yield call(
        //     [auth, auth.signInWithEmailAndPassword],
        //     payload.email,
        //     payload.password
        // );

        debugger
        yield put({ type: FETCH_SIGN_IN_SUCCESS, user: request.user });
        alert("удачно");

    } catch (error) {
        const errorMessage = { code: error.code, message: error.message };
        yield put({ type: FETCH_SIGN_IN_FAILURE, error: errorMessage });
        alert("неудачно");
    }
}

function* signOut(){

    try {
        yield (put ({type: SET_WAITING_FOR_RESPONSE}));
        const auth = app.auth();
        const result = yield call(
            [auth, auth.signOut]
        );

        yield put ({type: FETCH_SIGN_OUT_SUCCESS, payload: false});




    } catch (error) {
        debugger
        const errorMessage = { code: error.code, message: error.message };
        yield put({ type: FETCH_SIGN_OUT_FAILURE, error: errorMessage });
    }
}

function* signUp({payload}){
    try {
        yield (put ({type: SET_WAITING_FOR_RESPONSE}));
        const auth = app.auth();
        const result = yield call (
            [auth, auth.createUserWithEmailAndPassword],
            payload.email,
            payload.password);

        yield put ({type: FETCH_SIGN_UP_SUCCESS, user: result.user});

    } catch (error) {
        const errorMessage = { code: error.code, message: error.message };
        yield put({ type: FETCH_SIGN_UP_FAILURE, error: errorMessage });
    }
}


export function* authWatcher () {
    yield takeEvery(FETCH_SIGN_IN, signIn);
    yield takeEvery(FETCH_SIGN_OUT, signOut);
    yield takeEvery(FETCH_SIGN_UP, signUp);
}
