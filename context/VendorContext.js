export const vendorContext = createContext();
import { createContext, useState } from 'react';
export const VendorProvider = ({ children }) => {
  const vendorInitial = {
    Email: '',
    Phone: '',
    Skills: '',
    CardInfo: '',
    Birthday: '',
    InterestAreas: '',

    City: '',
    State: '',
    Country: '',
    LastName: '',
    FirstName: '',
    PostalCode: '',
    AddressLine1: '',
    AddressLine2: '',

    BillingCity: '',
    BillingState: '',
    BillingCountry: '',
    BillingLastName: '',
    BillingFirstName: '',
    BillingPostalCode: '',
    BillingAdressline1: '',
    BillingAdressline2: '',
  };
  const [vendor, setVendor] = useState(vendorInitial);
  return (
    <vendorContext.Provider value={{ vendor, setVendor, vendorInitial }}>
      {children}
    </vendorContext.Provider>
  );
};
