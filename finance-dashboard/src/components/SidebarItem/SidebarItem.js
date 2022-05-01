import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Img from "../Images/Images";

export default function SidebarItem({ name }) {
    const { darkTheme } = useSelector((state) => state);
    return (
        <li>
            <NavLink
                to={`/${name}`}
                className="sidebar--nav--item"
                activeClassName={
                    darkTheme
                        ? "sidebar--nav--item--active dark"
                        : "sidebar--nav--item--active"
                }
            >
                <img src={Img[`${name}`]} alt={name} />
                {name}
            </NavLink>
        </li>
    );
}
