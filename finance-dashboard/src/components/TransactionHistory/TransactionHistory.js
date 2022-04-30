import { useSelector } from "react-redux";

import "./TransactionHistory.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory() {
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
        <div className="transaction">
            <h3 className="transaction--title">Transaction history</h3>
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
        </div>
    );
}
