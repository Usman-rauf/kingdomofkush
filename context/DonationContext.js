import { createContext, useState } from 'react';
export const DonationContext = createContext();
export const DonationProvider = ({ children }) => {
  const donationInitial = {
    Frequency: 'one-time',
    PaymentId: '',
    Amount: '2',
    Phone: '',
    Email: '',
    Name: '',
  };
  const [donation, setDonation] = useState(donationInitial);
  return (
    <DonationContext.Provider value={{ donation, setDonation, donationInitial}}>
      {children}
    </DonationContext.Provider>
  );
};
