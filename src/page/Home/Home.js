import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AddBuyer from '../AddNewBuyer/AddBuyer';
import Addproduct from '../AddNewProduct/Addproduct';
import Billing from '../Billing/Billing';
import BuyerDetail from '../BuyerDetail/BuyerDetail';
import ProductDetail from '../ProductDetail/ProductDetail';
import UpdateBuyer from '../updateBuyer/UpdateBuyer';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import './Home.css';

function Home() {
    return (
        <>
            <div className="homepage">               
                <Billing/>
            </div>
        </>
    )
}

export default Home