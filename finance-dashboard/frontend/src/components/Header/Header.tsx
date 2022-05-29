import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import CurrencyBoard from 'src/components/CurrencyBoard/CurrencyBoard';
import { useHeader } from 'src/components/Header/useHeader';

import './Header.css';

const User = require('../../images/icon/User-icon.png');

interface HeaderProps {
  title: string;
  description: string;
}

export default function Header<HeaderProps>({ title = '', description = '' }) {
  const { darkTheme, mail } = useHeader();

  return (
    <header className="header">
      <div className="header--title--container">
        <h1 className={darkTheme ? 'header--title dark' : 'header--title'}>
          {title}
        </h1>
        <p className="header--description">{description}</p>
      </div>
      <div className="header--currency">
        <CurrencyBoard />
      </div>
      <div className="header--account--container">
        <Badge badgeContent={mail.length} color="error">
          <MailIcon />
        </Badge>
        <Badge color="error" variant="dot" overlap="circular">
          <NotificationsIcon />
        </Badge>
        <img src={User} alt="User" />
        <div className="header--account">
          <p
            className={
              darkTheme ? 'header--account--text dark' : 'header--account--text'
            }
          >
            <span>Andrew</span>
          </p>
          <p className="header--account--text">Admin account</p>
        </div>
      </div>
    </header>
  );
}
