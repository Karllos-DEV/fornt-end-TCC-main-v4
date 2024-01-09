import "./Footer.css";
import fb from '../img/facebook-square-logo-24.png';
import twitter from '../img/twitter-logo-24.png';
import insta from '../img/instagram-logo-24.png';
import linkedin from '../img/linkedin-square-logo-24.png';
import github from '../img/github-logo-24.png';

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Teste1</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Teste2</h4>
            <a href="/resource">
              <p>Resources center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Teste3</h4>
            <a href="/employer">
              <p>Testee</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Teste4</h4>
            <a href="/employer">
              <p>Sobre</p>
            </a>
            <a href="/employer">
              <p>Press</p>
            </a>
            <a href="/employer">
              <p>Career</p>
            </a>
            <a href="/employer">
              <p>Contato</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p><img src={fb} alt=""/></p>
              <p><img src={twitter} alt=""/></p>
              <p><img src={insta} alt=""/></p>
              <p><img src={linkedin} alt=""/></p>
              <p><img src={github} alt=""/></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;