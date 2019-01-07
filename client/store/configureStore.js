import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const logger = createLogger();
let middleware;
if (process.env.NODE_ENV === 'development') {
  middleware = composeWithDevTools(applyMiddleware(thunk, logger));
} else {
  middleware = applyMiddleware(thunk);
}

/** *
 * @description - configure Redux store
 *
 *
 * @returns {Object} - Object representing redux store
 */
const store = createStore(
  rootReducer,
  middleware
);
export default store;
