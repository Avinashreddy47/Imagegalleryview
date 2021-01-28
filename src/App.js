import React,{ Component } from 'react';
import logo from './logo.svg';
import './styles/foundation.min.css'
import Welcome from './components/Welcome/Welcome'
import Header from './components/Header/Header'
import Welcome1 from './components/Welcome1/Welcome1'
import Routes from './routes.js'
import './styles/custom.css'
class App extends Component{

  constructor(props){
    super(props);
    this.state={
      appName : 'Gallery view'
    }
  }
 render(){
  return (
   
    <div className="off-canvas-wrapper">
    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
      <div className="off-canvas-content" data-off-canvas-content>
        <Welcome name={this.state.appName}/>
         <Header name={this.state.appName}/>
        <Routes />
      
          <hr/>
            {/* <Welcome1/> */}
            
        </div>
        </div>
        </div>
  );
}
}

export default App;
