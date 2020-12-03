export const GET_TRANSACTION_DATA = 'GET_TRANSACTION_DATA';

export interface Transaction {
	blockId: string;
	sender: string;
	recipient: string;
	timestamp: object;
	amount: string;
	fee: string;
}

export interface TransactionState {
	transactions: Transaction[];
	loading: boolean;
}

interface GetTransactionAction {
	type: typeof GET_TRANSACTION_DATA;
	payload: TransactionState;
}
export type TransactionActionTypes = GetTransactionAction;
