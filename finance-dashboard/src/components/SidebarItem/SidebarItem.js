import * as Img from "../Images/Images";

export default function SidebarItem({ name }) {
  return (
    <li className="sidebar--nav--item">
      <img src={Img[`${name}`]} alt={name} />
      {name}
    </li>
  );
}
