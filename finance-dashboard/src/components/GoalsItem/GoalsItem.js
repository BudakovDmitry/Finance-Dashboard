import { useSelector } from "react-redux";
import "./GoalsItem.css";
import * as Img from "../Images/Images";

export default function GoalsItem({ title, date, amount, type }) {
    const { darkTheme } = useSelector((state) => state);

    return (
        <div className={darkTheme ? "goal dark" : "goal"}>
            <h3 className={darkTheme ? "goal--amount dark" : "goal--amount"}>
                ${amount}
            </h3>
            <p className="goal--date">{date}</p>
            <img src={Img[`${type}`]} alt="Mountain" className="goal--img" />
            <h3 className="goal--name">{title}</h3>
        </div>
    );
}
