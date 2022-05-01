import { useSelector } from "react-redux";
import TransactionHistoryItem from "../../TransactionHistoryItem/TransactionHistoryItem";
import "./TransactionsPage.css";
import Header from "../../Header/Header";

export default function TransactionsPage() {
    const { transactions } = useSelector((state) => state);

    const transactionItem = transactions.map((item) => {
        return (
            <TransactionHistoryItem
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
                mail="2"
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
