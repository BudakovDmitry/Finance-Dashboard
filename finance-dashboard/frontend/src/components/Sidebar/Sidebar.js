import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Logo from '../../images/Logo.png';
import Promo from '../../images/Promo.png';
import './Sidebar.css';

import SidebarItem from '../SidebarItem/SidebarItem';

export default function Sidebar() {
  const { darkTheme } = useSelector(state => state);
  const [navItems, setNavItems] = useState([
    { name: 'Overview', id: 1 },
    { name: 'Transactions', id: 2 },
    { name: 'Cards', id: 3 },
    { name: 'Invoices', id: 4 },
    { name: 'Goals', id: 5 },
    { name: 'Settings', id: 6 }
  ]);

  const navItem = navItems.map(item => {
    return <SidebarItem name={item.name} key={item.id} />;
  });

  return (
    <nav className={darkTheme ? 'sidebar dark' : 'sidebar'}>
      <Link
        to="/"
        className={darkTheme ? 'sidebar--logo dark' : 'sidebar--logo'}
      >
        <img src={Logo} alt="Logo" className="sidebar--logo--image" />
        Cloudcash
      </Link>
      <ul className="sidebar--nav">{navItem}</ul>
      <div className="sidebar--promo">
        {darkTheme ? null : (
          <>
            <img src={Promo} alt="Promo" />
            <p>Give your money awesome space in cloud</p>
          </>
        )}
      </div>
    </nav>
  );
}
