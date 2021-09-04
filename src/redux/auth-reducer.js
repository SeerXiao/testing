


const initialState = {
    currentUser: null,
    isAuth: false,
    errors: {},
    registrationSuccess: false,
    waitingForResponse: false,

};

export const FETCH_SIGN_IN = "auth-reducer/FETCH_SIGN_IN";
export const FETCH_SIGN_IN_SUCCESS = 'auth-reducer/FETCH_SIGN_IN_SUCCESS';
export const FETCH_SIGN_IN_FAILURE = 'auth-reducer/FETCH_SIGN_IN_FAILURE';
export const FETCH_SIGN_OUT = 'auth-reducer/FETCH_SIGN_OUT';
export const FETCH_SIGN_OUT_SUCCESS = 'auth-reducer/FETCH_SIGN_OUT_SUCCESS';
export const FETCH_SIGN_OUT_FAILURE = 'auth-reducer/FETCH_SIGN_OUT_FAILURE';
export const SET_CURRENT_USER = 'auth-reducer/SET_CURRENT_USER';

export const FETCH_SIGN_UP = 'auth-reducer/FETCH_SIGN_UP';
export const FETCH_SIGN_UP_SUCCESS = 'auth-reducer/FETCH_SIGN_UP_SUCCESS';
export const FETCH_SIGN_UP_FAILURE = 'auth-reducer/FETCH_SIGN_UP_FAILURE';

export const RESET_REQUEST_ERRORS = 'auth-reducer/RESET_REQUEST_ERRORS';
export const RESET_REGISTRATION_SUCCESS = 'auth-reducer/RESET_REGISTRATION_SUCCESS';
export const SET_WAITING_FOR_RESPONSE = 'auth-reducer/SET_WAITING_FOR_RESPONSE';



const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SIGN_IN_FAILURE:
            return {
                ...state,
                errors: action.error,
                waitingForResponse: false
            };
        case FETCH_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.user,
                isAuth: true,
                waitingForResponse: false
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user,
            };
        case FETCH_SIGN_OUT_SUCCESS:
            return  {
                ...state,
                currentUser: null,
                waitingForResponse: false
            };
        case FETCH_SIGN_UP_SUCCESS:
            return {
                ...state,
                registrationSuccess: true,
                currentUser: action.user,
                waitingForResponse: false
            };
        case FETCH_SIGN_UP_FAILURE:
            return {
                ...state,
                errors: action.error,
                waitingForResponse: false
            };
        case RESET_REQUEST_ERRORS:
            return {
                ...state,
                errors: {}
            };
        case RESET_REGISTRATION_SUCCESS:
            return {
                ...state,
                registrationSuccess: false
            };
        case SET_WAITING_FOR_RESPONSE:
            return {
                ...state,
                waitingForResponse: true
            };
        default:
            return state;
    }
};

export const fetchSignIn = (payload) => ({type: FETCH_SIGN_IN, payload});
export const fetchSignInSuccess = (user) => ({type: FETCH_SIGN_IN_SUCCESS, user});
export const fetchSignInFailure = (error) => ({type: FETCH_SIGN_IN_FAILURE, error});

export const setCurrentUser = (user) => ({type: SET_CURRENT_USER, user});
export const setWaitingForResponse = () => ({type: SET_WAITING_FOR_RESPONSE});

export const fetchSignOut = () => ({type: FETCH_SIGN_OUT});

export const fetchSignUp = (payload) => ({type: FETCH_SIGN_UP, payload});
export const fetchSignUpSuccess = (user) => ({type: FETCH_SIGN_UP_SUCCESS, user});
export const fetchSignUpFailure = (error) => ({type: FETCH_SIGN_UP_FAILURE, error});

export const resetRequestErrors = () => ({type: RESET_REQUEST_ERRORS});
export const resetRegistrationSuccess = () => ({type: RESET_REGISTRATION_SUCCESS});

export default AuthReducer;