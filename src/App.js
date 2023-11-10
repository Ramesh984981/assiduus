import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import CheckingAccount from './Charts/CheckingAccount';
import BarChart from './Charts/Barchart';
import Account from './Charts/Account';
import Invoice from './Charts/Invoice';

 
 const App = () => {
 return (
  <div>
    <Navbar/>
    <div className='charts'>
    <Sidebar/>
      <div>
    <CheckingAccount/>  
    <BarChart/>  
    </div>
    <div>
    <Invoice/>
    <Account/> 
    </div>
    </div>   
    
  </div>
  )
}
export default App;