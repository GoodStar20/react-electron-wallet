import './styles.css';

import React from 'react';

import importLogo from '../../assets/illustrations/ImportWallet.svg';
import { PrimaryLineBtn } from '../../components/Button';

type IProps = {
	changeImportSate: () => void;
};
const FirstPage = ({ changeImportSate }: IProps) => (
	<div className="import-content flex flex-col items-center">
		<img src={importLogo} />
		<div className="title">Import Wallet</div>
		<div className="sub-title">
			Import your address and gain 24-hour access to your funds
		</div>
		<PrimaryLineBtn
			onClick={changeImportSate}
			label="Import"
			className="mt-8"
		/>
	</div>
);

export default FirstPage;
