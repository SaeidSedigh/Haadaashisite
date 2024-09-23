"use client";
import { useEffect, useState } from 'react';
import './StickyHeader.css'
import Logo from './Logo';
// Navbar component that includes HTML
export default function StickyHeader({children,offsetHeight}) {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > offsetHeight) {
        setIsHidden(true); // Hide the header
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false); // Show the header
      }
      setLastScrollY(currentScrollY);
      setIsSticky(currentScrollY > offsetHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener
    };
  }, [lastScrollY, offsetHeight]);
  return (
    <div className='StickyNavBarFixedContainer'>
      <div className={`StickyNavBar ${isSticky ? 'stick' : ''} ${isHidden ? 'hide' : ''}`}>
        {children}
      </div>
    </div>
  );
}