import Loader from 'src/components/Loader/Loader';
import { useTransactionHistory } from 'src/components/TransactionHistory/useTransactionHistory';
import TransactionHistoryItem from 'src/components/TransactionHistoryItem/TransactionHistoryItem';

import './TransactionHistory.css';

export default function TransactionHistory() {
  const { transactions, darkTheme } = useTransactionHistory();

  if (!transactions) return <Loader />;

  const transactionItem = transactions.map((item: any) => {
    return (
      <TransactionHistoryItem
        key={item._id}
        reciever={item.reciever}
        type={item.type}
        date={item.date}
        amount={item.amount}
      />
    );
  });

  return (
    <div className={darkTheme ? 'transaction dark' : 'transaction'}>
      <h3 className="transaction--title">Transaction history</h3>
      {transactions.length > 0 ? (
        <div className="transaction--table">
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
        <h2 className="no--transactions">No transactions...</h2>
      )}
    </div>
  );
}
