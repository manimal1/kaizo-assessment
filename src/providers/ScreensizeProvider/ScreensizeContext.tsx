import React from 'react';

export interface ScreenSizeState {
  isPhoneSmall: boolean;
  isPhone: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const initialState = {
  isPhoneSmall: false,
  isPhone: false,
  isMobile: false,
  isTablet: false,
  isDesktop: true,
};

export const ScreensizeContext =
  React.createContext<ScreenSizeState>(initialState);
