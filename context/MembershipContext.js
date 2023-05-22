import { createContext, useState } from 'react';
export const MembershipContext = createContext();
export const MembershipProvider = ({ children }) => {
  const membershipInitial = {
    MiddleName: '',
    FirstName: '',
    LastName: '',
    Signature:'',
    CardInfo: '',
    Phone: '',
    Email: '',
    Title: '',

    City: '',
    State: '',
    Country: '',
    Apartment: '',
    PostalCode: '',
    StreetAddress: '',
    MemberhipPlan: 'month',
    
    BillingName: '',
    BillingCity: '',
    BillingState: '',
    BillingCountry: '',
    BillingAddress: '',
    BillingApartment: '',
    BillingPostalCode: '',
  };
  const [membership, setMembership] = useState(membershipInitial);
  return (
    <MembershipContext.Provider
      value={{ membership, setMembership, membershipInitial }}
    >
      {children}
    </MembershipContext.Provider>
  );
};
