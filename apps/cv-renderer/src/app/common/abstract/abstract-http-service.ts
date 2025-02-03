import axios, { AxiosResponse } from 'axios';

export abstract class AbstractHttpService {
    protected async get<T>(url: string, options?: any): Promise<AxiosResponse<T, any>> {
      return await axios.get<T>(url, options);
    }
  
    protected async post<T>(url: string, body: any, options?: any): Promise<AxiosResponse<T, any>> {
      return await axios.post<T>(url, body, options);
    }
  
    protected async put<T>(url: string, body: any, options?: any): Promise<AxiosResponse<T, any>> {
      return await axios.put<T>(url, body, options);
    }
  
    protected async delete<T>(url: string, options?: any): Promise<AxiosResponse<T, any>> {
      return await axios.delete<T>(url, options);
    }
}