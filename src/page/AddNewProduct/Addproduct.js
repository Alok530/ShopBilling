import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './addproduct.css';
import Navbar from '../../components/Navbar/Navbar';
import NavbarFront from '../../components/navbarfront/NavbarFront';

const host = 'http://localhost:5000/api/';

function Addproduct() {
    const [productname, setproductname] = useState("");
    const [productdesc, setproductdesc] = useState("");
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [status, setstatus] = useState(true);
    const [productid, setproductid] = useState();

    const findquantity = async () => {
        try {
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.get(host + 'product/productquantity/' + shopid);
            setproductid(response.data+1);
        } catch (error) {
            console.log('error inside findquantity', error);
        }
    }

    useEffect(() => {
        findquantity();
    }, [])


    const submitfun = async (event) => {
        event.preventDefault();
        try {
            console.log(productname, productdesc, parseInt(price, 10), parseInt(quantity, 10), status);
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.post(host + 'product/register', { productname, productdesc, price, quantity, status, shopid, productid });
            console.log(response.data);
            setprice(""); setproductname(""); setstatus(true); setquantity(0); setproductdesc("");
        } catch (error) {
            console.log('error inside add new product', error);
        }
    }

    return (
        <>
        {window.localStorage.getItem('shopid')?<Navbar />:<NavbarFront/>}
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-4' style={{ 'color': 'navy' }}>Add New Product</h3>
                    <form className="row g-3" onSubmit={submitfun}>
                        <div className="col-12" style={{'marginBottom':'-12px'}}>
                            <label for="inputEmail4" className="form-label">Product Id : <span>{productid}</span></label>
                        </div>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Product Name</label>
                            <input type="text" value={productname} required minLength={3} maxLength={16} className="form-control" onChange={(e) => { setproductname(e.target.value) }} id="inputEmail4" placeholder='Milk Biskit' />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Product Desc</label>
                            <input type="text" value={productdesc} minLength={3} maxLength={16} className="form-control" onChange={(e) => { setproductdesc(e.target.value) }} id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-4">
                            <label for="" className="form-label">Price</label>
                            <input type="number" value={price} minLength={1} required className="form-control" onChange={(e) => { setprice(e.target.value) }} id="" placeholder='499.00' />
                        </div>
                        <div className="col-md-4">
                            <label for="inputAddress2" className="form-label">Quantity</label>
                            <input type="number" value={quantity} required className="form-control" onChange={(e) => { setquantity(e.target.value) }} id="inputAddress2" placeholder="10" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Status</label>
                            <select id="inputState" className="form-select">
                                <option selected>In-Stock</option>
                                <option>Out of Stock</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addproduct