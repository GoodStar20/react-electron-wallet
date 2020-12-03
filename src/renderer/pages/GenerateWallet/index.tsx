import './styles.css';

import React, { useState } from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
const bip39 = require('bip39');

const GenerateWallet = () => {
	const [isGenerate, setGenerateState] = useState<boolean>(true);
	const [phraseArray, setPhraseArray] = useState([]);
	const [phrase, setPhrase] = useState<string>('');

	const changeGenerateState = () => {
		setGenerateState(!isGenerate);
	};
	const createPassphrase = () => {
		const mnemonic = bip39.generateMnemonic();
		setPhrase(mnemonic);
		setPhraseArray(mnemonic.split(' '));
		changeGenerateState();
	};

	if (isGenerate) {
		return <FirstPage createPassphrase={createPassphrase} />;
	} else {
		return (
			<SecondPage
				changeGenerateState={changeGenerateState}
				phraseArray={phraseArray}
				phrase={phrase}
			/>
		);
	}
};

export default GenerateWallet;
