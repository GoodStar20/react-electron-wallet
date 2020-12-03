import './styles.css';

import { History } from 'history';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import { PrimaryBtn, PrimaryLineBtn } from '../../components/Button';
import { Input } from '../../components/Input';
import { AppState } from '../../store';
import { getWallet } from '../../store/wallet/actions';

type IProps = {
	changeImportSate: () => void;
};
const SecondPage = ({ changeImportSate }: IProps) => {
	const dispatch: Dispatch<any> = useDispatch();
	const history: History<any> = useHistory();
	const { wallet } = useSelector((state: AppState) => state.wallet);
	const [address, setAddress] = useState<string>('');

	const handleChange = (e: any) => {
		setAddress(e.target.value);
	};
	const handleWallet = () => {
		if (address !== '') dispatch(getWallet(address));
	};

	useEffect(() => {
		if (wallet.address !== '') {
			history.push('/transaction');
		}
	}, [history, wallet]);
	return (
		<div className="import-content flex flex-col items-center">
			<div className="title">Import Wallet</div>
			<div className="sub-title">
				Enter an address or password in order to import your wallet
			</div>
			<div className="flex flex-col mt-12 w-full items-center ">
				<span className="mb-2 label-name">Address or Passphrase</span>
				<Input
					value={address}
					placeholder="Enter Address or Passphrase"
					onChange={handleChange}
				/>
			</div>
			<div className="w-full items-center justify-center mt-8 flex sm:flex-col">
				<PrimaryLineBtn
					onClick={changeImportSate}
					label="Back"
					className="mx-2"
				/>
				<PrimaryBtn
					onClick={handleWallet}
					label="	Go to Wallet"
					className="mx-2 sm:mt-4"
				/>
			</div>
		</div>
	);
};

export default SecondPage;
