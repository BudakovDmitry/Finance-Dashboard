import { useGoalsItem } from 'src/components/GoalsItem/useGoalsItem';

import './GoalsItem.css';

const Joystick = require('src/images/icon/Joystick-icon.png');
const Mountain = require('src/images/icon/Mountain-icon.png');
const Brash = require('src/images/icon/Brash-icon.png');

interface GoalsItemProps {
  title: string;
  date: string;
  amount: number;
  type: string;
}

export default function GoalsItem<GoalsItemProps>({
  title = '',
  date = '',
  amount = 0,
  type = ''
}) {
  const { darkTheme } = useGoalsItem();

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
    <div className={darkTheme ? 'goal dark' : 'goal'}>
      <h3 className={darkTheme ? 'goal--amount dark' : 'goal--amount'}>
        ${amount}
      </h3>
      <p className="goal--date">{date}</p>
      <img src={getImage(type)} alt={type} className="goal--img" />
      <h3 className="goal--name">{title}</h3>
    </div>
  );
}
