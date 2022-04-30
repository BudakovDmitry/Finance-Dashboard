import "./GoalsItem.css";
import * as Img from "../Images/Images";

export default function GoalsItem({ title, date, amount, type }) {
    return (
        <div className="goal">
            <h3 className="goal--title">${amount}</h3>
            <p className="goal--date">{date}</p>
            <img src={Img[`${type}`]} alt="Mountain" className="goal--img" />
            <h3 className="goal--name">{title}</h3>
        </div>
    );
}
