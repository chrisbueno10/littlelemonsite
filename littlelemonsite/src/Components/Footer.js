export default function Footer(){
    return(
        <footer className="footer">
        <div className="footer-container container">
          <Link to="/home">
            <img
              className="footer-image"
              src={require("../logo_footer.png")}
              alt="footer logo"
            />
          </Link>
          <Nav className="footer-nav" />
          <div className="footer-contacts">
            <ul>
              <li>Address</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="footer-social-media">
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </footer>
    );
}