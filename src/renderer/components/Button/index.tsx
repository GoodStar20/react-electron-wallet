import './styles.css';

import React from 'react';
type IProps = {
	label: string;
	onClick?: () => void;
	className?: string;
};

export const PrimaryLineBtn = ({ label, onClick, className }: IProps) => {
	const handleButtonClick = () => {
		onClick && onClick();
	};
	return (
		<button
			className={`primary-btn-line h-13 rounded-full sm:w-full text-center outline-none ${className}`}
			onClick={handleButtonClick}
		>
			{label}
		</button>
	);
};

export const PrimaryBtn = ({ label, onClick, className }: IProps) => {
	const handleButtonClick = () => {
		onClick && onClick();
	};
	return (
		<button
			className={`primary-btn h-13 rounded-full sm:w-full outline-none ${className}`}
			onClick={handleButtonClick}
		>
			{label}
		</button>
	);
};
export const SecondaryBtn = ({ label, onClick, className }: IProps) => {
	const handleButtonClick = () => {
		onClick && onClick();
	};
	return (
		<button
			className={`secondary-btn h-13 rounded-full sm:w-full outline-none ${className}`}
			onClick={handleButtonClick}
		>
			{label}
		</button>
	);
};
