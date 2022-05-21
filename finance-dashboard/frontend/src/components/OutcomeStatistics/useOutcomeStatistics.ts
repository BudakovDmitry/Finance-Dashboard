import { useState } from 'react';

type colorType =
  | 'inherit'
  | 'error'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning';

interface StatisticsItemType {
  id: number;
  type: string;
  percentage: number;
  img: string;
  color: string;
  colorLine: colorType;
}

export const useOutcomeStatistics = () => {
  const [statisticsItem, setStatisticsItem] = useState<StatisticsItemType[]>([
    {
      id: 1,
      type: 'Shopping',
      percentage: 52,
      img: 'Cart',
      color: 'orange',
      colorLine: 'warning'
    },
    {
      id: 2,
      type: 'Electronics',
      percentage: 21,
      img: 'Car',
      color: 'green',
      colorLine: 'success'
    },
    {
      id: 3,
      type: 'Travels',
      percentage: 74,
      img: 'Plane',
      color: 'blue',
      colorLine: 'info'
    }
  ]);

  return {
    statisticsItem
  };
};
