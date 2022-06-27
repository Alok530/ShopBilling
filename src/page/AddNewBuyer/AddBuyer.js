import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './addBuyer.css';

const host = 'http://localhost:5000/api/';

function AddBuyer() {
    const [name, setname] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("--");

    const submitfun = async (event) => {
        event.preventDefault();
        try {
            let shopid = "62b1ba0476655fecff2a1d5c";
            const response = await axios.post(host + 'buyer/addbuyer', { name, mobile, address, shopid })
            setname(""); setmobile(""); setaddress("--");
        } catch (error) {
            console.log('error inside add new product', error);
        }
    }

    return (
        <>
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-4' style={{'color':'navy'}}>Add New Buyer</h3>
                    <form className="row g-3" onSubmit={submitfun}>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Name</label>
                            <input required minLength={3} maxLength={16} type="text" className="form-control" id="inputEmail4" placeholder='Enter Buyer Name' onChange={(e)=>{setname(e.target.value)}} value={name}/>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Mobile Number</label>
                            <input required minLength={3} maxLength={10} pattern="[1-9]{1}[0-9]{9}" type="tel"  className="form-control" placeholder="Enter Buyer's Mobile Number" onChange={(e)=>{setmobile(e.target.value)}} value={mobile}/>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Address</label>
                            <input type="text" minLength={3} className="form-control" placeholder="Enter Buyer's Address" onChange={(e)=>{setaddress(e.target.value)}} value={address}/>
                        </div>
                        <div className="col-12 mb-2">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddBuyer;