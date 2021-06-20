import React, { FC, useEffect, useState } from 'react';

import {
  ScreensizeContext,
  ScreenSizeState,
  initialState,
} from './ScreensizeContext';

const breakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

function getScreenSize(windowWidth: number): ScreenSizeState {
  const isPhoneSmall = windowWidth < breakpoints.sm;
  const isPhone = windowWidth < breakpoints.md;
  const isMobile = windowWidth < breakpoints.lg;

  return {
    isPhoneSmall,
    isPhone,
    isMobile,
    isTablet: isMobile && !isPhone,
    isDesktop: !isMobile,
  };
}

export const ScreensizeProvider: FC = ({ children }) => {
  const [screenSize, setScreenSize] = useState(initialState);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    setScreenSize(getScreenSize(window.innerWidth));
  }

  return (
    <ScreensizeContext.Provider value={screenSize}>
      {children}
    </ScreensizeContext.Provider>
  );
};
