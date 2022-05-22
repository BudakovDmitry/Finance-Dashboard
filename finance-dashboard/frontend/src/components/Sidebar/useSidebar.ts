import { useState } from 'react';
import { useAppSelector } from 'src/hooks/hooks';

export const useSidebar = () => {
  const { darkTheme } = useAppSelector(state => state);
  const [navItems, setNavItems] = useState([
    { name: 'Overview', id: 1 },
    { name: 'Transactions', id: 2 },
    { name: 'Cards', id: 3 },
    { name: 'Invoices', id: 4 },
    { name: 'Goals', id: 5 },
    { name: 'News', id: 6 },
    { name: 'Settings', id: 7 }
  ]);

  return {
    darkTheme,
    navItems
  };
};
