import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { transactionReducer } from './transaction/reducers';
import { walletReducer } from './wallet/reducers';

export const rootReducer = combineReducers({
	wallet: walletReducer,
	transaction: transactionReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancer =
	((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			trace: true,
		})) ||
	compose;

const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(logger, thunk)),
);

export default store;
