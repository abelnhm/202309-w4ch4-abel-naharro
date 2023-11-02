import { createContext } from 'react';

export type ContextStructure = {
  isActiveCall: boolean;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  setActiveCall: (phoneNumber: boolean) => void;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
