import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import accounts from '../data/accounts.json'; 


const BusinessAccount: React.FC = () => {
  const [businessId, setBusinessId] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
  
    const business = accounts.find(account => account.businessId === businessId);
    if (business) {
      navigate('/service-accounts', { state: { serviceData: business.services } });
    } else {
      navigate('/services-accounts', { state: { serviceData: [] } });
    }
  };

  return (
    <div>
      <label htmlFor='label'> Business Account</label>
      <input
        type="text"
        value={businessId}
        onChange={e => setBusinessId(e.target.value)}
        placeholder="Enter Business ID"
      />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default BusinessAccount;