
import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
    return(
                    
      <footer className={styles.footer}>
      <div className={styles.main_footer}>
      <div className="container">
      <div className="row">
      
        <div className="col-xs-12 col-sm-6 col-md-3">
      <div className={styles.widget}>
        <div style={{paddingLeft: "30px;"}}><Image src={logo} width={50} height={50} paddingLeft={20} alt="Hackmoreish logo"></Image></div>
      
      <h5 className={styles.widget_title}>HackMoreish</h5>
      </div>
      </div>
      
        
      <div className="col-xs-12 col-sm-6 col-md-3">
      <div className={styles.widget}>
      <h5 className={styles.widget_title}>Quick Links</h5>
      <ul >
      <li>
      <div ><a href="#About">About</a>  <a href="#Theme">    Theme</a></div>		
      </li>
      <li>
      <div><a href="#Prizes">Prizes</a><a href="#Schedule">  Schedule</a></div>	
      </li>
      <li>
      <div><a href="#Sponsors">Sponsors</a><a href="#FAQs">  FAQs</a></div>	
      </li>
      
      </ul>
      </div>
      </div>
      
        
      
            <div className="col-xs-12 col-sm-6 col-md-3">
      <div className={styles.widget}>
      <h5 className={styles.widget_title}>Follow us on:</h5>
                  <a href="https://www.facebook.com/profile.php?id=100074956186696"><i className="fab fa-facebook fa-lg" style={{padding: "7px;"}}></i></a>
                   <a href="https://twitter.com/HackMoreish?t=HPo06xXtMNosPUf1ltngAA&s=08"><i className="fab fa-twitter fa-lg" style={{padding: "7px;"}}> </i> </a>
                  <a href="https://instagram.com/hackmoreish?utm_medium=copy_link"><i className="fab fa-instagram fa-lg" style={{padding: "7px;"}}> </i> </a>
                  {/* <i className="fab fa-discord fa-lg" style={{padding: "5px;"}}> </i>  */}
      </div>
      </div>
      
      
      <div className="col-xs-12 col-sm-6 col-md-3">
      <div className={styles.widget}>
      <h5 className={styles.widget_title}>For Queries:</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      
      </div>
      
      </div>
      </div>
      </div>
      </div>
        
      </footer>


    );
    }