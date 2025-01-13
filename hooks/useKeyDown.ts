import { useEffect, useCallback } from 'react';

type TKeyboardButton = 'Escape' | 'Enter';

export const useKeyDown = (
  keyboardButton: TKeyboardButton,
  callback: () => void
): void => {
  const handleKeyDown = useCallback(
    (event: { code: string }) => {
      if (event.code === keyboardButton) {
        callback();
      }
    },
    [callback, keyboardButton]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};
