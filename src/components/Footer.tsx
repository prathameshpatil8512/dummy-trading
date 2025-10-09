import './Footer.css';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa'; 

function Footer() {
  return (
    <div className='footer'>
        <div className='firstcolumn'>
            <div>
                <p className='title'>ZERODHA</p>
            </div>
            <div>
                <p>© 2010 - 2025, Zerodha Broking Ltd. <br/>All rights reserved.</p>
            </div>
            <hr></hr>
            <div className='socialmedia'>
                <a href='' ><FaTwitter size={30} /></a>
                <a href='' ><FaFacebook size={30} /></a>
                <a href='' ><FaInstagram size={30} /></a>
                <a href='' ><FaLinkedin size={30} /></a>
            </div>
            <hr></hr>
            <div className='socialmedia'>
                <a href='' ><FaYoutube size={30} /></a>
                <a href='' ><FaWhatsapp size={30} /></a>
                <a href='' ><FaTelegram size={30} /></a>
            </div>
        </div>
        <div className='secondcolumn'>
            <div className='columns'>
                <div className='columnsthree'>
                    <ul className='listname'>
                        <li className='navhead'>Account</li>
                        <li>
                            <a href=''>Open demat account</a>
                        </li>
                        <li>
                            <a href=''>Minor demat account</a>
                        </li>
                        <li>
                            <a href=''>NRI demat account</a>
                        </li>
                        <li>
                            <a href=''>Commodity</a>
                        </li>
                        <li>
                            <a href=''>Dematerialisation</a>
                        </li>
                        <li>
                            <a href=''>Fund transfer</a>
                        </li>
                        <li>
                            <a href=''>MTF</a>
                        </li>
                        <li>
                            <a href=''>Referral program</a>
                        </li>
                    </ul>
                </div>
                <div className='columnsthree'>
                    <ul className='listname'>
                        <li className='navhead'>Support</li>
                        <li>
                            <a href=''>Contact us</a>
                        </li>
                        <li>
                            <a href=''>Support portal</a>
                        </li>
                        <li>
                            <a href=''>How to file a complaint?</a>
                        </li>
                        <li>
                            <a href=''>Status of your complaint</a>
                        </li>
                        <li>
                            <a href=''>Bulletin</a>
                        </li>
                        <li>
                            <a href=''>Circular</a>
                        </li>
                        <li>
                            <a href=''>Z-Connect blog</a>
                        </li>
                        <li>
                            <a href=''>Downloads</a>
                        </li>
                    </ul>
                </div>
                <div className='columnsthree'>
                    <ul className='listname'>
                        <li className='navhead'>Company</li>
                        <li>
                            <a href=''>About</a>
                        </li>
                        <li>
                            <a href=''>Philosophy</a>
                        </li>
                        <li>
                            <a href=''>Press & media</a>
                        </li>
                        <li>
                            <a href=''>Careers</a>
                        </li>
                        <li>
                            <a href=''>Zerodha Cares (CSR)</a>
                        </li>
                        <li>
                            <a href=''>Zerodha.tech</a>
                        </li>
                        <li>
                            <a href=''>Open source</a>
                        </li>
                    </ul>
                </div>
                <div className='columnsthree'>
                    <ul className='listname'>
                        <li className='navhead'>Quick links</li>
                        <li>
                            <a href=''>Upcoming IPOs</a>
                        </li>
                        <li>
                            <a href=''>Brokerage charges</a>
                        </li>
                        <li>
                            <a href=''>Market holidays</a>
                        </li>
                        <li>
                            <a href=''>Economic calendar</a>
                        </li>
                        <li>
                            <a href=''>Calculators</a>
                        </li>
                        <li>
                            <a href=''>Markets</a>
                        </li>
                        <li>
                            <a href=''>Sectors</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer