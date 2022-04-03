import Card from "../../images/Card.png";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <h3 className="card--title">Cards</h3>
        <img src={Card} alt="Card" />
        <div className="card--limit">
          <p>Weekly payment limit</p>
          <p className="card--limit--balance">
            <span>$350.60 / $4000</span>
          </p>
        </div>
      </div>
      <div className="card--info">
        <div className="card--info--item">
          <p>$ 2850.75</p>
          <p>Current balance</p>
        </div>
        <div className="card--info--item">
          <p>$ 1500.50</p>
          <p>Income</p>
        </div>
        <div className="card--info--item">
          <p>$ 350.60</p>
          <p>Outcome</p>
        </div>
        <p className="card--info--deactivate">Deacivate card</p>
      </div>
    </div>
  );
}
