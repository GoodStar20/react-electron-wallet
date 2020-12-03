import axios from 'axios';

import { GET_WALLET_DATA } from './types';
export const getWallet = (address: string) => async (dispatch: Function) => {
	const { API_URL } = process.env;
	await axios
		.get(`${API_URL}/wallets/${address}`)
		.then((res) => {
			dispatch({ type: GET_WALLET_DATA, payload: res.data.data });
		})
		.catch((err) => {
			const data = {
				address: '',
				attributes: {},
				balance: '',
				nonce: '',
			};
			dispatch({ type: GET_WALLET_DATA, payload: data });
		});
};
export const deleteWallet = () => (dispatch: Function) => {
	const data = {
		address: '',
		attributes: {},
		balance: '',
		nonce: '',
	};
	dispatch({ type: GET_WALLET_DATA, payload: data });
};
