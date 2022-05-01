import { useSelector } from "react-redux";
import TransactionHistoryItem from "../../TransactionHistoryItem/TransactionHistoryItem";
import "./TransactionsPage.css";

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
            <h2 className="page--transaction--title">Transactions</h2>
            <div className="page--transaction--container">
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
            </div>
        </div>
    );
}
