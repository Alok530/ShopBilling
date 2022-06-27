import React from 'react'
import './Navbar.css';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LogoutIcon from '@mui/icons-material/Logout';
import CalculateIcon from '@mui/icons-material/Calculate';
import UpdateIcon from '@mui/icons-material/Update';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DescriptionIcon from '@mui/icons-material/Description';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Link } from 'react-router-dom';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

function Navbar() {
    return (
        <>
            <div className="navbarpage">
                <div className="navbar">
                    <Link to={'/addbuyer'} className="navbardiv">
                        <div className='navbarIcon'><PersonAddAlt1Icon style={{ 'margin': '0px' }} /></div>
                        <p>Ney Buyer</p>
                    </Link>
                    <Link to={'/update/buyer'} className="navbardiv">
                        <div className='navbarIcon'><UpdateIcon style={{ 'margin': '0px' }} /></div>
                        <p>Update Buyer</p>
                    </Link>
                    <Link to={'/buyer'} className="navbardiv">
                        <div className='navbarIcon'><DescriptionIcon style={{ 'margin': '0px' }} /></div>
                        <p>Buyer Details</p>
                    </Link>
                    <Link to={'/delete/buyer'} className="navbardiv">
                        <div className='navbarIcon'><PersonAddDisabledIcon style={{ 'margin': '0px' }} /></div>
                        <p>Delete Buyer</p>
                    </Link>
                    <Link to={'/addproduct'} className="navbardiv">
                        <div className='navbarIcon'><NoteAddIcon style={{ 'margin': '0px' }} /></div>
                        <p>New Product</p>
                    </Link>
                    <Link to={'/update/product'} className="navbardiv">
                        <div className='navbarIcon'><AutorenewIcon style={{ 'margin': '0px' }} /></div>
                        <p>Update Product</p>
                    </Link>
                    <Link to={'/product'} className="navbardiv">
                        <div className='navbarIcon'><ReceiptLongIcon style={{ 'margin': '0px' }} /></div>
                        <p>Product Details</p>
                    </Link>
                    <Link to={'/delete/product'} className="navbardiv">
                        <div className='navbarIcon'><DeleteForeverIcon style={{ 'margin': '0px' }} /></div>
                        <p>Delete Product</p>
                    </Link>
                    <Link to={'/billing'} className="navbardiv">
                        <div className='navbarIcon'><CalculateIcon style={{ 'margin': '0px' }} /></div>
                        <p>Billing</p>
                    </Link>
                    <Link to={'/logout'} className="navbardiv">
                        <div className='navbarIcon'><LogoutIcon style={{ 'margin': '0px' }} /></div>
                        <p>Logout</p>
                    </Link>
                </div>
                <div className="navbarmin">
                    <Link to={'/'} className="navlogo"><h2 className='m-0 fw-bolder'>BillingApp</h2></Link>
                    <Link to={'/navbar2'} className="navmenu"><p>Menu</p></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar