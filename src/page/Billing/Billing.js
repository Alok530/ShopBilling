import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Billing.css';

const host = 'http://localhost:5000/api/';

function Billing() {
    const [name, setname] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("--");

    const [productid, setproductid] = useState("");
    const [productname, setproductname] = useState("--");
    const [quantity, setquantity] = useState(1);
    const [rate, setrate] = useState(0.0);
    const [total, settotal] = useState(0);
    const [paid, setpaid] = useState(0);

    const [items, setitems] = useState([]);

    const fetchbuyer = async () => {
        try {
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.post(host + 'buyer/getbuyer', { mobile, shopid });
            if (response.data.success) {
                setname(response.data.isExist.name); setmobile(response.data.isExist.mobile); setaddress(response.data.isExist.address);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchproduct = async () => {
        try {
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.get(host + 'product/' + productid + "/" + shopid);
            if (response.data.success) {
                setproductname(response.data.isExist.productname); setrate(response.data.isExist.price);
            }else{
                setproductname("--"); setrate(0); setquantity(1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const additemfun = async (e) => {
        e.preventDefault();
        try {
            if(productid==" " || productname==="--" || rate==0){
                return;
            }
            let i;
            for (i = 0; i < items.length; i++) {
                if (items[i].productid == productid) {
                    items[i].quantity = quantity;
                    break;
                }
            }
            if (i == items.length) {
                items.push({
                    'productid': productid,
                    'productname': productname,
                    'rate': rate,
                    'quantity': quantity
                });
            }
            settotal(total + rate * quantity);
            setproductid(" ");
            setproductname("--");
            setrate(0.0);
            setquantity(1);
        } catch (error) {
            console.log(error);
        }
    }

    const resetfun = async (e) => {
        e.preventDefault();
        try {
            setitems([]);
            settotal(0); setproductid(" "); setproductname("--"); setrate(0); setquantity(1);
            setname(""); setmobile(""); setaddress("");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (mobile.length == 10) {
            fetchbuyer();
        }
    }, [mobile])

    useEffect(() => {
        fetchproduct();
    }, [productid])

    const submitfun = async (e) => {
        e.preventDefault();
        try {
            if (items.length == 0) {
                alert("You haven't buy any item")
                return;
            }
            let shopid = "62b1ba0476655fecff2a1d5c";
            const buyer = {
                'name': name,
                'mobile': mobile,
                'address': address,
            };
            const response = await axios.post(host+'billing/sell', { items, buyer, shopid, total });
            console.log(response.data);
            if(response.data.success==true){
                resetfun(e);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="billingpage">
                <div className="billing">
                    <form className="row g-2" onSubmit={submitfun}>
                        <h1 className='m-0 fw-bolder text-center mt-2 mb-1' style={{ 'color': 'navy' }}>Billing</h1>
                        <div className="billdiv1 row g-2">
                            <h4 className='m-0 mt-1 fw-bold success'>Buyer Details</h4>
                            <div className="col-md-6">
                                <label className="form-label">Name</label>
                                <input required value={name} onChange={(e) => { setname(e.target.value) }} type="text" className="form-control" id="inputEmail4" placeholder='Enter Buyer Name'/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Contact No</label>
                                <input required value={mobile} onChange={(e) => { setmobile(e.target.value) }} minLength={10} maxLength={10} type="tel" pattern='[1-9]{1}[0-9]{9}' className="form-control" placeholder="Enter Buyer's Mobile No" />
                            </div>
                            <div className="col-md-12">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input required value={address} onChange={(e) => { setaddress(e.target.value) }} type="text" className="form-control" id="inputAddress" placeholder="Enter Buyer's Address" />
                            </div>
                            <div className="col-12 mb-2 mt-3">
                                <button onClick={(e) => { e.preventDefault(); setmobile(""); setname(""); setaddress("") }} className="btn btn-danger">Reset Details</button>
                            </div>
                        </div>
                        {/*-----------------------------*/}
                        <div className="billdiv1 row g-2">
                            <h4 className='m-0 fw-bold'>Product Details</h4>
                            <div className="col-md-3">
                                <label className="form-label">Product Id</label>
                                <input onChange={(e) => { setproductid(e.target.value) }} type="text" required className="form-control" placeholder='Enter Product Id' value={productid} />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Product Name</label>
                                <div className="form-control">{productname}</div>
                            </div>
                            <div className="col-md-2">
                                <label className="form-label">Rate</label>
                                <div className="form-control">{rate}</div>
                            </div>
                            <div className="col-md-2">
                                <label className="form-label">Quantity</label>
                                <input onChange={(e) => { setquantity(e.target.value) }} type="number" className="form-control" placeholder="Enter Quantity" value={quantity} />
                            </div>
                            <div className="col-md-2">
                                <label className="form-label">Total</label>
                                <div className="form-control">{rate * quantity}</div>
                            </div>
                            <div className="col-12 mb-2 mt-3">
                                <button onClick={(e) => { additemfun(e) }} className="btn btn-success me-3">Add Item</button>
                                <button onClick={(e) => { e.preventDefault(); setproductid(" "); setproductname("--"); setrate(0) }} className="btn btn-warning">Remove Item</button>
                            </div>
                        </div>

                        {/*--------------------------------*/}
                        <div className="billdiv1 row g-2 mt-2">
                            <h4 className='m-0 fw-bold'>Bill</h4>
                            <div className="col-md-8">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Rate</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items && items.map((itm) => {
                                                return <>
                                                    <tr>
                                                        <td scope="row">{itm.productname}</td>
                                                        <td>{itm.rate}</td>
                                                        <td>{itm.quantity}</td>
                                                        <td>{itm.quantity * itm.rate}</td>
                                                    </tr>
                                                </>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-4">
                                <h4 className='m-0 fw-bold mb-2'>Calculation</h4>
                                <div className="row g-3 align-items-center mb-2">
                                    <div className="col-6">
                                        <label className="col-form-label">Total</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-control">{total}</div>
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center mb-2">
                                    <div className="col-6">
                                        <label for="inputPassword6" className="col-form-label">Paid Amount</label>
                                    </div>
                                    <div className="col-6">
                                        <input className="form-control" value={paid} onChange={(e) => { setpaid(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center">
                                    <div className="col-6">
                                        <label for="inputPassword6" className="col-form-label">Return Amount</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-control">{paid == 0 ? 0 : paid - total}</div>
                                    </div>
                                </div>
                                <div className="row g-3 mb-2 mt-1">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-success">Save</button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={(e) => { resetfun(e) }} className="btn btn-danger">Reset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Billing