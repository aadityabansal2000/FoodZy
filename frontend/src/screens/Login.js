import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Login() {
  const [x, setx] = useState({ name: "", email: "", password: "", geolocation: "" })
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: x.email, password: x.password })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if (json.success) {
      localStorage.setItem("userEmail",x.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  }
  const onChange = (event) => {
    setx({ ...x, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <div className="bg-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <h1 style={{textAlign:"center",paddingTop:"100px"}}>Login</h1>
      <div className='container' style={{width:"500px",height:"300px",marginTop:"50px",border:"2px solid white",borderRadius:"10px",zIndex:"500"}}>
      
        <form onSubmit={handleSubmit}>

          <div className="mb-3" style={{marginTop:"15px"}}>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={x.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={x.password} onChange={onChange} id="exampleInputPassword1" />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>I am a new user</Link>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
