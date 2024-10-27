import "./footer.css";
import InstagramLogo from "./Instagram.svg"
import TwitterLogo from "./Twitter.svg"




function footer() {
 
  
  return (
<div className="footerContainer">
<div className="footer">
<div className="footerCol"> Meistgesuchte Aktien
    <div className="footerline"> <a href="https://www.nifty-data.de/#/aktien/AAPL">Apple Inc.</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/aktien/MSFT">Micrsoft Corp</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/aktien/ADBE">Adobe Inc.</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/aktien/MCO">Moodys Inc.</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/aktien/BLK">BlackRock Inc.</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/aktien/UNP">Union Pacific Corp.</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/aktien/TSLA">Tesla Inc.</a></div>
</div>
<div className="footerCol"> Meistgesuchte Gurus
    <div className="footerline"> <a href="https://www.nifty-data.de/#/gurus/0001067983">Warren Buffett</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/gurus/0001166559">Bill Gates</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/gurus/0001569205">Terry Smith</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/gurus/0000783412">Charlie Munger</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/gurus/0001336528">Bill Ackmann</a></div>
</div>

<div className="footerCol"> Nifty
    <div className="footerline"> <a href="https://www.nifty-data.de">Über uns</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de">AGB</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/">Impressum</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/">Kontakt</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/">Karriere</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/Rechner">Rechner (dev)</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/">Sitemap</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/">FAQs</a></div>
</div>

<div className="footerCol">User
    <div className="footerline"> <a href="https://www.nifty-data.de/#/loginPage">Anmelden</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/#/newMember">Registrieren</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/">Preise</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/">B2B</a></div>
    <div className="footerline"> <a href="https://www.nifty-data.de/">Bildung</a></div>
</div>

</div>

<div className="bottomLine"></div>

<div className="bottomFooter">
  <div>
    <a href="https://www.instagram.com/nifty_finance/" target="_blank" rel="noopener noreferrer">
      <img src={InstagramLogo} style={{height:"20px", marginRight: "20px"}} alt="Instagram" />
    </a>
    <a href="https://twitter.com/nifty_data" target="_blank" rel="noopener noreferrer">
      <img src={TwitterLogo} style={{height:"20px"}} alt="Twitter" />
    </a>
  </div>
  <div>
    <a style={{fontSize:"12px"}} href="https://www.nifty-data.de">www.nifty-data.de</a>
  </div>
</div>

</div>

  );
}

export default footer;
