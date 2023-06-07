import { IReduxAction } from "ts/interfaces/redux/redux.action";
import { EReduxTypes } from "enums/redux.types";
import { IImageState } from "ts/interfaces/images/image.state"

const initialState: IImageState | {} = {};

const imageReducer = (state = initialState, action: IReduxAction): IImageState | {} => {
  switch (action.type) {
    case EReduxTypes.GET_ALL_IMAGES: {
      const data = action?.payload?.data;
      return {
        ...state,
        data,
      };
    };
    default:
      return state;
  };
};

export default imageReducer;
