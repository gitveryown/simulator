export interface Service {
    id: string;
    name: string;
    address: string;
  }
  
  export interface LocationState {
    serviceData: Service[];
  }