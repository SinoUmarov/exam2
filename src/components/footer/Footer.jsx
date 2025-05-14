import "./Footer.css"
import imglogo from"../../assets/IMAGE (20).png"
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-block">
            <h3>Quality cleaning for your home</h3>
            <p>Lorem ipsum dolor sit amet cteturtdo adipiscing elit, sed do eiusmod.</p>
            <div className="social-icons">
              <div className="icon-placeholder"></div>
              <div className="icon-placeholder"></div>
              <div className="icon-placeholder"></div>
              <div className="icon-placeholder"></div>
              <div className="icon-placeholder"></div>
            </div>
          </div>

          <div className="footer-block">
            <h4>Contact us</h4>
            <p>1827 Nickel Road, Los Angeles,<br />CA, 90017, United States</p>
            <p>(414) 567 - 2109</p>
            <p>contact@cleaning.com</p>
          </div>

          <div className="footer-block">
            <h4>Hours</h4>
            <p><strong>Monday to Friday</strong><br />6:00 AM - 9:00 PM</p>
            <p><strong>Saturday & Sunday</strong><br />8:00 AM - 8:00 PM</p>
          </div>

          <div className="footer-block">
            <h4>Get a free estimate</h4>
            <p><a href="tel:4145672109" className="phone-link">(414) 567 - 2109</a></p>
            <p>Lorem ipsum dolor sit amet etcetur adipiscing elit, sed do eiusmod.</p>
            <button className="btn blue">Request a free quote</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="logo"><img src={imglogo} alt="" /></div>
          <p>
            Copyright © Cleaning X | Designed by <a href="#">BRIX Templates</a> – Powered by <a href="#">Webflow</a> – <a href="#">Licenses</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
