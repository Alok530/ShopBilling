import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const host = 'http://localhost:5000/api/';

function Register() {
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
                    <h3 className='fw-bold mb-4' style={{'color':'navy'}}>Register Here</h3>
                    <form className="row g-3" onSubmit={submitfun}>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Shop Name</label>
                            <input required minLength={3} maxLength={16} type="text" className="form-control" id="inputEmail4" placeholder='Enter Buyer Name' onChange={(e)=>{setname(e.target.value)}} value={name}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputAddress2" className="form-label">Email</label>
                            <input required minLength={3} maxLength={10} pattern="[1-9]{1}[0-9]{9}" type="tel"  className="form-control" placeholder="Enter Email Id" onChange={(e)=>{setmobile(e.target.value)}} value={mobile}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputAddress2" className="form-label">Mobile Number</label>
                            <input required minLength={3} maxLength={10} pattern="[1-9]{1}[0-9]{9}" type="tel"  className="form-control" placeholder="Enter Mobile Number" onChange={(e)=>{setmobile(e.target.value)}} value={mobile}/>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Address</label>
                            <input type="text" minLength={3} className="form-control" placeholder="Enter Buyer's Address" onChange={(e)=>{setaddress(e.target.value)}} value={address}/>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Password</label>
                            <input type="text" minLength={3} className="form-control" placeholder="Enter Buyer's Address" onChange={(e)=>{setaddress(e.target.value)}} value={address}/>
                        </div>
                        <div className="col-12 my-3" style={{'display':'flex','justifyContent':'space-between','alignContent':'center'}}>
                            <button type="submit" className="btn btn-primary">Register</button>
                            <Link className='my-auto' style={{'textDecoration':'none'}} to={'/login'}><p className='my-auto fw-bold'>Login?</p></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;