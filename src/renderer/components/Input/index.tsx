import React from 'react';
type IProps = {
	onChange?: (e: any) => void;
	className?: string;
	value?: string;
	placeholder?: string;
	readOnly?: boolean;
	id?: string;
};

export const Input = ({
	onChange,
	className,
	value,
	placeholder,
	readOnly,
	id,
}: IProps) => {
	const handleChange = (e: any) => {
		onChange && onChange(e);
	};
	return (
		<input
			type="text"
			className={`border-2 border-gray-light rounded-full address-input xl:w-full lg:w-3/5 sm:w-4/5 w-full outline-none px-8 h-14 ${className}`}
			value={value}
			placeholder={placeholder}
			onChange={handleChange}
			readOnly={readOnly}
			id={id}
		/>
	);
};
