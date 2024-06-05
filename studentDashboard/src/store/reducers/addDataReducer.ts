import * as types from '../actions/actionTypes';

interface Action {
    type: string;
    payload?: any;
}

interface State {
    isLoading: boolean;
    isAuthenticated: boolean;
    addNotice: {} | undefined;
    totalNotice: number | undefined;
    addSubject: {} | undefined;
    totalSubject: number | undefined;
}

const initialState: State = {
    isLoading: false,
    isAuthenticated: false,
    addNotice: {},
    totalNotice: 0,
    addSubject: {},
    totalSubject: 0,
}

export const addReducers = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.ADDED_NOTICE: {
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                addNotice: action.payload,
            }
        }
        case types.TOTAL_NOTICE: {
            return {
                ...state,
                totalNotice: action.payload,
            }
        
        }
        case types.ADDED_SUBJECT: {
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                addSubject: action.payload,
            }
        }
        case types.TOTAL_SUBJECT: {
            return {
                ...state,
                totalSubject: action.payload,
            }
        }
        case types.ISLOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        default:
            return state;
    }
}