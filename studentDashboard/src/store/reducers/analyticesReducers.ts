import * as types from '../actions/actionTypes';


interface Action {
    type: string;
    payload?: any;
}

interface State {
    isLoading: boolean;
    isAuthenticated: boolean;
    allStudents: any[];
    totalStudents: number | undefined;
}

const initialState: State = {
    isLoading: false,
    isAuthenticated: false,
    allStudents: [] ,
    totalStudents: 0,
}


const analyticsReducers = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.GET_ALL_STUDENTS:
            return {
                ...state,
                allStudents: action.payload,
            }
        case types.TOTAL_STUDENTS:
            return {
                ...state,
                totalStudents: action.payload,
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

export default analyticsReducers;