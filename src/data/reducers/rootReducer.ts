import { combineReducers, Reducer } from 'redux';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';

import image from './image';

const combinedReducer = combineReducers({
  image,
});

const rootReducer: Reducer = (state: any, action: IReduxAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;