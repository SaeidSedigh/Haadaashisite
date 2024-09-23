// utils/astrology.js


// Moon cycle (in days)
const moonCycleDays = 29.53;

// Helper to calculate moon phase based on days since last new moon
const calculateMoonPhase = (date) => {
  // Reference new moon date (can be adjusted for accuracy)
  const referenceNewMoon = new Date('2024-09-03'); // Example date of a new moon
  const msInADay = 86400000;
  
  const daysSinceNewMoon = Math.floor((date - referenceNewMoon) / msInADay) % moonCycleDays;
  const phases = [
    { phase: 'New Moon', start: 0, end: 3.28 },
    { phase: 'Waxing Crescent', start: 3.28, end: 6.56 },
    { phase: 'First Quarter', start: 6.56, end: 9.84 },
    { phase: 'Waxing Gibbous', start: 9.84, end: 13.12 },
    { phase: 'Full Moon', start: 13.12, end: 16.4 },
    { phase: 'Waning Gibbous', start: 16.4, end: 19.68 },
    { phase: 'Last Quarter', start: 19.68, end: 22.96 },
    { phase: 'Waning Crescent', start: 22.96, end: 26.24 },
    { phase: 'Dark Crescent', start: 26.24, end: 29.53 }
  ];

  return phases.find(p => daysSinceNewMoon >= p.start && daysSinceNewMoon < p.end).phase;
};

// Main function to get moon phase and zodiac for the current date
export const getMoonPhase = (currentDate) => {
  const moonPhase = calculateMoonPhase(currentDate);
  console.log("&&&&&&&&&&&&&&\n&&&&&&&&&&&&&&\n")
  console.log({ moonPhase})
  console.log("&&&&&&&&&&&&&&\n&&&&&&&&&&&&&&\n")
  return { moonPhase };
};
