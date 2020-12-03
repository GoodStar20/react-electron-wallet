import './styles.css';

import { Identities } from '@arkecosystem/crypto';
import React from 'react';

import { PrimaryBtn, PrimaryLineBtn } from '../../components/Button';
import { Input } from '../../components/Input';
type IProps = {
	changeGenerateState: () => void;
	phraseArray: string[];
	phrase: string;
};

const GenerateWallet = ({
	changeGenerateState,
	phraseArray,
	phrase,
}: IProps) => {
	const createNewAddress = () => {
		const newAddress = Identities.Address.fromPassphrase(`${phrase}`);
		alert(`New Wallet Address:\n ${newAddress}`);
		changeGenerateState();
	};
	const savePassphrase = () => {
		alert(`Passphrase:\n ${phrase}`);
		changeGenerateState();
	};

	return (
		<div className="generate-content second-page">
			<div className="title">Generate Wallet</div>
			<div className="sub-title">
				Save your password, this is the only way to access your funds
			</div>
			<div className="grid grid-cols-3 sm:grid-cols-1 w-full xl:w-3/4 lg:w-3/4 md:w-10/12 sm:w-full mt-3 gap-2 mt-5">
				{phraseArray?.length > 0 &&
					phraseArray.map((phrase, index) => (
						<div className="relative rounded-full w-full flex" key={index}>
							<div className="wallet-number rounded-full rounded-r-none">
								{index + 1}
							</div>
							<Input value={phrase} className="pl-12" readOnly />
						</div>
					))}
			</div>
			<div className="w-full items-center justify-center mt-8 flex sm:flex-col">
				<PrimaryLineBtn
					onClick={savePassphrase}
					label="Copy"
					className="mx-2"
				/>
				<PrimaryBtn
					onClick={createNewAddress}
					label="Continue"
					className="sm:mt-2 mx-2"
				/>
			</div>
		</div>
	);
};

export default GenerateWallet;
