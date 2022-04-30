import { useDispatch, useSelector } from "react-redux";

import "./Goals.css";
import GoalsItem from "../GoalsItem/GoalsItem";

export default function Goals() {
    const { goals } = useSelector((state) => state);
    const dispatch = useDispatch();

    const goalsItem = goals.map((item) => {
        return (
            <GoalsItem
                title={item.title}
                amount={item.amount}
                date={item.date}
                type={item.type}
            />
        );
    });

    return (
        <div className="goals">
            <div className="goals--title--container">
                <h3 className="goals--title">Goals</h3>
                <button className="goals--title--button">+</button>
            </div>
            <div className="goals--items">{goalsItem}</div>
            <button className="goals--button--right">&#8250;</button>
        </div>
    );
}
