import HttpService from "./httpServices";

export const schoolLogin = async (payload: any) => {
    const http = new HttpService();
    const url = "/auth/school-login";
    return await http.postData(payload, url);
}

export const logout = async () => {
    const http = new HttpService();
    const url = "/auth/logout";
    return await http.getDataWithToken(url);
}