import { LinearProgress, Switch } from '@mui/material';
import Card from 'src/components/Card/Card';
import { useAppSelector } from 'src/hooks/hooks';

import './Cards.css';

const Left = require('../../images/icon/Left-icon.png');
const Right = require('../../images/icon/Right-icon.png');

export default function Cards() {
  const { darkTheme } = useAppSelector(state => state);

  return (
    <div className={darkTheme ? 'cards dark' : 'cards'}>
      <div className="card">
        <h3 className="card--title">Cards</h3>
        <button className="card--button--left">&#8249;</button>
        <Card />
        <button className="card--button--right">&#8250;</button>
        <LinearProgress
          variant="determinate"
          value={20}
          sx={{
            width: 220,
            height: 8,
            marginBottom: 1,
            marginLeft: 1.5,
            borderRadius: 10
          }}
        />
        <div className={darkTheme ? 'card--limit dark' : 'card--limit'}>
          <p>Weekly payment limit</p>
          <p className="card--limit--balance">
            <span>$350.60 / $4000</span>
          </p>
        </div>
      </div>
      <div className="card--info">
        <div
          className={darkTheme ? 'card--info--item dark' : 'card--info--item'}
        >
          <p>$ 2850.75</p>
          <p>Current balance</p>
        </div>
        <div
          className={darkTheme ? 'card--info--item dark' : 'card--info--item'}
        >
          <p>$ 1500.50</p>
          <p>Income</p>
        </div>
        <div
          className={darkTheme ? 'card--info--item dark' : 'card--info--item'}
        >
          <p>$ 350.60</p>
          <p>Outcome</p>
        </div>
        <div className="card--info--item">
          <Switch />
          <p className="card--info--deactivate">Deacivate card</p>
        </div>
      </div>
    </div>
  );
}
