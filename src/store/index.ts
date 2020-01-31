import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@reducers/index';

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  console.log('.....');
  console.log(process.env.NODE_ENV);
  console.log('.....');

  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, compose(middleWareEnhancer));
  }

  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
}
