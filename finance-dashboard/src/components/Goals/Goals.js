import { useState } from "react";
import "./Goals.css";
import GoalsItem from "../GoalsItem/GoalsItem";

export default function Goals() {
  const [goal, setGoal] = useState([
    { name: "Holidays", date: "12/20/20", amount: 500, img: "Mountain" },
    { name: "Renovation", date: "12/20/20", amount: 200, img: "Brash" },
    {
      name: "PlayStation 5",
      date: "12/20/20",
      amount: 820,
      img: "Joystick",
    },
  ]);

  const goalsItem = goal.map((item) => {
    return (
      <GoalsItem
        name={item.name}
        amount={item.amount}
        date={item.date}
        img={item.img}
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
