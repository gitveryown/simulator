import React from 'react';
import { Service } from '../types/index'; 

interface ServicesProps {
  serviceData: Service[];
}

const ServiceAccounts: React.FC<ServicesProps> = ({ serviceData }) => {
  return (
    <div className='page'>
      <h2>Services</h2>
      <ul className='list'>
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