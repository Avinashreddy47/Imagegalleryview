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
  const signup=async()=>{
   
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
      url: "http://localhost:8010/Desktop/react-proj/public/php-login-registration-api/login.php",
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
  console.log(response.data[12]);
      if(response.data[12]==="f")
      {
        history.push('/');
        
      }
      else{
      const  fData=new FormData();
      fData.append("email",user.email);
      const allImages = await axios({
        url: "http://localhost:8010/Desktop/react-proj/public/php-login-registration-api/retreive.php",
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: fData,
      });
     // console.log(allImages);
     localStorage.setItem('allImages',JSON.stringify(allImages.data));
       history.push({
       pathname: "/upload",
       state :{
           images: allImages.data,
       }
      });
    }
  };
//   const onClickSignIn = () => {
//     history.push("/login");
// }

const onClickSignup = () => {
    history.push("/Signup");
}
  return (
   
    <div className="body"> 
        <h1 className="h1">Gallery view Project</h1>        
        <h1 className="h1">Login page</h1>
        <div className="login">
        {/* <label>Username</label>
        <input type="text" name="name" placeholder="name" onChange={this.onChange}/> */}
      
      {/* <label for="login">Email</label> */}
      Email
      <input id="uname" type="text" name="email" placeholder="email" onChange={onChange}/>
      Password
      <input  id="pass" type="password" name="password" placeholder="password"  onChange={onChange}/>
      <input type="button" id="log"  value="login"  onClick={login}/>
      <input type="button" id="log" value="signup" onClick={onClickSignup}/>
    </div>
    </div>

  );
};

export default Login;
