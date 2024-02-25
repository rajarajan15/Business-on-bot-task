import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    user_name:"",
    name:"",
    email:"",
    password:""
  });

  const [err, setErr] = useState(null);

  const handleChange = (e)=> {
    setInputs((prev) => ({ ...prev,[e.target.value]:e.target.value}));
  };

  const handleClick = async e => {
    e.preventDefault()

    try{
      await axios.post("http://localhost:8800/api/auth/register",inputs);
    }catch(err){
      setErr(err.response.data);
    }
  
  };


  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Correo.</h1>
          <p>
          Make friends, share interests, and join communities easily. 
          share photos/videos, and find local events in a safe environment.
          </p>
          <span>Already an user?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="user_name" onChange={handleChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
              {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
