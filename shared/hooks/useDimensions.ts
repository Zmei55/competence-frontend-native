import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useDimensions = () => {
  const [widthWindow, setWidthWindow] = useState<number>(
    Dimensions.get('window').width
  );
  const [heightWindow, setHeightWindow] = useState<number>(
    Dimensions.get('window').height
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width;
      setWidthWindow(width);
      const height = Dimensions.get('window').height;
      setHeightWindow(height);
    };
    const dim = Dimensions.addEventListener('change', onChange);
    return () => {
      dim.remove();
    };
  }, []);

  return { widthWindow, heightWindow };
};
