import { LinearProgress } from "@mui/material";
import * as Img from "../Images/Images";

export default function StatisticsItem({
  type,
  percentage,
  img,
  color,
  colorLine,
}) {
  return (
    <div className="statistics--container">
      <div className={`img--container ${color}`}>
        <img src={Img[`${img}`]} alt={img} />
      </div>
      <div className="progress--container">
        <LinearProgress
          color={colorLine}
          variant="determinate"
          value={percentage}
          sx={{
            width: 350,
            height: 8,
            borderRadius: 10,
            marginTop: 3.5,
          }}
        />
        <p>{type}</p>
      </div>
      <span>{percentage}%</span>
    </div>
  );
}
