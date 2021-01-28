import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome1 from '././components/Welcome1/Welcome1';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import Upload from '././components/Login/upload'
const Routes = () =>(

<BrowserRouter>
<Switch>
    <Route exact path='/'  component={Welcome1}/>
     <Route exact path='/Login' component={Login}/>
     <Route exact path='/Signup' component={Signup}/>
     <Route exact path='/upload' component={Upload}/>
     

</Switch>
</BrowserRouter>


);

export default Routes;