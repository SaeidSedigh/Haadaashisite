"use client";
import './moonphase.css';
import {getMoonPhase} from '@/utils/astrology';
// Navbar component that includes HTML
export default function LunarPhase() {
  let CurrentMoonPhase = getMoonPhase(new Date('2024-09-23'));
  return (
    <div className='LunaContainer' phase={CurrentMoonPhase.moonPhase}>
      {(()=>{
        let arr = []
        for (let i = 0; i < 9; i++) {
          arr.push(<div className='MoonPhase'></div>)
        }
        return arr;
      })()}
    </div>
  );
}