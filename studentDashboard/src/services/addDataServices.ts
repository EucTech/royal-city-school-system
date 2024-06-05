import HttpService from "./httpServices";

export const addNotice = async (payload: {}) => {
    const http = new HttpService();
    const url = "/school-admin/add-notice";
    return await http.postDataWithToken(payload, url);
}

export const getTotalNotice = async () => {
    const http = new HttpService();
    const url = "/school-admin/total-notice";
    return await http.getDataWithToken(url);
}

export const addSubject =  async (payload: {}) => {
    const http = new HttpService();
    const url = "/school-admin/create-subject";
    return await http.postDataWithToken(payload, url);
}

export const getTotalSubject = async () => {
    const http = new HttpService();
    const url = "/school-admin/total-subject";
    return await http.getDataWithToken(url);
}