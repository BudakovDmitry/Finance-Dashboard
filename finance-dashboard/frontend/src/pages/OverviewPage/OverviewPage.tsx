import Cards from 'src/components/Cards/Cards';
import Goals from 'src/components/Goals/Goals';
import Header from 'src/components/Header/Header';
import NewTransaction from 'src/components/NewTransaction/NewTransaction';
import OutcomeStatistics from 'src/components/OutcomeStatistics/OutcomeStatistics';
import TransactionHistory from 'src/components/TransactionHistory/TransactionHistory';
import { useOverviewPage } from 'src/pages/OverviewPage/useOverviewPage';

import './OverviewPage.css';

export default function OverviewPage() {
  return (
    <div className="overview">
      <Header
        title="Weekly sumup"
        description="Get summary of your weekly online transactions here."
      />
      <div className="overview--item">
        <Cards />
        <TransactionHistory />
        <Goals />
        <OutcomeStatistics />
        <NewTransaction />
      </div>
    </div>
  );
}
