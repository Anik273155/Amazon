import React,{useState} from 'react';
import "./css/Login.css";
import {Link,useNavigate} from "react-router-dom";
import {auth} from "../firebase";

import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

function Login(){
    const navigate=useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState("");
    const signIn=async(e)=>{
        e.preventDefault();
        try{
         const user=signInWithEmailAndPassword(auth,email,password);
         console.log(user);
         if(auth){
            navigate("/");

         }
        }catch(error){
            alert(error.message);

        }
    }
    const resister=async (e)=>{
        e.preventDefault();
        try{
     const user=await createUserWithEmailAndPassword(auth,email,password );
     alert(" Resistration successful");
     console.log(user);
        }catch(error)   {
            alert(error.message);
        }
      
    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo"src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"alt="logo"/>
            </Link>
       <div className="login_container">
       <form>
        <h1>Sign in</h1>
        <h5>E-mail</h5>
        <input type="text"value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <h5>Password</h5>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </form>
        <button onClick={signIn} type="submit"className="login_signInButton">Sign In</button>
       <p>
        @By signing-in you agree to Amazon conditions of Use & Sale .
        
        Please see our Privacy Notice and out Interest -Based Ads Notice .
       </p>
       <button onClick={resister}className="login_resisterButton">Create your Amazon account</button>
       </div>
        
       </div>
       
    )
}
export default Login;