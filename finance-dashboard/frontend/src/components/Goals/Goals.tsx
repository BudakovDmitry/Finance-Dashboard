import { Link } from 'react-router-dom';
import GoalsItem from 'src/components/GoalsItem/GoalsItem';
import Loader from 'src/components/Loader/Loader';
import { useAppSelector } from 'src/hooks/hooks';
import { useGoals } from 'src/hooks/useGoals';

import './Goals.css';

export default function Goals() {
  const { goals } = useGoals();

  // const goalsItem = goals.map(item => {
  //   return (
  //     <GoalsItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //       type={item.type}
  //     />
  //   );
  // });
  if (!goals) return <Loader />;

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
          <div className="goals--items">
            {goals.map((item: any) => {
              return (
                <GoalsItem
                  key={item._id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                  type={item.type}
                />
              );
            })}
          </div>
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
