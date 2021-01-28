import React,{ useState } from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

import './Login.css'
const Login=()=>{
  const initialState = {
    email: "",
    password: "",
  };
  const history=useHistory();
  const [user, setUser] = useState(initialState);
   const onChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const login = async () => {
    var formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    var test = user.email;
    localStorage.setItem("email",test);
    localStorage.setItem("test", JSON.stringify(test)); 
    var testify=user.password;
    localStorage.setItem("testify",JSON.stringify(testify));
   const response = await axios({
      url: "http://localhost:801/login.php",
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
  //  console.log(response.data);
   // console.log(response.data.status);
      if(response.data==="failure")
      {

      }
      else{
      const  fData=new FormData();
      fData.append("email",user.email);
      const allImages = await axios({
        url: "http://localhost:801/retreive.php",
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: fData,
      });
      console.log(allImages);
       history.push({
       pathname: "/upload",
       state :{
           images: allImages.data,
       }
      });
    }
  };
  return (
   
    <div className="row small-up-2 medium-up-3 large-up-4">
    <div className="column">
        <h2>Login page</h2>
        {/* <label>Username</label>
        <input type="text" name="name" placeholder="name" onChange={this.onChange}/> */}
      <label>Email</label>
      <input type="text" name="email" placeholder="email" onChange={onChange}/>
      <label>Password</label>
      <input type="password" name="password" placeholder="password"  onChange={onChange}/>
      <input type="submit" value="login" className="button" onClick={login}/>
    </div>
    </div>

  );
};

export default Login;
