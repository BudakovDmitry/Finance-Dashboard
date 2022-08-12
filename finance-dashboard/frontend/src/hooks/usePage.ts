import { useToasts } from 'src/hooks/useToasts';

export const usePage = () => {
  const { addToast } = useToasts();

  return {
    addToast
  };
};
