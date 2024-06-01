import { getAllStudents, getTotalStudents } from "../../services/analyticesService";
import { AppDispatch } from "../store";
import * as types from "./actionTypes";
import toast from "react-hot-toast";


export const fetchAllStudents =  () => async (dispatch: AppDispatch) => {
    try {
        dispatch({type: types.ISLOADING, payload: true});
        const response = await getAllStudents();
        if (response.status === 200) {
            const { data } = response.data;
            dispatch({ type: types.GET_ALL_STUDENTS, payload: data });
            toast.success("Fetched all students successfully");
            console.log("Get all students success", response.data);
        }
    } catch (error: any) {
        toast.error("Failed to fetch all students");
        console.error("Get all students Failed: " + error.response.data);
    } finally{
        dispatch({ type: types.ISLOADING, payload: false });
    }
};

export const fetchTotalStudents = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({type: types.ISLOADING, payload: true});
        const response = await getTotalStudents();
        if (response.status === 200) {
            dispatch({type: types.TOTAL_STUDENTS, payload: response.data});
            toast.success("Fetched total students successfully");
            console.log("Get total students success", response.data);
        }
    } catch (error: any) {
        toast.error("Failed to fetch total students");
        console.error("Get total students Failed: " + error.response.data);
    } finally{
        dispatch({ type: types.ISLOADING, payload: false });
    }
};
