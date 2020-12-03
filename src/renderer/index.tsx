import './styles.css';

import React from 'react';
import { render } from 'react-dom';

import { App } from './pages/App';

if (module.hot) {
	module.hot.accept();
}

render(<App />, document.querySelector('#app'));
