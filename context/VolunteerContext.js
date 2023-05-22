import { createContext, useState } from "react";
export const VolunteerContext = createContext();
export const VolunteerProvider = ({ children }) => {
  const volunteerInitial = {
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    City: "",
    State: "",
    Skills: "",
    Country: "",
    Birthday: "",
    PostalCode: "",
    AddressLine2: "",
    AddressLine1: "",
    InterestAreas: "",
    EmergencyEmail: "",
    EmergencyPhone: "",
    InterestPlace: "",
  };
  const [volunteer, setVolunteer] = useState(volunteerInitial);
  return (
    <VolunteerContext.Provider value={{ volunteer, setVolunteer, volunteerInitial }}>
      {children}
    </VolunteerContext.Provider>
  );
};

