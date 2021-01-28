
import React from 'react';
import './Header.css'
const Header=props=>{
  return (
    <div className="callout primary" id="header">
      <div className="row column">
          <h1>{props.name} project </h1>
       </div>
       </div>
  );
}

export default Header;
