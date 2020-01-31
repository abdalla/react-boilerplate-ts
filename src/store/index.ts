import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, compose(middleWareEnhancer));
  }

  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
}
