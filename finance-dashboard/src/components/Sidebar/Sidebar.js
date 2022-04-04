import { useState } from "react";
import Logo from "../../images/Logo.png";
import "./Sidebar.css";

import SidebarItem from "../SidebarItem/SidebarItem";

export default function Sidebar() {
  const [navItems, setNavItems] = useState([
    { name: "Overview", id: 1 },
    { name: "Transactions", id: 2 },
    { name: "Cards", id: 3 },
    { name: "Invoices", id: 4 },
    { name: "Goals", id: 5 },
    { name: "Settings", id: 6 },
  ]);

  const navItem = navItems.map((item) => {
    return <SidebarItem name={item.name} key={item.id} />;
  });

  return (
    <nav className="sidebar">
      <a href="#" className="sidebar--logo">
        <img src={Logo} alt="Logo" className="sidebar--logo--image" />
        Cloudcash
      </a>
      <ul className="sidebar--nav">{navItem}</ul>
    </nav>
  );
}
