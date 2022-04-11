import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Sidebar from "../Sidebar/Sidebar";
import OverviewPage from "../Pages/OverviewPage/OverviewPage";
import TransactionsPage from "../Pages/TransactionsPage/TransactionsPage";
import CardsPage from "../Pages/CardsPage/CardsPage";
import GoalsPage from "../Pages/GoalsPage/GoalsPage";
import InvoicesPage from "../Pages/InvoicesPage/InvoicesPage";
import SettingsPage from "../Pages/SettingsPage/SettingsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route exact path="/Overview">
            <OverviewPage />
          </Route>
          <Route exact path="/Transactions">
            <TransactionsPage />
          </Route>
          <Route exact path="/Cards">
            <CardsPage />
          </Route>
          <Route exact path="/Goals">
            <GoalsPage />
          </Route>
          <Route exact path="/Invoices">
            <InvoicesPage />
          </Route>
          <Route exact path="/Settings">
            <SettingsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
