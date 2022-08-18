import "./Footer.css"

import logo from "../../assets/footer/logo-footer.png"
import facebook from "../../assets/footer/facebook.svg"
import twitter from "../../assets/footer/twitter.svg"
import youtube from "../../assets/footer/youtube.svg"

const Footer = () => {
  return (
    <footer>
      <img className="footer-logo" src={logo} alt="logo cartedepeche"></img>
      <div className="footer-column-1">
        <span>cartedepeche.fr</span>
        <p>
          Site officiel d'adhésion aux AAPPMA - Associations de pêche en France
        </p>
        <a href="/" className="link-1">
          GENERATIONPECHE.FR
        </a>
        <a href="/" className="link-2">
          FEDERATIONPECHE.FR
        </a>
      </div>
      <div className="footer-column-2">
        <div>
          <img src={facebook} alt="logo Facebook"></img>
          <img src={twitter} alt="logo Twitter"></img>
          <img src={youtube} alt="logo Youtube"></img>
        </div>
        <ul>
          <li>Plan du site</li>
          <li>Mentions légales</li>
          <li>Contactez-nous</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
