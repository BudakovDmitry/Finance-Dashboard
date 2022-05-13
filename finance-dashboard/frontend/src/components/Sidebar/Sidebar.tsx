import { Link } from 'react-router-dom';
import { useSidebar } from 'src/components/Sidebar/useSidebar';
import SidebarItem from 'src/components/SidebarItem/SidebarItem';

import './Sidebar.css';

const Logo = require('src/images/Logo.png');
const Promo = require('src/images/Promo.png');

export default function Sidebar() {
  const { darkTheme, navItems } = useSidebar();

  const navItem = navItems.map(item => (
    <SidebarItem name={item.name} key={item.id} />
  ));

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
