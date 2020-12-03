import './styles.css';

import { History } from 'history';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import { AppState } from '../store';
import { getTransaction } from '../store/transaction/actions';
import { IWallet } from '../store/wallet/types';
import Footer from './Footer';
import Container from './Transactions/Container';
import Header from './Transactions/Header';

const Transaction = () => {
	const dispatch: Dispatch<any> = useDispatch();
	const history: History<any> = useHistory();
	const [walletData, setWalletData] = useState<IWallet>({
		address: '',
		attributes: {},
		balance: '',
		nonce: '',
	});
	const [transactionData, setTransactionData] = useState<any>([]);
	const { wallet } = useSelector((state: AppState) => state.wallet);
	const { transactions, loading } = useSelector(
		(state: AppState) => state.transaction,
	);
	useEffect(() => {
		setWalletData(wallet);
	}, [wallet]);
	useEffect(() => {
		if (wallet.address === '') {
			history.push('/');
		}
	}, []);
	useEffect(() => {
		if (walletData.address !== '') dispatch(getTransaction(walletData.address));
	}, [walletData, dispatch]);

	useEffect(() => {
		setTransactionData(transactions);
	}, [transactions]);

	return (
		<div className="main">
			{loading && (
				<div className="loader-container">
					<div className="loader" />
				</div>
			)}
			<Header walletData={walletData} />
			<Container transactionData={transactionData} />
			<Footer />
		</div>
	);
};

export default Transaction;
