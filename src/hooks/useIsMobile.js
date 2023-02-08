import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handler = () => {
      console.log('handler ran');
      setIsMobile(mediaQueryList.matches === false);
    };
    const mediaQueryList = matchMedia('(min-width: 1024px)');
    setIsMobile(mediaQueryList.matches === false);

    mediaQueryList.addEventListener('change', handler);

    return () => {
      mediaQueryList.removeEventListener('change', handler);
    };
  }, [setIsMobile]);

  return isMobile;
};
