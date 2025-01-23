import axios, { AxiosResponse } from 'axios';

export abstract class AbstractHttpService {
    protected get<T>(url: string, options?: any): Promise<AxiosResponse<T, any>> {
      return axios.get<T>(url, options);
    }
  
    protected post<T>(url: string, body: any, options?: any): Promise<AxiosResponse<T, any>> {
      return axios.post<T>(url, body, options);
    }
  
    protected put<T>(url: string, body: any, options?: any): Promise<AxiosResponse<T, any>> {
      return axios.put<T>(url, body, options);
    }
  
    protected delete<T>(url: string, options?: any): Promise<AxiosResponse<T, any>> {
      return axios.delete<T>(url, options);
    }
}