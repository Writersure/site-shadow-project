
import AdSense from './AdSense';

const HomeAdsPlacement = () => {
  return (
    <div className="my-12">
      <AdSense
        adClient="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your actual AdSense publisher ID
        adSlot="1234567890" // Replace with your actual ad slot ID
        className="w-full max-w-[728px] mx-auto"
        style={{ minHeight: '90px' }}
      />
    </div>
  );
};

export default HomeAdsPlacement;
