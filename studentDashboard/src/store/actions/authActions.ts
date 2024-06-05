import { schoolLogin, studentSignup } from "../../services/authServices";
import { setAccessToken } from "../../ultils/tokenData";
import { AppDispatch } from "../store";
import * as types from "./actionTypes";
import toast from "react-hot-toast";

interface LoginPayload {
  email: string;
  password: string;
}

interface SignupPayload {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  location: string;
  student_class: string;
}

export const fetchStudentSignup = (payload: SignupPayload) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: types.SIGNUP_REQUEST });
    try {
      const response = await studentSignup(payload);
      if (response.status === 200) {
        setAccessToken(response.data.token);
        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: response.data,
        });
        toast.success(`${response.data.message}`);
        console.log("Sign up success", response.data);
      }
      return { type: types.SIGNUP_SUCCESS };
    } catch (error: any) {
      toast.error(`"error",${error.response.data.message}`);
      console.error("Sign up Failed: " + error.response.data);
      dispatch({ type: types.SIGNUP_FAILURE });
      return { type: types.SIGNUP_FAILURE };
    }
  };
}

export const fetchSchoolLogin = (payload: LoginPayload) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    try {
      const response = await schoolLogin(payload);
      if (response.status === 200) {
        setAccessToken(response.data.token);
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: response.data,
        });
        toast.success(`${response.data.message}`);
        console.log("Login success", response.data);
    }
      return { type: types.LOGIN_SUCCESS };
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
      console.error("Login Failed: " + error.response.data);
      dispatch({ type: types.LOGIN_FAILURE });
      return { type: types.LOGIN_FAILURE };
    }
  };
};

