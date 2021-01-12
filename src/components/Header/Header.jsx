import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.ico';

function Header(){

    const [clicked, setClicked] = useState(false);

    function toggle(){
        setClicked((clicked) => !clicked);
    }

    return(
        <header className="main-header">
            <div className="container">
                <nav className="main-navigation">
                    <div className="nav-brand">
                        <Link to="/home">
                            <img src={Logo} alt="brand logo for the site"/>
                        </Link>
                    </div>

                    <div className={clicked ? "menu-icons close" : "menu-icons open"} onClick={toggle}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={clicked ? "nav-list active" : "nav-list"}>
                        <li className="nav-item">
                            <Link to="home" className="nav-link current">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="destination" className="nav-link">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="pricing" className="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="booking" className="nav-link">Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;