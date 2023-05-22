import { createContext, useState } from 'react';
export const InvextContext = createContext();
export const InvestProvider = ({ children }) => {
  const InvestInitial = {
    InvestmentStartTime: '1-Week',
    InvestorType: 'Individual',
    InvestmentLocation: '',
    ProjectCategories: '',
    InvestmentAmount: '',
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
  };
  const [invest, setInvest] = useState(InvestInitial);
  return (
    <InvextContext.Provider value={{ invest, setInvest, InvestInitial }}>
      {children}
    </InvextContext.Provider>
  );
};
