'use client';  // Add this to make this a client component
import './styles.css'
import Image from 'next/image';
import NavBar from './NavBar';
import LunarPhase from './LunarPhase';
import StickyHeader from '../StickyHeader'
import Logo from '../Logo'
export default function HomeClient() {
  return (
    <>
      <div className='HeaderFixer'>
        <header className='MainHeader'>
          <div className="gardoon"></div>
          <div className="gardoon"></div>
          <div className="MainHeaderContent">
            <LunarPhase />
            <Logo size="MainHeaderSize" />
            <div className='HeaderNavBar'>
              <NavBar />
            </div>
            {/*<div className='HeaderLogo'>
              <Image
                src='/logo.png'
                alt="HaaDaaShi logo"
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>*/}
          </div>
        </header>
      </div>
      <div className='ScrollableContent'>
        <StickyHeader offsetHeight={200}>
          <Logo size="StickyHeaderSize" />
          <NavBar />
        </StickyHeader>
      </div>
      <footer
        style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}
      >
        © 2024 Fran Agulto Dev Stoke
      </footer>
    </>
  );
}
