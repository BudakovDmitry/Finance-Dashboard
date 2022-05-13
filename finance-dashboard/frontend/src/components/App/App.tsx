import { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import CardsPage from 'src/components/Pages/CardsPage/CardsPage';
import GoalsPage from 'src/components/Pages/GoalsPage/GoalsPage';
import InvoicesPage from 'src/components/Pages/InvoicesPage/InvoicesPage';
import LoginPage from 'src/components/Pages/LoginPage/LoginPage';
import OverviewPage from 'src/components/Pages/OverviewPage/OverviewPage';
import SettingsPage from 'src/components/Pages/SettingsPage/SettingsPage';
import SignUpPage from 'src/components/Pages/SignUpPage/SignUpPage';
import TransactionsPage from 'src/components/Pages/TransactionsPage/TransactionsPage';
import Sidebar from 'src/components/Sidebar/Sidebar';
import { useAppSelector } from 'src/hooks/hooks';

import './App.css';

function App() {
  const [login, setLogin] = useState<boolean>(true);
  const { darkTheme } = useAppSelector(state => state);

  const navigation = login ? <Sidebar /> : null;

  return (
    <Router>
      <div className={darkTheme ? 'app dark' : 'app'}>
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
