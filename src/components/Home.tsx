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
    <div>
      <div className='homepage'>
        <div className='home'>
          <div className="landingimage" >
            <img src="./public/landing.svg" alt='Landing Page Image'></img>
          </div>
          <div>
            <h1 className='title'>
              Invest in&nbsp;{' '}
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
          <div>
            <p className='tagline'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          </div>
          <div className='signupbutton'>
            <button>Sign up for free</button>
          </div>
        </div>
        <div className='bottom'>
        </div>
      </div>
    </div>
  )
}

export default Home