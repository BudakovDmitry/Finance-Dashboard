import './Card.css';
import CardImg from '../../images/Card.png';

export default function Card() {
  return (
    <div className="card--item">
      <img src={CardImg} alt="CardImg" />
      <h3 className="card--item--title">cloudcash</h3>
      <p className="card--item--account">PREMIUM ACCOUNT</p>
      <p className="card--item--holder">Card holder</p>
      <p className="card--item--date">Expire date</p>
      <p className="card--item--name">Mike Smith</p>
      <p className="card--item--expire--date">06/21</p>
      <p className="card--item--number">5789 **** **** 2847</p>
    </div>
  );
}
