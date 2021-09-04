

const initialState = {
    initialized: false,
    globalError: null
}

export const SET_INITIALIZED = 'app-reducer/SET_INITIALIZED';
export const INITIALIZED_SUCCESS = 'app-reducer/INITIALIZED_SUCCESS';

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    };
};

export const initializedSuccess = () => ({type:INITIALIZED_SUCCESS});
export const setInitialized = () => ({type: SET_INITIALIZED});