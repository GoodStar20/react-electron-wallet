export const eArabic = (value: string) => {
	const result = (Number(value) / Math.pow(10, 8)).toLocaleString();
	return result;
};
export const getDate = (timestamp: string) => {
	const currentDate = new Date(timestamp);
	const date = currentDate.getDate();
	const month = currentDate.getMonth() + 1;
	const year = currentDate.getFullYear();
	const str = `${date}` + '.' + `${month}` + '.' + `${year}`;
	return str;
};
