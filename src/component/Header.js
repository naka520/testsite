import Style from "../App.css";
import logo from './logo.svg';

function Header() {
    return (
        <div className={Style.App}>
        <header className={Style.Appheader}>
          <img src={logo} className={Style.Applogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </header> 
      </div>
        );
    }
    
    export default Header;