import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import NavbarFront from '../../components/navbarfront/NavbarFront';

const host = 'http://localhost:5000/api/';

function Register() {
    const navigate = useNavigate();

    const [shopname, setshopname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("--");
    const [password, setpassword] = useState("");

    const submitfun = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(host + 'admin/register', { shopname, mobile, address, email,password })
            setshopname(""); setmobile(""); setaddress("--");setpassword("");setemail("");
            window.localStorage.setItem('shopid',response.data._id);
            navigate('/');
        } catch (error) {
            console.log('error inside add new product', error);
        }
    }

    return (
        <>
        {window.localStorage.getItem('shopid')?<Navbar />:<NavbarFront/>}
            <div className="addproductpage">
                <div className="addproduct">
                    <h3 className='fw-bold mb-4' style={{'color':'navy'}}>Register Here</h3>
                    <form className="row g-3" onSubmit={submitfun}>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Shop Name</label>
                            <input required minLength={3} maxLength={16} type="text" className="form-control" id="inputEmail4" placeholder='Enter Shop Name' onChange={(e)=>{setshopname(e.target.value)}} value={shopname}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputAddress2" className="form-label">Email</label>
                            <input required type="email"  className="form-control" placeholder="Enter Email Id" onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputAddress2" className="form-label">Mobile Number</label>
                            <input required minLength={3} maxLength={10} pattern="[1-9]{1}[0-9]{9}" type="tel"  className="form-control" placeholder="Enter Mobile Number" onChange={(e)=>{setmobile(e.target.value)}} value={mobile}/>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Address</label>
                            <input type="text" minLength={3} className="form-control" placeholder="Enter Shop's Address" onChange={(e)=>{setaddress(e.target.value)}} value={address}/>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Password</label>
                            <input type="password" minLength={3} maxLength={10} className="form-control" placeholder="Set password" onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
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