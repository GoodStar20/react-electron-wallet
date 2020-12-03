import axios from 'axios';

import { GET_TRANSACTION_DATA } from './types';
export const getTransaction = (address: string) => async (
	dispatch: Function,
) => {
	const { API_URL } = process.env;
	dispatch({
		type: GET_TRANSACTION_DATA,
		payload: { loading: true },
	});
	await axios
		.get(`${API_URL}/wallets/${address}/transactions?page=1&limit=15`)
		.then((res) => {
			dispatch({
				type: GET_TRANSACTION_DATA,
				payload: { transactions: res.data.data, loading: false },
			});
		});
};
