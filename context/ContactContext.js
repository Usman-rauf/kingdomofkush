import { createContext, useState } from 'react';
export const contactContext = createContext();
export const ContactProvider = ({ children }) => {
  const [time, setTime] = useState('month');
  const contactInitial = {
    Name: '',
    Email: '',
    Phone: '',
    Message: ''
  };
  const [contact, setContact] = useState(contactInitial);
  return (
    <contactContext.Provider value={{ contact, setContact, contactInitial, time, setTime }}>
      {children}
    </contactContext.Provider>
  );
};
