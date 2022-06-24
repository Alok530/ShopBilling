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

function Navbar() {
    return (
        <>
            <div className="navbarpage">
                <div className="navbar">
                    <div className="navbardiv">
                        <div className='navbarIcon'><PersonAddAlt1Icon style={{ 'margin': '0px' }} /></div>
                        <p>Ney Buyer</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><UpdateIcon style={{ 'margin': '0px' }} /></div>
                        <p>Update Buyer</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><DescriptionIcon style={{ 'margin': '0px' }} /></div>
                        <p>Buyer Details</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><PersonAddDisabledIcon style={{ 'margin': '0px' }} /></div>
                        <p>Delete Buyer</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><NoteAddIcon style={{ 'margin': '0px' }} /></div>
                        <p>New Product</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><AutorenewIcon style={{ 'margin': '0px' }} /></div>
                        <p>Update Product</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><ReceiptLongIcon style={{ 'margin': '0px' }} /></div>
                        <p>Product Details</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><DeleteForeverIcon style={{ 'margin': '0px' }} /></div>
                        <p>Delete Product</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><CalculateIcon style={{ 'margin': '0px' }} /></div>
                        <p>Billing</p>
                    </div>
                    <div className="navbardiv">
                        <div className='navbarIcon'><LogoutIcon style={{ 'margin': '0px' }} /></div>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar