import { useCurrency } from 'src/hooks/useCurrency';

export const useCurrencyBoard = () => {
  const { currency, isLoading, error, mutate } = useCurrency();

  return {
    currency,
    isLoading
  };
};
