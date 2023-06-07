import { Action } from 'redux';

export interface IBasePayload {
  host?: string;
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  body?: any;
  params?: any;
  [key: string]: any;
}

export interface IReduxAction extends Action {
  payload?: IBasePayload,
  data?: any,
  onSuccess?: (data: any) => void
  onFailed?: (error: any) => void
}