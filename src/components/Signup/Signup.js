import React,{ useState } from 'react';
import { useHistory} from 'react-router-dom';
import axios from "axios";
import './Signup.css'
const Signup=()=> {
  const is={
    name:'',
    email:'',
    password:''
  };
  const history= useHistory();
  const[user,setUser]=useState(is);  
  const onChange1=async(e)=>{
  const name=e.target.name;
  const value=e.target.value;
     setUser({...user,[name]:value});
  };
   const Signup=async()=>{
    var formData=new FormData();
    formData.append("name",user.name);
    formData.append("email",user.email);
    formData.append("password",user.password);    
     axios({
      url: "http://localhost:8010/Desktop/react-proj/public/php-login-registration-api/signup.php",
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    });//.then(res=>console.log(res.data));    
  //  console.log(res);
    history.push({
       pathname:'/login'
    });
  };
    const login=async=>
    {

    }
    return(
      <div className="body">
        <h1 className="h1">Gallery view Project</h1>        
        <h1 className="h1">Register page</h1>
      <div className="login">
          <h2>Registration Form</h2>
            Username
            <input type="text"  name="name" placeholder="username" onChange={onChange1}/>
        Email
        <input type="text"  name="email" placeholder="email" onChange={onChange1}/>
        Password
        <input type="password"  name="password" placeholder="password"  onChange={onChange1}/>
        <input type="button" className="button" value="signup" id="log" onClick={Signup}/>
        <input type="button" className="button" value="login" id="log" onClick={login}/>
      </div>
      </div>      
  );
}
export default Signup;
