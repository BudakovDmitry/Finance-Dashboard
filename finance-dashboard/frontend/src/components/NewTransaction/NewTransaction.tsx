import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useNewTransaction } from 'src/components/NewTransaction/useNewTransaction';

import './NewTransaction.css';

const photo1 = require('../../images/photo1.jpeg');
const photo2 = require('../../images/photo2.jpeg');
const photo3 = require('../../images/photo3.jpeg');

export default function NewTransaction() {
  const { darkTheme } = useNewTransaction();

  return (
    <div className={darkTheme ? 'new--transaction dark' : 'new--transaction'}>
      <h3 className="new--transaction--title">New transaction</h3>
      <div className="new--transaction--container">
        <div className="container--account">
          <AvatarGroup
            sx={{
              width: 100,
              marginTop: 1,
              marginRight: 1,
              marginLeft: 2
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={photo1}
              sx={{ width: 40, height: 40 }}
            />
            <Avatar
              alt="Travis Howard"
              src={photo2}
              sx={{ width: 40, height: 40 }}
            />
            <Avatar
              alt="Agnes Walker"
              src={photo3}
              sx={{ width: 40, height: 40 }}
            />
          </AvatarGroup>
          <button className="transaction--title--button">+</button>
        </div>
        <input
          type="text"
          className={
            darkTheme ? 'transaction--input dark' : 'transaction--input'
          }
          placeholder="0                                      $"
        />
        <button className="transaction--send--button">
          Send the transfer <span>&#8250;</span>
        </button>
      </div>
    </div>
  );
}
