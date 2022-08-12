import { useToasts as useToastsNotifications } from 'react-toast-notifications';

export const useToasts = () => {
  const { addToast, removeToast, removeAllToasts, updateToast, toastStack } =
    useToastsNotifications();

  return {
    addToast,
    removeToast,
    removeAllToasts,
    updateToast,
    toastStack
  };
};
