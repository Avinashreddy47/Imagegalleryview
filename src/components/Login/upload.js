import React, {useState} from 'react';
import {useLocation,  useHistory} from "react-router-dom";
import axios from 'axios';
import './upload.css';
import './Login.js'

const Upload = () => {
    const history=useHistory();
    const location=useLocation();
    const [images,setImages] = useState(location.state.images);
    const [image, setImage] = useState(null);
  
    
    const [sepImage, setSepImage] = useState("");
    //Handlers
    const onsubmit = async () => {
        //form data stores key,values
        var formData = new FormData();
      formData.append("imagefile", image);
    //  formData.append("email",)
      var test = localStorage.getItem("email");
    //  var testify=JSON.parse(localStorage.getItem("testify"));
      formData.append("email", test);
      axios({
        url: "http://localhost:8090/upload",
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        }, data: formData,
      }).then(res=>{
        setImages([
          ...images,res.data,
        ])
      });    
     //console.log(response);
    };
    console.log("recieved images are ",images);
  
    // useEffect(() => {
    // var formData=new FormData();
    //   var test = JSON.parse(localStorage.getItem("test"));
    //   formData.append("email", test);
    //   console.log(test);
    //   axios({
    //     url:'http://localhost:801/retreive.php',
    //     method:"post",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     }, data: formData,
    //   }).then(res=>setarr(res.data))
    //    },   [])
      const logout = () => {
        localStorage.clear();
        history.push("/login");
      };
      
  return (
    <div className="row small-up-2 medium-up-3 large-up-4">
    <div className="result" className="h4">
    <button className="flex"  type="submit" name="logout" placeholder="logout" onClick={logout}><h4>Logout</h4></button>
        <h1>File Upload</h1>
        <input type="file" name="image"
              value={sepImage} onChange={(e) => {
                setSepImage(e.target.value);
                setImage(e.target.files[0]);
              }}/>
        <button type="submit"  onClick={onsubmit}>Upload File</button>
        </div>
        <div className="result">
        {
          images ?
          images.map((im,index)=>(
            <img src={`images/${im}`} alt="Image did not exist" key="index"/> 

            ))
          :
          null
        }
        </div>
        
        </div>
  );
};

export default Upload;
//     render(){
// 	return (
// 		<div className="row small-up-2 medium-up-3 large-up-4">
//     <div className="column">
// 				{/* <input type="file" id="file" multiple onChange={handleImageChange} />
// 				<div className="label-holder">
// 					<label htmlFor="file" className="label">
// 						<i className="material-icons">add_a_photo</i>
// 					</label>
// 				</div>
// 				<div className="result">{renderPhotos(selectedFiles)}</div> */}
//                   <input type='file' name='files[]' multiple />
//                   <input type='submit' value='submit' name='submit' onClick={this.upload}/>

// 			</div>
// 		</div>
//     );
//             }
// };