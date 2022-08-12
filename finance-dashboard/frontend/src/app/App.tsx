import { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Sidebar from 'src/components/Sidebar/Sidebar';
import { SwrProvider } from 'src/context/SwrContext';
import { useAppSelector } from 'src/hooks/hooks';
import CardsPage from 'src/pages/CardsPage/CardsPage';
import GoalsPage from 'src/pages/GoalsPage/GoalsPage';
import InvoicesPage from 'src/pages/InvoicesPage/InvoicesPage';
import LoginPage from 'src/pages/LoginPage/LoginPage';
import NewsPage from 'src/pages/NewsPage/NewsPage';
import OverviewPage from 'src/pages/OverviewPage/OverviewPage';
import SettingsPage from 'src/pages/SettingsPage/SettingsPage';
import SignUpPage from 'src/pages/SignUpPage/SignUpPage';
import TransactionsPage from 'src/pages/TransactionsPage/TransactionsPage';

import './App.css';

function App() {
  const [login, setLogin] = useState<boolean>(true);
  const { darkTheme } = useAppSelector(state => state);

  const navigation = login ? <Sidebar /> : null;

  return (
    <SwrProvider>
      <ToastProvider>
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
              <Route exact path="/News">
                <NewsPage />
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
      </ToastProvider>
    </SwrProvider>
  );
}

export default App;
