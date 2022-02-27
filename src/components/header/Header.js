import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    // const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <header id="header" className="alt">
                <h1><Link to="/">Resume </Link></h1>
                <nav id="nav">
                    <ul>
                        <li className="special">
                            {/* <Link to="/nav-menu" className="menuToggle"><span>Menu</span></Link> */}
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </li>
                    </ul>
                </nav >
            </header >

        </div >
    );
}

export default Header;