import { useAppSelector } from 'src/hooks/hooks';

export const useSidebarItem = () => {
  const { darkTheme } = useAppSelector(state => state);

  return {
    darkTheme
  };
};
