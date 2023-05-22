import React, { useContext, useState, useEffect } from 'react';
import { VolunteerContext } from '@/context/VolunteerContext';
import useSweetAlert from '@/assets/plugins/sweetalert2';
import countryNam from '../../public/country.json';
import { AppContext } from "@/context/AppProvider";
import PhoneInput from 'react-phone-number-input';
import stateNam from '../../public/state.json';
import cityNam from '../../public/city.json';
import 'react-phone-number-input/style.css';
import axios from 'axios';
export default function VolunteerForm() {
  const [isFetching, setFetching] = useState(false);
  const { countryCode, locationList, defaultCountry } = useContext(AppContext);
  const { volunteer, setVolunteer, volunteerInitial } = useContext(VolunteerContext);
  useEffect(() => {
    const handleStates = () => {
      const findCountry = countryNam.find(
        (item) => item.country_name.toLowerCase() === defaultCountry.toLowerCase()
      );
      if (findCountry?.country_name) {
        setVolunteer({ ...volunteer, Country: findCountry.country_name })
      }
    };
    setTimeout(() => handleStates(), 1000);
  }, [defaultCountry]);
  const { showError, showSuccess } = useSweetAlert();
  const [states, setStates] = useState('');
  const [cities, setCities] = useState('');
  useEffect(() => {
    const handleStates = () => {
      const countryId = countryNam.find((country) => country.country_name.toLowerCase() === volunteer.Country.toLowerCase());
      const allStates = stateNam.filter((state) => state.country_id == countryId?.country_id);
      setStates(allStates);
    };
    handleStates();
  }, [volunteer?.Country]);
  useEffect(() => {
    const handleCities = () => {
      const countryId = countryNam.find((country) => country.country_name.toLowerCase() === volunteer.Country.toLowerCase());
      const allStates = stateNam.filter((state) => state.country_id == countryId?.country_id);
      const stateId = allStates.find((state) => state.state_name === volunteer?.State);
      const city = cityNam.filter((city) => city.state_id == stateId?.state_id);
      setCities(city);
    };
    handleCities();
  }, [volunteer?.Country, volunteer?.State]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFetching(true);
    axios.post('/api/volunteer', volunteer).then(({ data }) => {
      showSuccess.fire('Volunteer form submitted successfully').then(() => {
        setVolunteer(volunteerInitial);
      });
    }).catch(() => {
      showError.fire('Unable to submit volunteer form');
    }).finally(() => setFetching(false));
  };
  return (
    <div className=" container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem] ">
      <div>
        <h1 className=" text-[1.5rem] font-bold mb-4">
          General Information
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className=" grid grid-cols-2 gap-x-8 mb-6">
            <div>
              <label className="input-label-required" htmlFor="name">
                First  Name
              </label>
              <input
                required
                id="name"
                type="text"
                disabled={isFetching}
                value={volunteer.FirstName}
                className=" input-text"
                onChange={(e) =>
                  setVolunteer({ ...volunteer, FirstName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="input-label-required">
                Last Name
              </label>
              <input
                required
                type="text"
                disabled={isFetching}
                className=" input-text"
                value={volunteer.LastName}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, LastName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
            <div>
              <label className="input-label-required" htmlFor="email">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                disabled={isFetching}
                value={volunteer.Email}
                className="input-text"
                onChange={(e) =>
                  setVolunteer({ ...volunteer, Email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="input-label-required" htmlFor="Birthday">
                Date of birth
              </label>
              <input
                required
                type="date"
                id="Birthday"
                disabled={isFetching}
                className="input-text"
                value={volunteer.Birthday}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, Birthday: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="input-label-required"
                htmlFor="phoneNumber">
                Phone number
              </label>
              <PhoneInput
                required
                international
                disabled={isFetching}
                value={volunteer.Phone}
                className="input-phone"
                defaultCountry={countryCode}
                onChange={(e) => setVolunteer({ ...volunteer, Phone: e })}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mt-2">
            <div>
              <label className="input-label-required" htmlFor="address_1">
                Address
              </label>
              <input
                required
                type="text"
                id="address_1"
                disabled={isFetching}
                value={volunteer.AddressLine1}
                className=" input-text"
                onChange={(e) =>
                  setVolunteer({ ...volunteer, AddressLine1: e.target.value })
                }
              />
              <p className="text-sm mt-[.5rem]">Address Line 1</p>
            </div>
          </div>
          <div className=" grid grid-cols-1">
            <div>
              <label className=" invisible  font-bold block" htmlFor="address_2">
                Address
              </label>
              <input
                required
                disabled={isFetching}
                type="text"
                id="address_2"
                className=" input-text"
                value={volunteer.AddressLine2}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, AddressLine2: e.target.value })
                }
              />
              <p className="text-sm mt-[.5rem]">Address Line 2</p>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-x-8">
            <div>
              <label className="invisible font-bold block" htmlFor="address_2">
                Address
              </label>
              <select
                id="countries"
                className=" input-select"
                value={volunteer.Country}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, Country: e.target.value })
                }>
                <option defaultValue=''>Choose a country</option>
                {countryNam?.map((country, country_id) => (
                  <option key={country_id} value={country?.country_name}>
                    {country?.country_name}
                  </option>
                ))}
              </select>
              <p className="  text-sm mt-[.5rem]">Country</p>
            </div>
            <div>
              <label className="invisible font-bold block" htmlFor="address_2">
                Address
              </label>
              <select
                id="address_2"
                value={volunteer.State}
                className=" input-select"
                onChange={(e) => setVolunteer({ ...volunteer, State: e.target.value })}>
                <option defaultValue=''>Select State</option>
                {states?.length > 0 && states?.map((state, state_id) => (
                  <option key={state_id} value={state?.state_name}>
                    {state?.state_name}
                  </option>
                ))}
              </select>
              <p className="text-sm mt-[.5rem]">State / Province / Region</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div>
              <label className="input-label" htmlFor="address_2">
                Address
              </label>
              <select
                id="city"
                value={volunteer.City}
                className=" input-select"
                onChange={(e) => setVolunteer({ ...volunteer, City: e.target.value })}>
                <option defaultValue=''>Select City</option>
                {cities?.length > 0 && cities?.map((city, city_id) => (
                  <option key={city_id} value={city?.city_name}>
                    {city?.city_name}
                  </option>
                ))}
              </select>
              <p className="text-sm mt-[.5rem]">City</p>
            </div>
            <div>
              <label className="invisible font-bold block" htmlFor="address_2">
                Address
              </label>
              <input
                required
                type="number"
                id="postalCode"
                disabled={isFetching}
                className=" input-text"
                value={volunteer.PostalCode}
                onChange={(e) => setVolunteer({ ...volunteer, PostalCode: e.target.value })} />
              <p className="  text-sm mt-[.5rem]">Postal Code</p>
            </div>
          </div>
          <div className=" grid grid-cols-1 mt-8">
            <div>
              <label className="font-bold block" htmlFor="skills">
                Skills
              </label>
              <textarea
              
                rows="3"
                cols="30"
                id="skills"
                name="skills"
                className="input-text"
                value={volunteer.Skills}
                onChange={(e) => setVolunteer({ ...volunteer, Skills: e.target.value })}
              ></textarea>
              <p className="text-sm">
                Please indicate areas to volunteer according to your skills
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8">
            <div>
              <label className="font-bold block" htmlFor="areas">
                Areas of Interest
              </label>
              <textarea
                rows="3"
                cols="30"
                id="areas"
                name="skills"
                className="input-text"
                value={volunteer.InterestAreas}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, InterestAreas: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8">
            <div>
              <label className="  after:content-['*'] after:text-red after:pl-2  font-bold block" htmlFor="address_2">
                Place of Interest
              </label>
              <select
                required
                id="countries"
                value={volunteer.InterestPlace}
                onChange={(e) => setVolunteer({ ...volunteer, InterestPlace: e.target.value })}
                className=" input-select">
                <option defaultValue={volunteer.InterestPlace}> {volunteer.InterestPlace}</option>
                {locationList?.map((item, index) => <option key={index} value={item?.slug} >{item.name}</option>)}
              </select>
            </div>
          </div>
          <div className=" mt-6">
            <h1 className="text-[1.5rem] font-bold mb-4">
              Emergency Information
            </h1>
            <div className=" grid grid-cols-2 gap-x-8 mb-6">
              <div>
                <label className="input-label-required" htmlFor="e_email">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="e_email"
                  disabled={isFetching}
                  className=" input-text"
                  value={volunteer.EmergencyEmail}
                  onChange={(e) => setVolunteer({ ...volunteer, EmergencyEmail: e.target.value })}
                />
                <p className=" text-sm mt-[1px] invisible warningMessage text-red">
                  This field is required.
                </p>
              </div>
              <div>
                <label className="input-label-required" htmlFor="e_phone">
                  Phone
                </label>
                <PhoneInput
                  required
                  international
                  disabled={isFetching}
                  className="input-phone"
                  defaultCountry={countryCode}
                  value={volunteer.EmergencyPhone}
                  onChange={(e) => setVolunteer({ ...volunteer, EmergencyPhone: e })}
                />
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 mt-6">
            <button type={isFetching ? "button" : "submit"} className="btn-submit xl:w-[30%] w-[50%]" disabled={isFetching}>
              {isFetching ? (<span className=" animate-ping">Loading...</span>) : ('Submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
