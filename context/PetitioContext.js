export const petitionContext = createContext();
import { createContext, useState } from 'react';
export const PetitionProvider = ({ children }) => {
  const petitionInitial = {
    City: '',
    Email: '',
    Phone: '',
    State: '',
    Country: '',
    Comment: '',
    LastName: '',
    Signature: '',
    FirstName: '',
    PostalCode: '',
    StreetAddress: '',
    DeviceOperatingSystem: '',
    DeviceBrowserVersion: '',
    DeviceLocation: '',
    DeviceBrowser: '',
    DeviceIp: '',
  };
  const [totalSignCount, setTotalSignCount] = useState(0);
  const [petition, setPetition] = useState(petitionInitial);
  return (
    <petitionContext.Provider value={{
      petition,
      setPetition,
      totalSignCount,
      petitionInitial,
      setTotalSignCount
    }}>
      {children}
    </petitionContext.Provider>
  );
};
