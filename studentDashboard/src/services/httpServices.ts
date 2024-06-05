import axios, { AxiosResponse } from 'axios';
import { getAccessToken } from '../ultils/tokenData';


class HttpService {
    private token: string;
    private baseUrl: string;

    constructor() {
        this.token = getAccessToken();
        this.baseUrl = import.meta.env.VITE_BASE_URL!;
    }

    postData = async (payload: any, url: string): Promise<AxiosResponse<any>> => {
        return await axios.post(this.baseUrl + url, payload);
      };
    
      postDataWithToken = async (
        payload: any,
        url: string
      ): Promise<AxiosResponse<any>> => {
        return await axios.post(this.baseUrl + url, payload, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
      };

      getDataWithToken = async (url: string): Promise<AxiosResponse<any>> => {
        const AuthStr = "Bearer ".concat(this.token);
        return axios.get(this.baseUrl + url, {
          headers: { Authorization: AuthStr },
        });
      };
    
      getDataWithoutToken = async (url: string): Promise<AxiosResponse<any>> => {
        return axios.get(this.baseUrl + url);
      };

      putDataWithToken = async (
        formData: any,
        url: string
      ): Promise<AxiosResponse<any>> => {
        const AuthStr = "Bearer ".concat(this.token);
        return axios.put(this.baseUrl + url, formData, {
          headers: { Authorization: AuthStr },
        });
      };

      deleteData = async (url: string): Promise<AxiosResponse<any>> => {
        const AuthStr = "Bearer ".concat(this.token);
        return axios.delete(this.baseUrl + url, {
          headers: { Authorization: AuthStr },
        });
      };
}; 

export default HttpService;