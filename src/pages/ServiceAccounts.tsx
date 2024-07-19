import React from 'react';
import { useLocation } from 'react-router-dom';
import { Service } from '../types/index';

interface LocationState {
  serviceData: Service[];
}


const ServiceAccounts: React.FC = () => {
  const location = useLocation();
  const { serviceData } = (location.state as LocationState) || { serviceData: [] };

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {serviceData.map(service => (
          <li key={service.id}>
            ID: {service.id}, Name: {service.name}, Address: {service.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceAccounts;