import Logo from "../../images/Logo.png";
import Overview from "../../images/icon/Overview-icon.png";
import Transactions from "../../images/icon/Transactions-icon.png";
import Cards from "../../images/icon/Cards-icon.png";
import Invoices from "../../images/icon/Invoices-icon.png";
import Goals from "../../images/icon/Goals-icon.png";
import Settings from "../../images/icon/Settings-icon.png";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <a href="#" className="sidebar--logo">
        <img src={Logo} alt="Logo" className="sidebar--logo--image" />
        Cloudcash
      </a>
      <ul className="sidebar--nav">
        <li className="sidebar--nav--item">
          <img src={Overview} alt="Overview" />
          Overview
        </li>
        <li className="sidebar--nav--item">
          <img src={Transactions} alt="Transactions" />
          Transactions
        </li>
        <li className="sidebar--nav--item">
          <img src={Cards} alt="Cards" />
          Cards
        </li>
        <li className="sidebar--nav--item">
          <img src={Invoices} alt="Invoices" />
          Invoices
        </li>
        <li className="sidebar--nav--item">
          <img src={Goals} alt="Goals" />
          Goals
        </li>
        <li className="sidebar--nav--item">
          <img src={Settings} alt="Settings" />
          Settings
        </li>
      </ul>
    </nav>
  );
}
