import { GET_WALLET_DATA, WalletActionTypes, WalletState } from './types';

const initialState: WalletState = {
	wallet: {
		address: '',
		attributes: {},
		balance: '',
		nonce: '',
	},
};

export function walletReducer(
	state = initialState,
	action: WalletActionTypes,
): WalletState {
	switch (action.type) {
		case GET_WALLET_DATA:
			return {
				...state,
				wallet: action.payload,
			};

		default:
			return state;
	}
}
