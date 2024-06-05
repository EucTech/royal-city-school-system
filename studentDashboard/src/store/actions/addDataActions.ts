import { addNotice, addSubject, getTotalNotice, getTotalSubject } from "../../services/addDataServices";
import { AppDispatch } from "../store";
import * as types from "./actionTypes";
import toast from "react-hot-toast";


export const fetchAddNotice = (payload: {}) => async (dispatch: AppDispatch) => {
    try {
        dispatch({type: types.ISLOADING, payload: true});
        const response = await addNotice(payload);
        if (response.status === 201) {
            dispatch({type: types.ADDED_NOTICE, payload: response.data});
            toast.success("Notice added successfully");
            console.log("Add notice success", response.data);
        }
    } catch (error: any) {
        toast.error("Failed to add notice");
        console.error("Add notice Failed: " + error.response.data);
    } finally{
        dispatch({ type: types.ISLOADING, payload: false });
    }
};

export const fetchTotalNotice = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({type: types.ISLOADING, payload: true});
        const response = await getTotalNotice();
        if (response.status === 200) {
            const { data } = response.data;
            dispatch({type: types.TOTAL_NOTICE, payload: data});
            console.log("Total notice success", response.data);
        }
    } catch (error: any) {
        console.error("Total notice Failed: " + error.response.data);
    } finally{
        dispatch({ type: types.ISLOADING, payload: false });
    }
}

export const fetchAddSubject = (payload: {}) => async (dispatch: AppDispatch) => {
    try {
        dispatch({type: types.ISLOADING, payload: true});
        const response = await addSubject(payload);
        if (response.status === 201) {
            dispatch({type: types.ADDED_SUBJECT, payload: response.data});
            toast.success("Subject added successfully");
            console.log("Add subject success", response.data);
        }
    } catch (error: any) {
        toast.error("Failed to add subject");
        console.error("Add subject Failed: " + error.response.data);
    } finally{
        dispatch({ type: types.ISLOADING, payload: false });
    }
}

export const fetchTotalSubject = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({type: types.ISLOADING, payload: true});
        const response = await getTotalSubject();
        if (response.status === 200) {
            const { data } = response.data;
            dispatch({type: types.TOTAL_SUBJECT, payload: data});
            console.log("Total subject success", response.data);
        }
    } catch (error: any) {
        console.error("Total subject Failed: " + error.response.data);
    } finally{
        dispatch({ type: types.ISLOADING, payload: false });
    }
}