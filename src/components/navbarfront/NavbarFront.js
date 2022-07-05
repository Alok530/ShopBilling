import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarFront.css';

function NavbarFront() {
    return (
        <>
            <div className="navbarfront">
                <div className="navfront">
                    <Link to={'/'} className="navfrontlink"><h2 className='m-0 fw-bolder'>ShopBilling</h2></Link>
                    <Link to={'/login'} className="navfrontlink"><p>SignIn / SignUp</p></Link>
                </div>
            </div>
        </>
    )
}

export default NavbarFront