import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './BuyerDetail.css';

const host = 'http://localhost:5000/api/';

function BuyerDetail() {
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

    useEffect(() => {
        fetchbuyer();
    }, [mobile]);

    return (
        <>
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-2' style={{ 'color': 'navy' }}>Buyer Details</h3>
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Buyer's Mobile No</label>
                            <input minLength={10} maxLength={10} value={mobile} onChange={(e) => { setmobile(e.target.value) }} className="form-control" placeholder="Enter Buyer's Mobile No" />
                        </div>
                        <div class="col-12">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <div className="form-control">{name}</div>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="inputAddress2" class="form-label">Address</label>
                            <div className="form-control">{address}</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BuyerDetail