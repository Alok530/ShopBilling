import React, { useState, useEffect } from 'react';
import './UpdateBuyer.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import NavbarFront from '../../components/navbarfront/NavbarFront';

const host = 'http://localhost:5000/api/';

function UpdateBuyer() {
    const [name, setname] = useState("--");
    const [address, setaddress] = useState("--")
    const [mobile, setmobile] = useState();
    const fetchbuyer = async () => {
        try {
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.post(host + "buyer/getbuyer", { shopid, mobile });
            if (response.data.success) {
                setname(response.data.isExist.name);
                setaddress(response.data.isExist.address);
            } else {
                setname("--");
                setaddress("--");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const submitfun = async () => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchbuyer();
    }, [mobile]);
    return (
        <>
        {window.localStorage.getItem('shopid')?<Navbar />:<NavbarFront/>}
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-4' style={{ 'color': 'navy' }}>Update Buyer</h3>
                    <form class="row g-3" onSubmit={submitfun}>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Mobile Number</label>
                            <input required onChange={(e) => { setmobile(e.target.value) }} type="tel" pattern='[1-9]{1}[0-9]{9}' class="form-control" minLength={10} maxLength={10} placeholder="Search By Mobile No" />
                        </div>
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input required type="text" value={name} onChange={(e) => { setname(e.target.value) }} class="form-control" placeholder="Buyer's Name" />
                        </div>
                        <div class="col-12">
                            <label for="inputPassword4" class="form-label">Address</label>
                            <input type="text" value={address} onChange={(e) => { setaddress(e.target.value) }} class="form-control" placeholder="Buyer's Address" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary mb-2">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateBuyer