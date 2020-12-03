import './styles.css';

import { History } from 'history';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from './Footer';
import GenerateWallet from './GenerateWallet';
import Header from './Header';
import ImportWallet from './ImportWallet';

const Home: React.FC = () => {
	const history: History<any> = useHistory();

	return (
		<div className="main">
			<Header />
			<div className="grid xl:grid-cols-1 grid-cols-2">
				<div className="import-wallet">
					<ImportWallet />
				</div>
				<div className="generate-wallet">
					<GenerateWallet />
				</div>
			</div>
			<div
				className="absolute drop-down"
				onClick={() => history.push('/components')}
			>
				Components
			</div>
			<Footer />
		</div>
	);
};

export default Home;
