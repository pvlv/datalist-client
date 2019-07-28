import { useContext } from 'react';
import { ServiceContext } from '../services';

export function useService() {
  const services = useContext(ServiceContext);

  return services;
}
