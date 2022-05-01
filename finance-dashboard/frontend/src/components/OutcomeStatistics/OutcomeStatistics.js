import { useState } from "react";
import "./OutcomeStatistics.css";
import StatisticsItem from "../StatisticsItem/StatisticsItem";

export default function OutcomeStatistics() {
  const [statisticsItem, setStatisticsItem] = useState([
    {
      type: "Shopping",
      percentage: 52,
      img: "Cart",
      color: "orange",
      colorLine: "warning",
    },
    {
      type: "Electronics",
      percentage: 21,
      img: "Car",
      color: "green",
      colorLine: "success",
    },
    {
      type: "Travels",
      percentage: 74,
      img: "Plane",
      color: "blue",
      colorLine: "info",
    },
  ]);

  const statItem = statisticsItem.map((item) => {
    return (
      <StatisticsItem
        type={item.type}
        percentage={item.percentage}
        img={item.img}
        color={item.color}
        colorLine={item.colorLine}
      />
    );
  });

  return (
    <div className="statistics">
      <h3 className="statistics--title">Outcome Statistics</h3>
      {statItem}
    </div>
  );
}
