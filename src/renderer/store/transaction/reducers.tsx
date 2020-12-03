import {
	GET_TRANSACTION_DATA,
	TransactionActionTypes,
	TransactionState,
} from './types';

const initialState: TransactionState = {
	transactions: [],
	loading: false,
};

export function transactionReducer(
	state = initialState,
	action: TransactionActionTypes,
): TransactionState {
	switch (action.type) {
		case GET_TRANSACTION_DATA:
			return {
				...state,
				transactions: action.payload.transactions,
				loading: action.payload.loading,
			};

		default:
			return state;
	}
}
