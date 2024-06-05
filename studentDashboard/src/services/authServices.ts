import HttpService from "./httpServices";

export const studentSignup = async (payload: any) => {
    const http = new HttpService();
    const url = "/auth/student-signup";
    return await http.postData(payload, url);
}

export const schoolLogin = async (payload: any) => {
    const http = new HttpService();
    const url = "/auth/student-login";
    return await http.postData(payload, url);
}

export const logout = async () => {
    const http = new HttpService();
    const url = "/auth/logout";
    return await http.getDataWithToken(url);
}