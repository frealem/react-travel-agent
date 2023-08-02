import { Link } from "react-router-dom";
import "./footer.css"
export const Footer =()=>{
    return(
        <footer className="footer-main">
            <div className="sitemap">
                <h3>Site Map</h3>
              <ul>  <li><Link className="link" to='/Home'>Home</Link></li>
                <li><Link className="link" to='/Service'>Service</Link></li>
                <li><Link className="link" to='/Contact'>Contact</Link></li>
                <li><Link className="link" to='/About'>about</Link></li></ul>
                
            <h4>&copy;All Right Reseved !</h4>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <ul><li><Link className="link">Facebook</Link></li>
                <li><Link className="link">Twitter</Link></li>
                <li><Link className="link">Instagram</Link></li></ul>
            </div>
            
        </footer>
    );
}