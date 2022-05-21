import { themeUpdate } from 'src/actions/actions';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';

export const useSettingsPage = () => {
  const { darkTheme } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const changeTheme = () => {
    dispatch(themeUpdate());
  };

  return {
    darkTheme,
    changeTheme
  };
};
