import * as types from '../actions/actionTypes';

interface Action {
    type: string;
    payload?: any;
}

interface State {
    isLoading: boolean;
    isAuthenticated: boolean;
    auth: {} | undefined;
    students: {} | undefined;
}

const initialState: State = {
    isLoading: false,
    isAuthenticated: false,
    auth: {},
    students: {},
}

const authReducers = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                auth: action.payload,
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                auth: {},
            }
        case types.SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                student: action.payload,
            }
        case types.SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                student: {},
            }
        case types.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.ISLOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state;
    }
}

export default authReducers;