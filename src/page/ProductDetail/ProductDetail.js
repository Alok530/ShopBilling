import React,{useState,useEffect} from 'react';
import './BuyerDetail.css';
import axios from 'axios';

const host = 'http://localhost:5000/api/';

function ProductDetail() {
    const [productname, setproductname] = useState("");
    const [productdesc, setproductdesc] = useState("");
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [status, setstatus] = useState(true);
    const [productid, setproductid] = useState(4);

    const findproduct = async () => {
        try {
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.get(host + `product/${productid}/${shopid}`);
            setproductid(response.data.isExist.productid);
            setprice(response.data.isExist.price);
            setproductname(response.data.isExist.productname);
            setproductdesc("");
            setquantity(response.data.isExist.quantity);
            setstatus(response.data.isExist.status);
        } catch (error) {
            console.log('error inside findquantity', error);
        }
    }

    useEffect(() => {
        findproduct();
    }, [])


    return (
        <>
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-2' style={{ 'color': 'navy' }}>Product Details</h3>
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Product Id</label>
                            <div className="form-control">{productid}</div>
                        </div>
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Product Name</label>
                            <div className="form-control">{productname}</div>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Product Desc</label>
                            <div className="form-control">{productdesc===""?"--":productdesc}</div>
                        </div>
                        <div class="col-md-4">
                            <label for="inputPassword4" class="form-label">Price</label>
                            <div className="form-control">{price}</div>
                        </div>
                        <div class="col-md-4">
                            <label for="inputAddress2" class="form-label">Quantity</label>
                            <div className="form-control">{quantity}</div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="inputState" class="form-label">Status</label>
                            <div className="form-control">{status==true && quantity>0?'In-Stock':'Out of Stock'}</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductDetail