import { Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { themeUpdate } from '../../../actions/actions';

import './SettingsPage.css';
import Header from '../../Header/Header';

export default function SettingsPage() {
  const { darkTheme } = useSelector(state => state);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(themeUpdate());
  };

  return (
    <div className="page--settings">
      <Header
        title="Settings"
        description="Enter your settings here."
        mail="2"
      />
      <div className="page--settings--theme">
        <p>Dark Theme</p>
        <Switch checked={darkTheme} onChange={changeTheme} />
      </div>
    </div>
  );
}
