import React, {useState} from 'react'
import {Link} from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");


    function submitHandler(e){
        e.preventDefault();
        fetch(`http://localhost:400/register`, {
            method :"POST",
            headers :{
                "Content-Type" : "application-json",
            },
            body : JSON.stringify({
                username, password
            }),
        })
        // console.log(e, "Request made");
        
    } ;
    return (
      <div>
        <h1>Register!!</h1>
        <form onSubmit={submitHandler}>
          <input
            label="Username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            label="Password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <button>Register</button>
        </form>
        <Link exact to="/">
          <button type="submit">Go to Home</button>
        </Link>
      </div>
    );
}
