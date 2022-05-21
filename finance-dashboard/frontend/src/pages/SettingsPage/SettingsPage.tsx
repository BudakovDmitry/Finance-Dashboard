import { Switch } from '@mui/material';
import Header from 'src/components/Header/Header';
import { useSettingsPage } from 'src/pages/SettingsPage/useSettingsPage';

import './SettingsPage.css';

export default function SettingsPage() {
  const { darkTheme, changeTheme } = useSettingsPage();

  return (
    <div className="page--settings">
      <Header title="Settings" description="Enter your settings here." />
      <div className="page--settings--theme">
        <p>Dark Theme</p>
        <Switch checked={darkTheme} onChange={changeTheme} />
      </div>
    </div>
  );
}
