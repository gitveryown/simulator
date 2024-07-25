import React, { useState } from 'react';
import axios from 'axios';
import { Business, Service } from '../types';
import ServicesAccount from './ServiceAccounts';

const BusinessAccount: React.FC = () => {
  const [businessId, setBusinessId] = useState<string>('');
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFetchServices = async () => {
    try {
      const response = await axios.get<Business[]>('data/accounts.json');
      const data = response.data;
      const businessData = data.find(account => account.businessId === businessId);
      if (businessData) {
        setServices(businessData.services);
        setError(null);
      } else {
        setServices([]);
        setError('No business found with this ID');
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={businessId}
        onChange={e => setBusinessId(e.target.value)}
        placeholder="Enter Business ID"
      />
      <button onClick={handleFetchServices}>Fetch Services</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ServicesAccount services={services} />
    </div>
  );
};

export default BusinessAccount;