import InstagramIcon from './instagram.png'
import YoutubeIcon from './youtube.png'
import TelegramIcon from './telegram.png'
import './Header.css'
function Header() {
  return (
    <header>
      <div className="social-media-icons">
        <img src={InstagramIcon} alt="" />
        <img src={YoutubeIcon} alt="" />
        <img src={TelegramIcon} alt="" />
      </div>
      <hr />
      <div className="hearder-nav">
        <div className="header-nav-items">
          <div className="header-nav-item">ABOUT US</div>
          <div className="header-nav-item">PRIVACY POLICY</div>
          <div className="header-nav-item">REFUNDS & CANCELLATIONS POLICY</div>
          <div className="header-nav-item">CONTACT US</div>
        </div>
        <div className="tradeMark">
          Copyright &#169; 2023 - 2024 GREYHATSHADOW
        </div>
      </div>
    </header>
  )
}

export default Header