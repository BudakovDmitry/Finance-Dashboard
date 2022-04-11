import { NavLink } from "react-router-dom";
import * as Img from "../Images/Images";

export default function SidebarItem({ name }) {
  return (
    <li>
      <NavLink
        to={`/${name}`}
        className="sidebar--nav--item"
        activeClassName="sidebar--nav--item--active"
      >
        <img src={Img[`${name}`]} alt={name} />
        {name}
      </NavLink>
    </li>
  );
}
