import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import './Goals.css';
import GoalsItem from '../GoalsItem/GoalsItem';

export default function Goals() {
  const { goals } = useSelector(state => state);

  const goalsItem = goals.map(item => {
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
      {goals.length > 0 ? (
        <>
          <div className="goals--title--container">
            <h3 className="goals--title">Goals</h3>
            <Link to="/Goals" className="goals--title--link">
              +
            </Link>
          </div>
          <div className="goals--items">{goalsItem}</div>
          {goals.length > 3 ? (
            <button className="goals--button--right">&#8250;</button>
          ) : null}
        </>
      ) : (
        <div className="no--goals">
          <h2>No goals, please add first goal.</h2>
          <Link to="/Goals" className="no--goals--link">
            +
          </Link>
        </div>
      )}
    </div>
  );
}
