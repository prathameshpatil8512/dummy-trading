import './Home.css';
import { useEffect, useState } from 'react';

const colors = [
  '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', 
  '#0000FF', '#4B0082', '#8F00FF', '#FF1493', '#00CED1', '#FFD700'
];

function Home() {
    const [letterColors, setLetterColors] = useState(
    Array.from({ length: 10 }, () => colors[Math.floor(Math.random() * colors.length)])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterColors(
        letterColors.map(() => colors[Math.floor(Math.random() * colors.length)])
      );
    }, 1000); // change colors every second

    return () => clearInterval(interval);
  }, [letterColors]);

  const word = 'EVERYTHING';

  return (
    <div className='homepage'>
      <h1>
        Invest in{' '}
        <strong>
          {word.split('').map((letter, index) => (
            <span
              key={index}
              style={{ color: letterColors[index], transition: 'color 0.5s' }}
            >
              {letter}
            </span>
          ))}
        </strong>
      </h1>
    </div>
  )
}

export default Home