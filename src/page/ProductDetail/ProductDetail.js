import React, { useState, useEffect } from 'react';
import './BuyerDetail.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import NavbarFront from '../../components/navbarfront/NavbarFront';
const host = 'http://localhost:5000/api/';

function ProductDetail() {
    const [productname, setproductname] = useState("--");
    const [productdesc, setproductdesc] = useState("--");
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [status, setstatus] = useState(true);
    const [productid, setproductid] = useState();

    const findproduct = async () => {
        try {
            let shopid = "62b1ba0476655fecff2a1d5c";
            if(!productid){
                setproductdesc("--");setquantity(0);setstatus(false);setproductname("--");setprice(0);
                return;
            }
            const response = await axios.get(host + `product/${productid}/${shopid}`);
            if (response.data.success) {
                setproductid(response.data.isExist.productid);
                setprice(response.data.isExist.price);
                setproductname(response.data.isExist.productname);
                setproductdesc("");
                setquantity(response.data.isExist.quantity);
                setstatus(response.data.isExist.status);
            }else{
                setproductdesc("--");setquantity(0);setstatus(false);setproductname("--");
            }
        } catch (error) {
            console.log('error inside findquantity', error);
        }
    }

    useEffect(() => {
        findproduct();
    }, [productid])


    return (
        <>
        {window.localStorage.getItem('shopid')?<Navbar />:<NavbarFront/>}
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-2' style={{ 'color': 'navy' }}>Product Details</h3>
                    <form className="row g-3">
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Product Id</label>
                            <input required onChange={(e) => { setproductid(e.target.value) }} className="form-control" value={productid} placeholder="Search By Product Id" />
                        </div>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Product Name</label>
                            <div className="form-control">{productname}</div>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Product Desc</label>
                            <div className="form-control">{productdesc === "" ? "--" : productdesc}</div>
                        </div>
                        <div className="col-md-4">
                            <label for="inputPassword4" className="form-label">Price</label>
                            <div className="form-control">{price}</div>
                        </div>
                        <div className="col-md-4">
                            <label for="inputAddress2" className="form-label">Quantity</label>
                            <div className="form-control">{quantity}</div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <label for="inputState" className="form-label">Status</label>
                            <div className="form-control">{status == true && quantity > 0 ? 'In-Stock' : 'Out of Stock'}</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductDetail