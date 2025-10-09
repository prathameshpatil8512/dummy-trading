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
            <img src="/dummy-trading/landing.svg" alt='Landing Page Image'></img>
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
          <div className='bottomleft'>
            <div className='headers' id='confidence'>
              <p>Trust with confidence</p>
            </div>
            <div className='headers'>
              <p>Customer-first always</p>
            </div>
            <div className='description'>
              <p>That's why 1.6+ crore customers trust Herodha with ~ ₹6<br/> lakh crores of equity investments, making us India’s<br/> largest broker; contributing to 15% of daily retail<br/> exchange volumes in India.</p>
            </div>
            <div className='headers'>
              <p>No spam or gimmicks</p>
            </div>
            <div className='description'>
              <p>No gimmicks, spam, "gamification", or annoying push<br/> notifications. High quality apps that you use at your<br/> pace, the way you like. Our philosophies.</p>
            </div>
            <div className='headers'>
              <p>The Herodha universe</p>
            </div>
            <div className='description'>
              <p>Not just an app, but a whole ecosystem. Our investments<br/> in 30+ fintech startups offer you tailored services<br/> specific to your needs.</p>
            </div>
            <div className='headers'>
              <p>Do better with money</p>
            </div>
            <div className='description'>
              <p>With initiatives like Nudge and Kill Switch, we don't just<br/> facilitate transactions, but actively help you do better<br/> with your money.</p>
            </div>
          </div>
          <div className='bottomright' id='ecosystemimage'>
            <img src="/dummy-trading/ecosystem.png" alt='Ecosystem Image'></img>
            <div className='bottombuttons'>
              <a href=''>Explore our products &rarr;</a>
              <a href=''>Try Kite demo &rarr;</a>
            </div>
          </div>
        </div>
        <div className='presslogo'>
          <img src="/dummy-trading/press-logos.png" alt='Press Image'></img>
        </div>
        <div className='unbeatablepricing'>
          <div className='unbeatablepricingleft'>
            <div className='headers'>
              <p>Unbeatable pricing</p>
            </div>
            <div className='description'>
              <p>We pioneered the concept of discount broking and price<br/> transparency in India. Flat fees and no hidden charges.</p>
            </div>
            <div className='pricingbutton'>
              <a href='#'>See pricing &rarr;</a>
            </div>
          </div>
          <div className='unbeatablepricingright'>
            <div className='accountopening' id='charges'>
              <img src="/dummy-trading/pricing-eq.svg" alt='Account Opening Charges'></img>
              <p>Free account <br />opening</p>
            </div>
            <div className='equity' id='charges'>
              <img src="/dummy-trading/pricing-eq.svg" alt='Equity Charges'></img>
              <p>Free equity delivery <br />and direct mutual funds</p>
            </div>
            <div className='intraday' id='charges'>
              <img src="/dummy-trading/other-trades.svg" alt='Intraday and F&O Charges'></img>
              <p>Intraday and <br />F&O</p>
            </div>
          </div>
        </div>
        <div className='varsity'>
          <div className='varsityimage'>
            <img src="/dummy-trading/index-education.svg" alt='Education Platform Image'></img>
          </div>
          <div className='varsitydescription'>
            <div className='headers'>
              <p>Free and open market education</p>
            </div>
            <div className='description'>
              <p>Varsity, the largest online stock market education book in the world<br /> covering everything from the basics to advanced trading.</p>
            </div>
            <div className='varsitybutton'>
              <a href=''>Varsity &rarr;</a>
            </div>
            <div className='description'>
              <p>TradingQ&A, the most active trading and investment community in<br /> India for all your market related queries.</p>
            </div>
            <div className='varsitybutton'>
              <a href=''>Trading Q&A &rarr;</a>
            </div>
          </div>
        </div>
        <div className='openaccount'>
          <div className='headers'>
            <p>Open a Herodha account</p>
          </div>
          <div className='description'>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
          </div>
          <div className='signupbutton'>
            <button>Sign up for free</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home