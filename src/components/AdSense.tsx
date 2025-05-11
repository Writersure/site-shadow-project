
import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adClient: string; // Your AdSense publisher ID
  adSlot: string;   // The ad slot ID
  adFormat?: string; // Ad format (default: 'auto')
  style?: React.CSSProperties; // Optional styling
  className?: string; // Optional className for the container
}

const AdSense = ({ 
  adClient, 
  adSlot, 
  adFormat = 'auto', 
  style = {}, 
  className = '' 
}: AdSenseProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    try {
      // Skip ad rendering during development to avoid console errors
      if (process.env.NODE_ENV === 'development') {
        return;
      }
      
      // Wait for the Google AdSense script to be ready
      if (window.adsbygoogle) {
        // Push the ad to Google AdSense for rendering
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error loading AdSense ad:', error);
    }
  }, [adClient, adSlot]);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style,
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        ref={adRef}
      />
    </div>
  );
};

export default AdSense;
