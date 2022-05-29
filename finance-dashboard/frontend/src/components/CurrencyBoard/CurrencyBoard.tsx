import { useCurrencyBoard } from 'src/components/CurrencyBoard/useCurrencyBoard';
import Loader from 'src/components/Loader/Loader';

import './CurrencyBoard.css';

const CurrencyBoard = () => {
  const { currency, isLoading } = useCurrencyBoard();

  if (isLoading) {
    return <Loader />;
  }

  if (currency.errorDescription) {
    return null;
  }

  return (
    <div className="currency">
      <h4 className="currency--a">
        {`USD ${currency[0].rateBuy.toFixed(2)}/${currency[0].rateSell.toFixed(
          2
        )}`}
      </h4>
      <h4 className="currency--b">
        {`EUR ${currency[1].rateBuy.toFixed(2)}/${currency[1].rateSell.toFixed(
          2
        )}`}
      </h4>
    </div>
  );
};

export default CurrencyBoard;
