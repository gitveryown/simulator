import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from './sidebar/Sidebar';
import BusinessAccount from './pages/BusinessAccount';
import ServiceAccounts from './pages/ServiceAccounts';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/business-account' element={<BusinessAccount />}/>
          <Route path='/service-accounts' element={<ServiceAccounts serviceData={[]} />}/>
          <Route path='/orders' element={<Orders />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
