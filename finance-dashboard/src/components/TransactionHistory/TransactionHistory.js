import { useState } from "react";

import "./TransactionHistory.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory() {
  const [transactionItems, setTransactionItems] = useState([
    {
      reciever: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2020",
      amount: 75.67,
    },
    {
      reciever: "ElectroMen Market",
      type: "Shopping",
      date: "14 Dec 2020",
      amount: 250,
    },
    {
      reciever: "Fiorgio Restaurant",
      type: "Food",
      date: "07 Dec 2020",
      amount: 19.5,
    },
    {
      reciever: "John Mathew Kayne",
      type: "Sport",
      date: "06 Dec 2020",
      amount: 350,
    },
    {
      reciever: "Ann Marlin",
      type: "Shopping",
      date: "31 Nov 2020",
      amount: 430,
    },
  ]);

  const transactionItem = transactionItems.map((item) => {
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
