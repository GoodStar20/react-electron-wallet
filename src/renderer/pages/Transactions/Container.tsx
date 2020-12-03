import './styles.css';

import React from 'react';

import { eArabic, getDate } from '../../utils';

type IProps = {
	transactionData: [];
};
const Container = ({ transactionData }: IProps) => {
	const { URL } = process.env;
	return (
		<div className="transaction-body">
			<div className="content">
				<div className="table-header">
					<div className="table-tr txid">Txid</div>
					<div className="table-tr sender">Sender</div>
					<div className="table-tr recipient">Recipient</div>
					<div className="table-tr timestamp">Timestamp</div>
					<div className="table-tr amount">Amount</div>
					<div className="table-tr fee">Fee</div>
				</div>
				{transactionData?.length > 0 &&
					transactionData.map((transaction: any, index) => (
						<div className="table-body" key={index}>
							<div className="table-tr txid">
								<a
									href={`${URL}/transactions/${transaction.id}`}
									target="_blank"
									rel="noreferrer"
								>
									<span className="txid-icon" />
									<span className="txid-title">{transaction.id}</span>
								</a>
							</div>
							<div className="table-tr sender">
								<a
									href={`${URL}/wallets/${transaction.sender}`}
									target="_blank"
									rel="noreferrer"
								>
									{transaction.sender}
								</a>
							</div>
							<div className="table-tr recipient">
								<a
									href={`${URL}/wallets/${transaction.recipient}`}
									target="_blank"
									rel="noreferrer"
								>
									{transaction.recipient}
								</a>
							</div>
							<div className="table-tr timestamp">
								{getDate(transaction.timestamp.human)}
							</div>
							<div className="table-tr amount">
								{eArabic(transaction.amount)} DARK
							</div>
							<div className="table-tr fee">
								{eArabic(transaction.fee)} DARK
							</div>
						</div>
					))}
				<div className="mobile-table-body">
					{transactionData?.length > 0 &&
						transactionData.map((transaction: any, index) => (
							<div className="table-body" key={index}>
								<div className="table-row">
									<div className="title">Txid</div>
									<div className="green-value">
										<a
											href={`${URL}/transactions/${transaction.id}`}
											target="_blank"
											rel="noreferrer"
										>
											<span className="txid-icon" />
											<span className="txid-title">{transaction.id}</span>
										</a>
									</div>
								</div>
								<div className="table-row">
									<div className="title">Sender</div>
									<div className="sender dark-value">
										<a
											href={`${URL}/wallets/${transaction.sender}`}
											target="_blank"
											rel="noreferrer"
										>
											{transaction.sender}
										</a>
									</div>
								</div>
								<div className="table-row ">
									<div className="title">Recipient</div>
									<div className="recipient dark-value">
										<a
											href={`${URL}/wallets/${transaction.recipient}`}
											target="_blank"
											rel="noreferrer"
										>
											{transaction.recipient}
										</a>
									</div>
								</div>
								<div className="table-row">
									<div className="title">Timestamp</div>
									<div className="dark-value">
										{getDate(transaction.timestamp.human)}
									</div>
								</div>
								<div className="table-row">
									<div className="title">Amount</div>
									<div className="dark-value">
										{eArabic(transaction.amount)} DARK
									</div>
								</div>
								<div className="table-row">
									<div className="title">Fee</div>
									<div className="dark-value">
										{eArabic(transaction.fee)} DARK
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Container;
