import { NavLink } from 'react-router-dom';
import { useSidebarItem } from 'src/components/SidebarItem/useSidebarItem';

const Overview = require('src/images/icon/Overview-icon.png');
const Transactions = require('src/images/icon/Transactions-icon.png');
const Cards = require('src/images/icon/Cards-icon.png');
const Invoices = require('src/images/icon/Invoices-icon.png');
const Goals = require('src/images/icon/Goals-icon.png');
const Settings = require('src/images/icon/Settings-icon.png');
const News = require('src/images/icon/News-icon.png');

interface SidebarItemProps {
  name: string;
}

export default function SidebarItem<SidebarItemProps>({ name = '' }) {
  const { darkTheme } = useSidebarItem();

  const getImage = (name: string): string => {
    switch (name) {
      case 'Overview':
        return Overview;
      case 'Transactions':
        return Transactions;
      case 'Cards':
        return Cards;
      case 'Invoices':
        return Invoices;
      case 'Goals':
        return Goals;
      case 'News':
        return News;
      case 'Settings':
        return Settings;
      default:
        return '';
    }
  };

  return (
    <li>
      <NavLink
        to={`/${name}`}
        className="sidebar--nav--item"
        activeClassName={
          darkTheme
            ? 'sidebar--nav--item--active dark'
            : 'sidebar--nav--item--active'
        }
      >
        <img src={getImage(name)} alt={name} />
        {name}
      </NavLink>
    </li>
  );
}
