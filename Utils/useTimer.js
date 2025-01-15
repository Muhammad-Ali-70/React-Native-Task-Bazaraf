import {useEffect} from 'react';

export const useTimer = setLoop => {
  useEffect(() => {
    const timer = setTimeout(() => setLoop(false), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [setLoop]);
};
