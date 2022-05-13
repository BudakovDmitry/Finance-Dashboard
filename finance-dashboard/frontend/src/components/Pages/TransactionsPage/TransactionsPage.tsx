import Header from 'src/components/Header/Header';
import { useTransactionsPage } from 'src/components/Pages/TransactionsPage/useTransactionsPage';
import TransactionHistoryItem from 'src/components/TransactionHistoryItem/TransactionHistoryItem';

import './TransactionsPage.css';

export default function TransactionsPage() {
  const { transactions } = useTransactionsPage();

  const transactionItem = transactions.map(item => {
    return (
      <TransactionHistoryItem
        key={item.id}
        reciever={item.reciever}
        type={item.type}
        date={item.date}
        amount={item.amount}
      />
    );
  });

  return (
    <div className="page--transaction">
      <Header
        title="Transactions"
        description="Get a summary of your transactions."
      />
      <div className="page--transaction--container">
        {transactions.length > 0 ? (
          <div className="transaction--page--table">
            <table>
              <tbody>
                <tr>
                  <th>Reciever</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
                {transactionItem}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="transaction--page--no--transactions">
            No transactions...
          </h2>
        )}
      </div>
    </div>
  );
}
