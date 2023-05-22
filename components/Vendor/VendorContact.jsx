import cityNam from '../../public/city.json';
import stateNam from '../../public/state.json';
import PhoneInput from 'react-phone-number-input';
import countryNam from '../../public/country.json';
import { AppContext } from "@/context/AppProvider";
import billingCityNam from '../../public/city.json';
import billingStateNam from '../../public/state.json';
import { vendorContext } from '@/context/VendorContext';
import useSweetAlert from '@/assets/plugins/sweetalert2';
import billingCountryNam from '../../public/country.json';
import React, { useEffect, useState, useContext } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

export default function VendorForm() {
  const { showError, showSuccess } = useSweetAlert();
  const [isFetching, setFetching] = useState(false);
  const { countryCode, defaultCountry } = useContext(AppContext);
  const { vendor, setVendor, vendorInitial } = useContext(vendorContext);
  useEffect(() => {
    const handleStates = () => {
      const findCountry = countryNam.find(
        (item) => item.country_name.toLowerCase() === defaultCountry.toLowerCase()
      );
      if (findCountry?.country_name) {
        setVendor({
          ...vendor,
          Country: findCountry.country_name,
          BillingCountry: findCountry.country_name
        })
      }
    };
    setTimeout(() => handleStates(), 1000);
  }, [defaultCountry]);
  const [states, setStates] = useState('');
  const [cities, setCities] = useState('');
  const [billingStates, setBillingStates] = useState('');
  const [billingCities, setBillingCities] = useState('');
  useEffect(() => {
    const handleStates = () => {
      const countryId = countryNam.find((country) => country.country_name.toLowerCase() === vendor.Country.toLowerCase());
      const allStates = stateNam.filter((state) => state.country_id == countryId?.country_id);
      setStates(allStates);
    };
    handleStates();
  }, [vendor?.Country]);
  useEffect(() => {
    const handleCities = () => {
      const countryId = countryNam.find((country) => country.country_name.toLowerCase() === vendor.Country.toLowerCase());
      const allStates = stateNam.filter((state) => state.country_id == countryId?.country_id);
      const stateId = allStates.find((state) => state.state_name === vendor?.State);
      const city = cityNam.filter((city) => city.state_id === stateId?.state_id);
      setCities(city);
    };
    handleCities();
  }, [vendor?.Country, vendor?.State]);
  useEffect(() => {
    const handleStates = () => {
      const countryId = billingCountryNam.find((country) => country.country_name.toLowerCase() === vendor.BillingCountry.toLowerCase());
      const allStates = billingStateNam.filter((state) => state.country_id === countryId?.country_id);
      setBillingStates(allStates);
    };
    handleStates();
  }, [vendor?.BillingCountry]);
  useEffect(() => {
    const handleCities = () => {
      const countryId = billingCountryNam.find((country) => country.country_name.toLowerCase() === vendor.BillingCountry.toLowerCase());
      const allStates = billingStateNam.filter((state) => state.country_id === countryId?.country_id);
      const stateId = allStates.find((state) => state.state_name === vendor?.BillingState);
      const city = billingCityNam.filter((city) => city.state_id === stateId?.state_id);
      setBillingCities(city);
    };
    handleCities();
  }, [vendor?.BillingCountry, vendor?.BillingState]);
  const elements = useElements();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (elements.getElement('card') != null) {
      setFetching(true);
      axios.post('/api/vendor', vendor).then(({ data }) => {
        showSuccess.fire('Submitted successfully').then(() => {
          setVendor(vendorInitial);
        });
      }).catch((err) => {
        showError.fire('Unable to submit this vendor');
      }).finally(() => setFetching(false))
    }
  };
  return (
    <div className=" container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem] ">
      <div>
        <h1 className=" text-[1.5rem] font-bold mb-4">
          General Information
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>

          <div className="bg-[#fbfbfb] dark:bg-[#878688] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed] mb-5">
            <div className=" grid grid-cols-2 gap-x-8 mb-6">
              <div>
                <label className="input-label-required" htmlFor="name">
                  First Name
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  disabled={isFetching}
                  className=" input-text"
                  value={vendor.FirstName}
                  onChange={({ target }) => setVendor({ ...vendor, FirstName: target.value })}
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
                  className="input-text"
                  value={vendor.LastName}
                  onChange={({ target }) => setVendor({ ...vendor, LastName: target.value })} />
              </div>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-x-5">
              <div>
                <label className="input-label-required" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  value={vendor.Email}
                  disabled={isFetching}
                  className="input-text"
                  onChange={({ target }) => setVendor({ ...vendor, Email: target.value })}
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
                  value={vendor.Birthday}
                  onChange={({ target }) => setVendor({ ...vendor, Birthday: target.value })}
                />
              </div>
              <div>
                <label className="input-label-required" htmlFor="phoneNumber">
                  Phone number
                </label>
                <PhoneInput
                  international
                  className="input-phone"
                  defaultCountry={countryCode}
                  onChange={(e) => setVendor({ ...vendor, Phone: e })} />
                <p className=" invisible text-sm mt-[1px] warningMessage text-red">
                  This field is required.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fbfbfb] dark:bg-[#878688] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed] mb-5">
            <div className="grid grid-cols-1">
              <div>
                <label className="font-bold block" htmlFor="address_1">
                  Address
                </label>
                <input
                  type="text"
                  id="address_1"
                  disabled={isFetching}
                  className=" input-text"
                  value={vendor.AddressLine1}
                  onChange={(e) => setVendor({ ...vendor, AddressLine1: e.target.value })}
                />
                <p className="  text-sm mt-[.5rem]">Address Line 1</p>
              </div>
            </div>
            <div className=" grid grid-cols-1">
              <div>
                <label className=" invisible  font-bold block" htmlFor="address_2">
                  Address
                </label>
                <input
                  type="text"
                  id="address_2"
                  disabled={isFetching}
                  className=" input-text"
                  value={vendor.AddressLine2}
                  onChange={(e) => setVendor({ ...vendor, AddressLine2: e.target.value })}
                />
                <p className="text-sm mt-[.5rem]">Address Line 2</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <label className="invisible font-bold block" htmlFor="address_2">
                  Address
                </label>
                <select
                  required
                  id="countries"
                  value={vendor.Country}
                  className="input-select"
                  onChange={(e) => setVendor({ ...vendor, Country: e.target.value })}>
                  <option defaultValue=''>Choose a country</option>
                  {countryNam?.map((country, country_id) => (
                    <option key={country_id} value={country?.country_name}>
                      {country?.country_name}
                    </option>
                  ))}
                </select>
                <p className="text-sm mt-[.5rem]">Country</p>
              </div>
              <div>
                <label className="invisible font-bold block" htmlFor="address_2">
                  Address
                </label>
                <select
                  required
                  id="address_2"
                  value={vendor.State}
                  className="input-select"
                  onChange={(e) => setVendor({ ...vendor, State: e.target.value })}>
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
            <div className="grid grid-cols-2 gap-x-8 mt-2">
              <div>
                <label className="invisible font-bold block" htmlFor="city">
                  Address
                </label>
                <select
                  id="city"
                  value={vendor.City}
                  className=" input-select"
                  onChange={(e) => setVendor({ ...vendor, City: e.target.value })}>
                  <option defaultValue=''>Select City</option>
                  {cities?.length > 0 && cities?.map((city, city_id) => (
                    <option key={city_id} value={city?.city_name}>
                      {city?.city_name}
                    </option>
                  ))}
                </select>
                <p className="  text-sm mt-[.5rem]">City</p>
              </div>
              <div>
                <label className="invisible  font-bold block" htmlFor="postalCode">
                  Address
                </label>
                <input
                  required
                  maxlength="5"
                  type="number"
                  id="postalCode"
                  className="input-text"
                  value={vendor.PostalCode}
                  onChange={(e) => setVendor({ ...vendor, PostalCode: e.target.value })} />
                <p className="text-sm mt-[.5rem]">Postal Code</p>
              </div>
            </div>
          </div>

          <div className="bg-[#fbfbfb] dark:bg-[#878688] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed] mb-5">

            <div className="grid grid-cols-2 gap-x-8 mb-6">
              <div>
                <label className="input-label-required" htmlFor="BillingFirstName">
                  Billing Address
                </label>
                <input
                  required
                  type="text"
                  id="BillingFirstName"
                  className="input-text"
                  value={vendor.BillingFirstName}
                  onChange={(e) => setVendor({ ...vendor, BillingFirstName: e.target.value })}
                />
                <p className="text-sm mt-2 my-2">First</p>
              </div>
              <div>
                <label className="invisible input-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="input-text"
                  value={vendor.BillingLastName}
                  onChange={(e) => setVendor({ ...vendor, BillingLastName: e.target.value })} />
                <p className="text-sm mt-2">Last</p>
              </div>
            </div>

            <div className="grid grid-cols-1 my-2">
              <div>
                <input
                  type="text"
                  id="address_1"
                  className="input-text"
                  value={vendor.BillingAdressline1}
                  onChange={(e) => setVendor({ ...vendor, BillingAdressline1: e.target.value })} />
                <p className="text-sm mt-[.5rem]">Address Line 1</p>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div>
                <input
                  type="text"
                  id="address_1"
                  className="input-text"
                  value={vendor.BillingAdressline2}
                  onChange={(e) => setVendor({ ...vendor, BillingAdressline2: e.target.value })} />
                <p className="text-sm mt-[.5rem]">Address Line 2</p>
              </div>
            </div>

            <div className=" grid grid-cols-2 gap-x-8">
              <div>
                <select
                  id="countries"
                  className="input-select"
                  value={vendor.BillingCountry}
                  onChange={(e) => setVendor({ ...vendor, BillingCountry: e.target.value })}>
                  <option defaultValue=''>Choose a country</option>
                  {billingCountryNam?.map((country, country_id) => (
                    <option key={country_id} value={country?.country_name}>
                      {country?.country_name}
                    </option>
                  ))}
                </select>
                <p className="text-sm mt-[.5rem]">Country</p>
              </div>
              <div>
                <select
                  required
                  id="billing_state"
                  className="input-select"
                  value={vendor.BillingState}
                  onChange={(e) => setVendor({ ...vendor, BillingState: e.target.value })}>
                  <option defaultValue=''>Select State</option>
                  {billingStates?.length > 0 && billingStates?.map((state, state_id) => (
                    <option key={state_id} value={state?.state_name}>
                      {state?.state_name}
                    </option>
                  ))}
                </select>
                <p className="text-sm mt-[.5rem]">State / Province / Region</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 mt-2">
              <div>
                <select
                  id="billing_city"
                  className="input-select"
                  value={vendor.BillingCity}
                  onChange={(e) => setVendor({ ...vendor, BillingCity: e.target.value })}>
                  <option defaultValue=''>Select City</option>
                  {billingCities?.length > 0 && billingCities?.map((city, city_id) => (
                    <option key={city_id} value={city?.city_name}>
                      {city?.city_name}
                    </option>
                  ))}
                </select>
                <p className="text-sm mt-[.5rem]">City</p>
              </div>
              <div>
                <input
                  required
                  type="number"
                  maxlength="5"
                  id="postalCode"
                  className=" input-text"
                  value={vendor.BillingPostalCode}
                  onChange={(e) => setVendor({ ...vendor, BillingPostalCode: e.target.value })}
                />
                <p className="text-sm mt-[.5rem]">Postal Code</p>
              </div>
            </div>
          </div>

          <div className="bg-[#fbfbfb] dark:bg-[#878688] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed] mb-5">
            <div className="grid grid-cols-1 mt-8">
              <div>
                <label className="font-bold block" htmlFor="skills">
                  Skills
                </label>
                <textarea
                  rows="3"
                  cols="30"
                  id="skills"
                  name="skills"
                  value={vendor.Skills}
                  className="input-text"
                  onChange={({ target }) => setVendor({ ...vendor, Skills: target.value })} />
                <p className="  text-sm ">
                  Please indicate areas to vendor according to your skills
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-8">
              <div>
                <label className="   font-bold block" htmlFor="areas">
                  Areas of Interest
                </label>
                <textarea
                  rows="3"
                  cols="30"
                  id="areas"
                  name="skills"
                  className="input-text"
                  value={vendor.InterestAreas}
                  onChange={(e) => setVendor({ ...vendor, InterestAreas: e.target.value })}
                ></textarea>
                <p className="text-base mt-1 ">
                  Please indicate areas of services you wish to provide.
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-1">
              <div className=" my-4">
                <p className="   mt-[.5rem] font-bold">
                  Non-refundable Application Fee{' '}
                </p>
                <p className="text-base ">Price: $ 349.00</p>
              </div>
            </div>
            <div className=" grid grid-cols-1 my-6">
              <label className="input-label-required">
                Cradit Card
              </label>
              <div>
                <CardElement required className="input-card" />
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 mt-6">
            <button type={isFetching ? "button" : "submit"} className="btn-submit xl:w-[30%] w-[50%]" disabled={isFetching}>
              {isFetching ? `Loading...` : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
