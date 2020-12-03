import { History } from 'history';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { PrimaryBtn, PrimaryLineBtn, SecondaryBtn } from './Button';
import { Dropdown } from './Dropdown';

const Components = () => {
	const history: History<any> = useHistory();
	return (
		<div>
			<div className="cursor-pointer mb-5" onClick={() => history.push('/')}>
				back
			</div>

			<div className="mb-5">
				<PrimaryLineBtn label="Button" />
			</div>
			<div className="mb-5">
				<PrimaryBtn label="Button" />
			</div>
			<div className="mb-5">
				<SecondaryBtn label="Button" />
			</div>
			<Dropdown />
		</div>
	);
};
export default Components;
