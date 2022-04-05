import "./GoalsItem.css";
import * as Img from "../Images/Images";

export default function GoalsItem({ name, date, amount, img }) {
  return (
    <div className="goal">
      <h3 className="goal--title">${amount}</h3>
      <p className="goal--date">{date}</p>
      <img src={Img[`${img}`]} alt="Mountain" className="goal--img" />
      <h3 className="goal--name">{name}</h3>
    </div>
  );
}
