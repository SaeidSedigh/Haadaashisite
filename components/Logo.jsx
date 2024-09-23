
import Image from 'next/image';

const Logo = ({ size = 'MainHeaderSize' }) => {
  const sizeMap = {
    StickyHeaderSize: { width: 50, height: 50 },
    MainHeaderSize: { width: 100, height: 100 },
    FooterSize: { width: 70, height: 70 },
    // Add more sizes as needed
  };

  const { width, height } = sizeMap[size] || sizeMap.MainHeaderSize;

  return (
    <div className='Logo'>
      <Image
        src='/logo.png'
        alt="HaaDaaShi logo"
        quality={100}
        width={width}
        height={height}
        priority // Helps with optimization for critical elements
      />
    </div>
  );
};

export default Logo;
