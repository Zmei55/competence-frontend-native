import { useState } from 'react';

export const useShowKeyboard = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState<boolean>(false);

  function setIsShowKeyboardTrue() {
    setIsShowKeyboard(true);
  }

  function setIsShowKeyboardFalse() {
    setIsShowKeyboard(false);
  }

  return { isShowKeyboard, setIsShowKeyboardTrue, setIsShowKeyboardFalse };
};
