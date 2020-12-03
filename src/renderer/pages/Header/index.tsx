import './styles.css';

import React from 'react';

import logo from '../../assets/icons/logo.svg';

const Header = () => (
	<div className="header">
		<div className="logo">
			<img src={logo} />
		</div>
		<div className="title">ARK Wallet</div>
	</div>
);
export default Header;
