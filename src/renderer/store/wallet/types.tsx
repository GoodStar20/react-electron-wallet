export const GET_WALLET_DATA = 'GET_WALLET_DATA';

export interface IWallet {
	address: string;
	attributes: object;
	balance: string;
	nonce: string;
}

export interface WalletState {
	wallet: IWallet;
}

interface GetWalletAction {
	type: typeof GET_WALLET_DATA;
	payload: IWallet;
}
export type WalletActionTypes = GetWalletAction;
