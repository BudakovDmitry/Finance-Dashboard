import * as Img from "../Images/Images";

export default function GoalsPageItem({ type, title, date, amount }) {
  return (
    <div className="goals--item">
      <img src={Img[`${type}`]} alt="goals-logo" />
      <div className="goals--item--title">
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
      <p className="goals--item--amount">${amount}</p>
    </div>
  );
}
