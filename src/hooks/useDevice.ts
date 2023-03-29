import { useCallback, useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";

export interface IUseBreakpointState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isIOS: boolean;
  isAndroid: boolean;
}

export const useDevice = () => {
  const { isIOS, isAndroid } = getSelectorsByUserAgent(
    window.navigator.userAgent
  );
  const [device, setDevice] = useState<IUseBreakpointState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isIOS,
    isAndroid,
  });
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    pixelRatio: 1,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: window.devicePixelRatio,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    let isMobile = false,
      isTablet = false,
      isDesktop = false;

    const windowWidth = windowSize?.width;

    if (0 < windowWidth && windowWidth < 600) {
      isMobile = true;
      isTablet = false;
      isDesktop = false;
    }
    if (600 < windowWidth && windowWidth < 960) {
      isMobile = false;
      isTablet = true;
      isDesktop = false;
    }
    if (960 < windowWidth && windowWidth < 1200) {
      isMobile = false;
      isTablet = true;
      isDesktop = false;
    }
    if (1200 < windowWidth && windowWidth < 1920) {
      isMobile = false;
      isTablet = false;
      isDesktop = true;
    }
    if (windowWidth >= 1920) {
      isMobile = false;
      isTablet = false;
      isDesktop = true;
    }

    const { isIOS, isAndroid } = getSelectorsByUserAgent(
      window.navigator.userAgent
    );

    setDevice({
      isMobile,
      isTablet,
      isDesktop,
      isIOS,
      isAndroid,
    });

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width, windowSize.pixelRatio, handleResize]);

  return device;
};
