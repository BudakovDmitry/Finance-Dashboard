import { useOutcomeStatistics } from 'src/components/OutcomeStatistics/useOutcomeStatistics';
import StatisticsItem from 'src/components/StatisticsItem/StatisticsItem';

import './OutcomeStatistics.css';

export default function OutcomeStatistics() {
  const { statisticsItem } = useOutcomeStatistics();

  const statItem = statisticsItem.map(item => {
    return (
      <StatisticsItem
        key={item.id}
        type={item.type}
        percentage={item.percentage}
        img={item.img}
        color={item.color}
        colorLine={item.colorLine}
      />
    );
  });

  return (
    <div className="statistics">
      <h3 className="statistics--title">Outcome Statistics</h3>
      {statItem}
    </div>
  );
}
