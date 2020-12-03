import './styles.css';

import { Identities, Transactions } from '@arkecosystem/crypto';
import { History } from 'history';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import logo from '../../assets/icons/logo.svg';
import { SecondaryBtn } from '../../components/Button';
import { Input } from '../../components/Input';
import { deleteWallet } from '../../store/wallet/actions';
import { eArabic } from '../../utils';

type IProps = {
	walletData: {
		address: string;
		attributes: object;
		balance: string;
		nonce: string;
	};
};
type ITransValue = {
	amount: string;
	passphrase: string;
	recipient: string;
};
const Header = ({ walletData }: IProps) => {
	const dispatch: Dispatch<any> = useDispatch();
	const history: History<any> = useHistory();

	const [transValue, setTransValue] = useState<ITransValue>({
		amount: '',
		passphrase: '',
		recipient: '',
	});

	const goHome = () => {
		dispatch(deleteWallet());
		history.push('/');
	};
	const handleChange = (e: any) => {
		setTransValue({ ...transValue, [e.target.id]: e.target.value });
	};
	const sendTranaction = () => {
		if (
			transValue.amount === '' ||
			transValue.passphrase === '' ||
			transValue.recipient === ''
		)
			return;
		const senderPublicKey = Identities.PublicKey.fromPassphrase(
			`${transValue.passphrase}`,
		);
		const amount = Number(transValue.amount) * Math.pow(10, 8);
		const transaction = Transactions.BuilderFactory.transfer()
			.amount(`${amount}`)
			.fee('1000')
			.recipientId(`${transValue.recipient}`)
			.senderPublicKey(senderPublicKey)
			.sign('sender')
			.build();

		const serialized = Transactions.Serializer.serialize(transaction).toString(
			'hex',
		);
		const deserialized = Transactions.Deserializer.deserialize(serialized);
		alert(
			`Amount: ${transValue.amount}\n Recipient: ${deserialized.data.recipientId}\n SenderPublicKey: ${deserialized.data.senderPublicKey}`,
		);
	};
	return (
		<div className="transaction-header">
			<div className="header-bar">
				<div className="logo" onClick={goHome}>
					<img src={logo} />
					<span>ARK Wallet</span>
				</div>
				<div className="division" />
				<div className="wallet-address">
					<div className="address-icon">
						<span className="icon" />
					</div>
					<div className="address-title">
						<span className="title">Address</span>
						<div className="detail">
							<div className="name">{walletData.address}</div>
							<span className="copy-icon" />
						</div>
					</div>
				</div>
				<div className="division" />
				<div className="wallet-balance">
					<div className="balance-icon">
						<span className="icon" />
					</div>
					<div className="balance-title">
						<span className="title">Balance</span>
						<div className="detail">
							<span>{eArabic(walletData.balance)} DARK</span>
						</div>
					</div>
				</div>
			</div>
			<div className="header-content">
				<div className="title">Send ARK</div>
				<div className="sub-title text-left">
					Fill in the fields and press the Send button to send the transaction.
				</div>
				<div className="input-boxes">
					<div className="grid gap-4 grid-cols-3 sm:grid-cols-1 w-full">
						<div className="box">
							<div className="label-name ml-5 mb-2">Amount</div>
							<Input
								placeholder="Enter Amount"
								value={transValue.amount}
								id="amount"
								onChange={handleChange}
							/>
						</div>
						<div className="box">
							<div className="label-name ml-5 mb-2">Recipient</div>
							<Input
								placeholder="Enter recipient"
								value={transValue.recipient}
								id="recipient"
								onChange={handleChange}
							/>
						</div>
						<div className="box">
							<div className="label-name ml-5 mb-2">Passphrase</div>
							<Input
								placeholder="Enter your passphrase"
								value={transValue.passphrase}
								id="passphrase"
								onChange={handleChange}
							/>
						</div>
					</div>
					<SecondaryBtn
						className="send-btn"
						onClick={sendTranaction}
						label="Send"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
