import './styles.css';

import React from 'react';

import generateLogo from '../../assets/illustrations/GenerateWallet.svg';
import { SecondaryBtn } from '../../components/Button';

type IProps = {
	createPassphrase: () => void;
};
const FirstPage = ({ createPassphrase }: IProps) => (
	<div className="generate-content">
		<img src={generateLogo} />
		<div className="title-white">Generate Wallet</div>
		<div className="sub-title-white">
			Create your own address and join the largest crypto community.
		</div>
		<SecondaryBtn
			className="mt-8"
			onClick={createPassphrase}
			label="Generate"
		/>
	</div>
);

export default FirstPage;
