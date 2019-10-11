import React from 'react';

import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import '../../../node_modules/mdbreact/dist/css/mdb.css';
import {MDBIcon} from 'mdbreact';
import Navbar from '../Navbar/Navbar';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import './App.css';

function App() {
  return (
  	<div>
  		<Navbar/>
		<div className = "authentication">   
	       <Registration/>
	    </div>
	</div>
  );
}

export default App;
