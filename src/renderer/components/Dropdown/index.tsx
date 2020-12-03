import './styles.css';

import React, { useState } from 'react';

import upArrow from '../../assets/icons/arrow.svg';
import downArrow from '../../assets/icons/arrow2.svg';

export const Dropdown = () => {
	const [open, setOpen] = useState<boolean>(false);
	const options = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6'];
	const [selectedOption, setSelectedOption] = useState<string>('');
	const handleClick = () => {
		setOpen(!open);
	};
	const handleOptionChange = (option: string) => {
		setSelectedOption(option);
		setOpen(!open);
	};

	return (
		<div className="select" onClick={handleClick}>
			<span>{selectedOption}</span>
			{open ? (
				<img src={upArrow} className="arrow" />
			) : (
				<img src={downArrow} className="arrow" />
			)}
			<div className={`options ${open ? 'show' : 'hidden'}`}>
				{options &&
					options.length > 0 &&
					options.map((option, index) => (
						<span
							className={`option ${
								selectedOption === option ? 'selected' : ''
							}`}
							key={index}
							onClick={() => handleOptionChange(option)}
						>
							{option}
						</span>
					))}
			</div>
		</div>
	);
};
