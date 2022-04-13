import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import Sidebar from "../Sidebar/Sidebar";
import OverviewPage from "../Pages/OverviewPage/OverviewPage";
import TransactionsPage from "../Pages/TransactionsPage/TransactionsPage";
import CardsPage from "../Pages/CardsPage/CardsPage";
import GoalsPage from "../Pages/GoalsPage/GoalsPage";
import InvoicesPage from "../Pages/InvoicesPage/InvoicesPage";
import SettingsPage from "../Pages/SettingsPage/SettingsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

function App() {
  const [login, setLogin] = useState(true);

  let navigation = login ? <Sidebar /> : null;

  return (
    <Router>
      <div className="app">
        {navigation}
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
          <Route exact path="/Login">
            <LoginPage />
          </Route>
          <Route exact path="/SignUp">
            <SignUpPage />
          </Route>
          <Route exact path="/">
            {login ? <Redirect to="/Overview" /> : <Redirect to="/Login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
