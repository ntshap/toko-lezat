import { useState, useEffect } from 'react';

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  screenWidth: number;
  screenHeight: number;
  userAgent: string;
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    deviceType: 'desktop',
    screenWidth: 1024,
    screenHeight: 768,
    userAgent: ''
  });

  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const userAgent = navigator.userAgent;

      // Detailed mobile detection
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const tabletRegex = /iPad|Android(?=.*Tablet)|Tablet/i;
      
      const isMobileUA = mobileRegex.test(userAgent);
      const isTabletUA = tabletRegex.test(userAgent);
      
      // Screen size detection
      const isMobileSize = width <= 768;
      const isTabletSize = width > 768 && width <= 1024;
      const isDesktopSize = width > 1024;

      // Combine both methods for better accuracy
      const isMobile = (isMobileUA && !isTabletUA) || (isMobileSize && !isDesktopSize);
      const isTablet = isTabletUA || (isTabletSize && !isMobileSize);
      const isDesktop = !isMobile && !isTablet;

      let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      if (isMobile) deviceType = 'mobile';
      else if (isTablet) deviceType = 'tablet';

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        deviceType,
        screenWidth: width,
        screenHeight: height,
        userAgent
      });
    };

    // Initial detection
    detectDevice();

    // Listen for resize events
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  return deviceInfo;
}

// Specific hook for checking if user is on mobile
export function useIsMobileDevice(): boolean {
  const { isMobile } = useDeviceDetection();
  return isMobile;
}
