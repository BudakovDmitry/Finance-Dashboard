import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Goals from "../Goals/Goals";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <div className="main--item">
        <Cards />
        <TransactionHistory />
        <Goals />
      </div>
    </div>
  );
}
