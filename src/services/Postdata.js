export function PostData(type, UserData){
    //let l='.php'
    let BaseUrl="http://localhost:80/";
    console.log(type);
    return new Promise((resolve,reject) =>{
        fetch(BaseUrl+type,{
          //  mode: 'no-cors',
            method: 'POST',
            headers: {
                 "Content-Type": "application/json"
            },
        body: JSON.stringify(UserData)
        })
        .then((response)=>response.json()) 
        .then((responseJson)=>{
            resolve(responseJson);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}