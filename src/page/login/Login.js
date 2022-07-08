import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import NavbarFront from '../../components/navbarfront/NavbarFront';

const host = 'http://localhost:5000/api/';

function Login() {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const submitfun = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(host + 'admin/login', { email,password })
            setemail("");setpassword("");
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
                    <h3 className='fw-bold mb-4' style={{'color':'navy'}}>Login Here</h3>
                    <form className="row g-3" onSubmit={submitfun}>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input required type="email" className="form-control" placeholder='Enter Email id' onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                        </div>
                        <div className="col-12 mb-2">
                            <label for="inputAddress2" className="form-label">Password</label>
                            <input required minLength={3} maxLength={10} type="password"  className="form-control" placeholder="Enter Buyer's Mobile Number" onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
                        </div>
                        <div className="col-12 my-3" style={{'display':'flex','justifyContent':'space-between','alignContent':'center'}}>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link className='my-auto' style={{'textDecoration':'none'}} to={'/register'}><p className='my-auto fw-bold'>Register?</p></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;