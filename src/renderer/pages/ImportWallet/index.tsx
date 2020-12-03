import './styles.css';

import React, { useState } from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const ImportWallet = () => {
	const [isImport, setImportState] = useState<boolean>(false);

	const changeImportSate = () => {
		setImportState(!isImport);
	};

	if (isImport) {
		return <FirstPage changeImportSate={changeImportSate} />;
	} else {
		return <SecondPage changeImportSate={changeImportSate} />;
	}
};

export default ImportWallet;
