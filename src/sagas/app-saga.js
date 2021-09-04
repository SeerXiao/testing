import {put, takeEvery} from "redux-saga/effects";
import {INITIALIZED_SUCCESS, SET_INITIALIZED} from "../redux/app-reducer";
import {FETCH_SIGN_IN, SET_CURRENT_USER} from "../redux/auth-reducer";
import app from "../base";



function* intializeApp () {
    try {
        // yield app.auth().onAuthStateChanged = (user) => {
        //     if (user) {
        //         const currentUser = auth.currentUser;
        //     }
        // } после обновления страницы юзер пропадает, где он лежит или как его получить?

        //const currentUser = yield auth.currentUser;  под вопросом, почему то его нет
       // yield put ({type: SET_CURRENT_USER, currentUser});
        yield put ({type: SET_INITIALIZED});
    } catch (error) {
        const errorMessage = { code: error.code, message: error.message };
    }

}


export function* appWatcher () {
    yield takeEvery(INITIALIZED_SUCCESS, intializeApp);

}