import { useSelector } from "react-redux";

import "./TransactionHistory.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory() {
    const { transactions, darkTheme } = useSelector((state) => state);

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
        <div className={darkTheme ? "transaction dark" : "transaction"}>
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
