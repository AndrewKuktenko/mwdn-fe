import { Middleware } from 'redux';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';
import axios, { AxiosResponse } from 'axios';

const apiMiddleware = (): Middleware => () => (next: any) => async (action: IReduxAction) => {
  if (!action) return false;
  const host = action?.payload?.host;
  const endpoint = action?.payload?.endpoint;
  const method = action?.payload?.method;
  const body = action?.payload?.body;
  const params = action?.payload?.params;
  const data = action?.data;
  const onSuccess = action?.onSuccess;
  const onFailed = action?.onFailed;

  const apiHost = (host) ? host : process.env.REACT_APP_API_URL;

  if (data) return next(action);

  try {
    const res: AxiosResponse = await axios({
      url: `${apiHost}/${endpoint}`,
      method,
      data: body,
      params,
    });

    const data = res?.data;
    if (onSuccess) onSuccess(data);

    return next({
      ...action,
      payload: data,
    });
  } catch (err) {
    if (onFailed) return onFailed(err);
    return false;
  }
};

export default apiMiddleware;