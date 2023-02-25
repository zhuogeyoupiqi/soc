import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import axios from 'axios';

interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  transform?: any;
  requestOptions?: any;
}

export class VAxios{
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);

    this.setupInterceptors();
  }

  /**
   * @description: 拦截器配置
   */
  setupInterceptors() {
    this.axiosInstance.interceptors.request.use((config:AxiosRequestConfig) => {})
  }
}