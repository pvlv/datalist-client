import { createContext } from 'react';
import { api } from './Api';

const defaultServices = {
  api
};
const ServiceContext = createContext(defaultServices);

export { ServiceContext, defaultServices };
