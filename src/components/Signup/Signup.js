
import React,{ useState } from 'react';
//import {PostData} from '../../services/Postdata';
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
      url: "http://localhost:801/signup.php",
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    }).then(res=>console.log(res.data));    

    history.push({
       pathname:'/login'

    });
    // console.log(response.data.email);
  };
  //   onChange(e)
  //   {
  //     this.setState({[e.target.name]: e.target.value})
  //   }
  // render(){
  return (
    <div className="row small-up-2 medium-up-3 large-up-4">
    <div className="column">
      <h2>Registration page</h2>
      <label>name</label>
      <input type="text" name="name" placeholder="name" onChange={onChange1}/>
      <label>email</label>
      <input type="text" name="email" placeholder="email" onChange={onChange1}/>
      <label>Password</label>
      <input type="password" name="password" placeholder="password" onChange={onChange1}/>
      <input type="submit" value="Register" className="button" onClick={Signup}/>
    </div>
    </div>
  );
};

export default Signup;
