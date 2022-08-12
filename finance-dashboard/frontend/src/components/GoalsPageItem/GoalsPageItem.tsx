import { useGoalsPageItem } from 'src/components/GoalsPageItem/useGoalsPageItem';

const Joystick = require('src/images/icon/Joystick-icon.png');
const Mountain = require('src/images/icon/Mountain-icon.png');
const Brash = require('src/images/icon/Brash-icon.png');

interface GoalsPageItemProps {
  id: string;
  type: string;
  title: string;
  date: string;
  amount: number;
  removeGoal: (id: string) => void;
}

const GoalsPageItem = ({
  id = '',
  type = '',
  title = '',
  date = '',
  amount = 0,
  removeGoal = () => {}
}: GoalsPageItemProps) => {
  const { darkTheme } = useGoalsPageItem();

  const getImage = (type: string): string => {
    switch (type) {
      case 'Mountain':
        return Mountain;
      case 'Joystick':
        return Joystick;
      case 'Brash':
        return Brash;
      default:
        return '';
    }
  };

  return (
    <div className={darkTheme ? 'goals--item dark' : 'goals--item'}>
      <img src={getImage(type)} alt="goals-logo" />
      <div
        className={darkTheme ? 'goals--item--title dark' : 'goals--item--title'}
      >
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
      <p
        className={
          darkTheme ? 'goals--item--amount dark' : 'goals--item--amount'
        }
      >
        ${amount}
      </p>
      <div className="goals--item--button">
        <button
          onClick={() => removeGoal(id)}
          className={darkTheme ? 'button--done dark' : 'button--done'}
        >
          &#10003;
        </button>
        <button
          onClick={() => removeGoal(id)}
          className={darkTheme ? 'button--delete dark' : 'button--delete'}
        >
          &#10007;
        </button>
      </div>
    </div>
  );
};

export default GoalsPageItem;
