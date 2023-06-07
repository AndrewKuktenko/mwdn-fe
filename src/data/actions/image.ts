import { Dispatch } from "redux";
import { EReduxTypes } from "enums/redux.types";
import { IReduxAction } from "ts/interfaces/redux/redux.action";

export const getAllImages = () => (dispatch: Dispatch): void => {
  const action: IReduxAction = {
    type: EReduxTypes.GET_ALL_IMAGES,
    payload: {
      method: 'GET',
      endpoint: 'images'
    }
  }

  dispatch(action);
};