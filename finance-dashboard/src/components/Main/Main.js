import { useState } from "react";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Goals from "../Goals/Goals";
import OutcomeStatistics from "../OutcomeStatistics/OutcomeStatistics";
import NewTransaction from "../NewTransaction/NewTransaction";
import "./Main.css";

export default function Main() {
  const [mail, setMail] = useState([
    { name: "John Smith", message: "Hello! How are you?", id: 1 },
    { name: "Jannifer Bowl", message: "Help! Send me 100$", id: 2 },
    { name: "Mikl Dick", message: "Hi!", id: 3 },
    { name: "Steven Snow", message: "What do you do?", id: 4 },
  ]);

  return (
    <div className="main">
      <Header mail={mail} />
      <div className="main--item">
        <Cards />
        <TransactionHistory />
        <Goals />
        <OutcomeStatistics />
        <NewTransaction />
      </div>
    </div>
  );
}
