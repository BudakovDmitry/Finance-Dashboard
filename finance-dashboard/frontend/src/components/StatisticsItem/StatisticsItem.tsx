import { FC } from 'react';
import { LinearProgress } from '@mui/material';
import { useStatisticsItem } from 'src/components/StatisticsItem/useStatisticsItem';

const Car = require('src/images/icon/Car-icon.png');
const Plane = require('src/images/icon/Plane-icon.png');
const Cart = require('src/images/icon/Cart-icon.png');

type colorType =
  | 'inherit'
  | 'error'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning';

interface StatisticsItemProps {
  type: string;
  percentage: number;
  img: string;
  color: string;
  colorLine: colorType;
}

const StatisticsItem: FC<StatisticsItemProps> = ({
  type = '',
  percentage = 0,
  img = '',
  color = '',
  colorLine = 'primary'
}) => {
  const { darkTheme } = useStatisticsItem();

  const getImage = (img: string): string => {
    switch (img) {
      case 'Car':
        return Car;
      case 'Plane':
        return Plane;
      case 'Cart':
        return Cart;
      default:
        return '';
    }
  };

  return (
    <div
      className={
        darkTheme ? 'statistics--container dark' : 'statistics--container'
      }
    >
      <div className={`img--container ${color}`}>
        <img src={getImage(img)} alt={img} />
      </div>
      <div
        className={
          darkTheme ? 'progress--container dark' : 'progress--container'
        }
      >
        <LinearProgress
          color={colorLine}
          variant="determinate"
          value={percentage}
          sx={{
            width: 380,
            height: 8,
            borderRadius: 10,
            marginTop: 3.5
          }}
        />
        <p>{type}</p>
      </div>
      <span>{percentage}%</span>
    </div>
  );
};

export default StatisticsItem;
