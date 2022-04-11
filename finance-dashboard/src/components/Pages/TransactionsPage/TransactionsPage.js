import TransactionHistory from "../../TransactionHistory/TransactionHistory";
import "./TransactionsPage.css";

export default function TransactionsPage() {
  return (
    <div className="page--transaction">
      <h2 className="page--transaction--title">Transactions</h2>
      <div className="page--transaction--container">
        <TransactionHistory />
      </div>
    </div>
  );
}
