import React,{useState,useEffect} from 'react';
import './UpdateProduct.css';
import axios from 'axios';

const host = 'http://localhost:5000/api/';

function UpdateProduct() {
    const [productname, setproductname] = useState("");
    const [productdesc, setproductdesc] = useState("--");
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [status, setstatus] = useState(true);
    const [productid, setproductid] = useState(2);

    const findproduct = async () => {
        try {
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.get(host + `product/${productid}/${shopid}`);
            setproductid(response.data.productid);
            setprice(response.data.price);
            setproductname(response.data.productname);
            setproductdesc("--");
            setquantity(response.data.quantity);
            setstatus(response.data.status);
        } catch (error) {
            console.log('error inside findquantity', error);
        }
    }

    useEffect(() => {
        findproduct();
    }, []);

    const submitfun = async (event) => {
        event.preventDefault();
        try {
            console.log(productname, productdesc, parseInt(price, 10), quantity, status);
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.post(host + 'product/update', { productname, productdesc, price, quantity, status, shopid, productid });
            console.log(response.data);
            setprice(""); setproductname(""); setstatus(true); setquantity(0); setproductdesc("");
        } catch (error) {
            console.log('error inside add new product', error);
        }
    }


    return (
        <>
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-4' style={{ 'color': 'navy' }}>Update Product</h3>
                    <form className="row g-3" onSubmit={submitfun}>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Product Id</label>
                            <div className="form-control">{productid}</div>
                        </div>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Product Name</label>
                            <input type="text" value={productname} required minLength={3} maxLength={16} className="form-control fw-bold" onChange={(e) => { setproductname(e.target.value) }} id="inputEmail4" placeholder='Milk Biskit' />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Product Desc</label>
                            <input type="text" value={productdesc} minLength={3} maxLength={16} className="form-control" onChange={(e) => { setproductdesc(e.target.value) }} id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputPassword4" className="form-label">Price</label>
                            <input type="number" value={price} minLength={1} required className="form-control" onChange={(e) => { setprice(e.target.value)}} id="" placeholder='499.00' />
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
                            <button type="submit" className="btn btn-primary">Update Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct;