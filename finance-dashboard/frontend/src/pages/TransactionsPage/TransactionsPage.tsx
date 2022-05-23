import DoughnutChart from 'src/components/DoughnutChart/DoughnutChart';
import Header from 'src/components/Header/Header';
import Loader from 'src/components/Loader/Loader';
import TransactionHistoryItem from 'src/components/TransactionHistoryItem/TransactionHistoryItem';
import { useTransactionsPage } from 'src/pages/TransactionsPage/useTransactionsPage';

import './TransactionsPage.css';

export default function TransactionsPage() {
  const { transactions } = useTransactionsPage();

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
        <div className="page--transaction--chart">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}
