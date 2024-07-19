import React, { useState } from 'react';
import accounts from '../data/accounts.json'; 
import {Service} from  '../types/index'
import ServiceAccounts from './ServiceAccounts';

const BusinessAccount = () => {
  const [businessId, setBusinessId] = useState<string>('');
  const [services, setServices] =useState<Service[]>([]);

  const handleFetchServices = () => {
    const business = accounts.find(account => account.businessId === businessId);
    if (business) {
      setServices(business.services);
    } else {
      setServices([]);
    }
  };

  return (
    <div>
      <label htmlFor="label">Business Account</label>
      <input
        type="text"
        value={businessId}
        onChange={e => setBusinessId(e.target.value)}
        placeholder="Enter Business ID"
      />
      <button onClick={handleFetchServices}>Next</button>
      <ServiceAccounts serviceData={services} />
    </div>
  );
};

export default BusinessAccount;