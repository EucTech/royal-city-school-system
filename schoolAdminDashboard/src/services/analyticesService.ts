import HttpService from "./httpServices";

export const getAllStudents = async () => {
    const http = new HttpService();
    const url = "/school-admin/all-student";
    return await http.getDataWithToken(url);
}

export const getTotalStudents = async () => {
    const http = new HttpService();
    const url = "/school-admin/total-student";
    return await http.getDataWithToken(url);
}



