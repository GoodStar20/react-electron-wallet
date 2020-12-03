import { Connection } from '@arkecosystem/client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Components from '../components';
import store from '../store';
import Home from './Home';
import Transaction from './Transaction';

require('dotenv').config();

const init = async () => {
	const connection: Connection = new Connection(`${process.env.API_URL}`);
	await connection.api('blocks').all();
};

export const App = () => {
	useEffect(() => {
		init();
	}, []);
	return (
		<Provider store={store}>
			<HashRouter>
				<Switch>
					<Route path="/transaction" exact component={Transaction} />
					<Route path="/components" exact component={Components} />
					<Route path="/" exact component={Home} />
				</Switch>
			</HashRouter>
		</Provider>
	);
};
