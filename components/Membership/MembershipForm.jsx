import axios from 'axios';
import { AppContext } from "@/context/AppProvider";
import React, { useContext, useState, useEffect } from 'react';
import { MembershipContext } from '@/context/MembershipContext';
import { CardElement, useElements } from '@stripe/react-stripe-js';
// alart and messages
import 'react-phone-number-input/style.css';
import cityNam from '../../public/city.json';
import stateNam from '../../public/state.json';
import PhoneInput from 'react-phone-number-input';
import countryNam from '../../public/country.json';
import billingCityNam from '../../public/city.json';
import billingStateNam from '../../public/state.json';
import useSweetAlert from '@/assets/plugins/sweetalert2';
import billingCountryNam from '../../public/country.json';

export default function MembershipForm({ setShowMember }) {
  const monthlyPayable = 10;
  const [cities, setCities] = useState('');
  const [states, setStates] = useState('');
  const [isFetching, setFetching] = useState(false);
  const { showError, showSuccess } = useSweetAlert();
  const [billingStates, setBillingStates] = useState('');
  const [billingCities, setBillingCities] = useState('');
  const { countryCode, defaultCountry } = useContext(AppContext);
  const [payableAmount, setPayableAmount] = useState(monthlyPayable);
  const { membership, setMembership, membershipInitial } = useContext(MembershipContext);

  useEffect(() => {
    const handleStates = () => {
      const findCountry = countryNam.find((item) => item.country_name.toLowerCase() === defaultCountry.toLowerCase());
      if (findCountry?.country_name) {
        setMembership({
          ...membership,
          Country: findCountry.country_name,
          BillingCountry: findCountry.country_name
        })
      }
    };
    setTimeout(() => handleStates(), 1000);
  }, [defaultCountry])

  useEffect(() => {
    setPayableAmount(membership.MemberhipPlan === "year" ? (monthlyPayable * 12) : monthlyPayable);
  }, [membership.MemberhipPlan])

  useEffect(() => {
    const handleStates = () => {
      const countryId = countryNam.find((country) => country.country_name.toLowerCase() === membership.Country.toLowerCase());
      const allStates = stateNam.filter((state) => state.country_id == countryId?.country_id);
      setStates(allStates);
    };
    handleStates();
  }, [membership?.Country]);
  useEffect(() => {
    const handleCities = () => {
      const countryId = countryNam.find((country) => country.country_name.toLowerCase() === membership.Country.toLowerCase());
      const allStates = stateNam.filter((state) => state.country_id == countryId?.country_id);
      const stateId = allStates.find((state) => state.state_name === membership?.State);
      const city = cityNam.filter((city) => city.state_id === stateId?.state_id);
      setCities(city);
    };
    handleCities();
  }, [membership?.Country, membership?.State]);
  useEffect(() => {
    const handleStates = () => {
      const countryId = billingCountryNam.find(
        (country) => country.country_name.toLowerCase() === membership.BillingCountry.toLowerCase()
      );
      const allStates = billingStateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );
      setBillingStates(allStates);
    };
    handleStates();
  }, [membership?.BillingCountry]);
  useEffect(() => {
    const handleCities = () => {
      const countryId = billingCountryNam.find((country) => country.country_name.toLowerCase() === membership.BillingCountry.toLowerCase());
      const allStates = billingStateNam.filter((state) => state.country_id == countryId?.country_id);
      const stateId = allStates.find((state) => state.state_name === membership?.BillingState);
      const city = billingCityNam.filter((city) => city.state_id === stateId?.state_id);
      setBillingCities(city);
    };
    handleCities();
  }, [membership?.BillingCountry, membership?.BillingState]);
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFetching(true);
    if (elements.getElement('card') !== null) {
      axios.post(`/api/membership`, membership).then((res) => {
        showSuccess.fire({ text: 'Thanks for to be a part of our membership!' }).then(() => {
          setMembership(membershipInitial);
        });
      }).catch(() => {
        showError.fire({ text: 'Opps! We are currently unable to get request' });
      }).then(() => setFetching(false));
    } else {
      showWarning.fire({ text: `Invalid Card`});
    }
  };

  return (
    <div className="lg:mx-[50px] my-[3rem]">
      <div className="w-full">
        <h1 className="text-[34px] dark:text-white">PERSONAL INFORMATION</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="dark:bg-[#878688] gap-x-8 mb-5 bg-[#fbfbfb] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 ">
            <div>
              <input
                id="name"
                type="text"
                placeholder="Prof."
                disabled={isFetching}
                className="input-text"
                value={membership.Title}
                onChange={(e) =>
                  setMembership({ ...membership, Title: e.target.value })
                }
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <input
                id="fname"
                type="text"
                disabled={isFetching}
                className="input-text"
                value={membership.FirstName}
                placeholder="First (Given) Name"
                onChange={(e) =>
                  setMembership({ ...membership, FirstName: e.target.value })
                }
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <input
                disabled={isFetching}
                type="text"
                placeholder="Middle Name"
                id="mname"
                className="input-text"
                value={membership.MiddleName}
                onChange={(e) =>
                  setMembership({ ...membership, MiddleName: e.target.value })
                }
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <input
                required
                type="text"
                id="lastName"
                disabled={isFetching}
                className="input-text"
                value={membership.LastName}
                placeholder="Family Name (Last) Name"
                onChange={(e) =>
                  setMembership({ ...membership, LastName: e.target.value })
                }
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>

            <div>
              <input
                required
                id="email"
                type="email"
                disabled={isFetching}
                className="input-text"
                value={membership.Email}
                placeholder="E.g. john@doe.com"
                onChange={(e) =>
                  setMembership({ ...membership, Email: e.target.value })
                }
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <PhoneInput
                required
                international
                className="input-phone"
                defaultCountry={countryCode}
                onChange={(e) => setMembership({ ...membership, Phone: e })}
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          </div>

        </div>
        <p className="py-2 mx-2 dark:text-[#ffffffbf]">Current address</p>
        <div className="bg-[#fbfbfb] dark:bg-[#878688] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed] mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 ">
            <div>
              <label
                className="input-label"
                htmlFor="address_1"
              >
                Country
              </label>
              <select
                id="countries"
                disabled={isFetching}
                className="input-select"
                value={membership.Country}
                onChange={(e) => setMembership({ ...membership, Country: e.target.value })}
              >
                <option defaultValue=''>Select country</option>
                {countryNam?.map((country, country_id) => (
                  <option key={country_id} value={country?.country_name}>
                    {country?.country_name}
                  </option>
                ))}
              </select>
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <label
                className="input-label"
                htmlFor="address_1"
              >
                State/Province
              </label>
              <select
                id="state"
                disabled={isFetching}
                value={membership.State}
                className="input-select"
                onChange={(e) => setMembership({ ...membership, State: e.target.value })}>
                <option defaultValue=''>Select State</option>
                {states?.length > 0
                  ? states?.map((state, state_id) => (
                    <option key={state_id} value={state?.state_name}>
                      {state?.state_name}
                    </option>
                  ))
                  : ''}
              </select>
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <label
                className="input-label"
                htmlFor="address_1">
                City
              </label>
              <select
                value={membership.City}
                onChange={(e) =>
                  setMembership({ ...membership, City: e.target.value })
                }
                disabled={isFetching}
                id="city"
                className="input-select"
              >
                <option defaultValue=''>Select City</option>
                {cities?.length > 0
                  ? cities?.map((city, city_id) => (
                    <option key={city_id} value={city?.city_name}>
                      {city?.city_name}
                    </option>
                  ))
                  : ''}
              </select>
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <label
                className="input-label"
                htmlFor="address_1"
              >
                Zip / Postal Code
              </label>
              <input
                type="number"
                disabled={isFetching}
                id="zipcode"
                placeholder="E.g 2000"
                className="input-text"
                value={membership.PostalCode}
                onChange={(e) =>
                  setMembership({ ...membership, PostalCode: e.target.value })
                }
              />
              <p className="text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <label className="input-label" htmlFor="address_1">
                Street Address
              </label>
              <input
                required
                type="text"
                id="address_1"
                disabled={isFetching}
                className="input-text"
                placeholder="E.g 42 Wallaby Way"
                value={membership.StreetAddress}
                onChange={(e) =>
                  setMembership({
                    ...membership,
                    StreetAddress: e.target.value
                  })
                }
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.Please enter the street address.
              </p>
            </div>
            <div>
              <label
                className="input-label"
                htmlFor="address_1"
              >
                Apartment, suite, etc
              </label>
              <input
                disabled={isFetching}
                type="text"
                placeholder="Apertment"
                id="fname"
                className="input-text"
                value={membership.Apartment}
                onChange={(e) =>
                  setMembership({ ...membership, Apartment: e.target.value })
                }
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          </div>
        </div>
        <p className="py-2 mx-2 dark:text-[#ffffffbf]">Billing address</p>
        <div className="bg-[#fbfbfb] dark:bg-[#878688] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed] mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            <div className='col-span-2'>
              <label className="input-label-required" htmlFor="billing_name">
                Name
              </label>
              <input
                required
                type="text"
                id="billing_name"
                disabled={isFetching}
                className="input-text"
                placeholder="E.g. John Doe"
                value={membership.BillingName}
                onChange={(e) => setMembership({ ...membership, BillingName: e.target.value })}
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <label className="input-label" htmlFor="billing_select_country">
                Country
              </label>
              <select
                required
                disabled={isFetching}
                className="input-select"
                id="billing_select_country"
                value={membership.BillingCountry}
                onChange={(e) => setMembership({ ...membership, BillingCountry: e.target.value })}>
                <option defaultValue=''>Select country</option>
                {billingCountryNam?.map((country, country_id) => (
                  <option key={country_id} value={country?.country_name}>
                    {country?.country_name}
                  </option>
                ))}
              </select>
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <label className="input-label" htmlFor="billing_state">
                State/Province
              </label>
              <select
                required
                id="billing_state"
                disabled={isFetching}
                className="input-select"
                value={membership.BillingState}
                onChange={(e) => setMembership({ ...membership, BillingState: e.target.value })}>
                <option defaultValue=''>Select State</option>
                {billingStates?.length > 0 && billingStates?.map((state, state_id) => (
                  <option key={state_id} value={state?.state_name}>
                    {state?.state_name}
                  </option>
                ))}
              </select>
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.Please enter the city.
              </p>
            </div>
            <div>
              <label className="input-label" htmlFor="billing_city">
                City
              </label>
              <select
                id="billing_city"
                className="input-select"
                value={membership.BillingCity}
                onChange={(e) => setMembership({ ...membership, BillingCity: e.target.value })}>
                <option defaultValue=''>Select City</option>
                {billingCities?.length > 0 && billingCities?.map((city, city_id) => (
                  <option key={city_id} value={city?.city_name}>
                    {city?.city_name}
                  </option>
                ))}
              </select>
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.Please enter the city.
              </p>
            </div>
            <div>
              <label className="input-label" htmlFor="billing_zipcode">
                ZIP / Postal Code
              </label>
              <input
                required
                type="number"
                id="billing_zipcode"
                disabled={isFetching}
                placeholder="E.g 2000"
                className="input-text"
                value={membership.BillingPostalCode}
                onChange={(e) => setMembership({ ...membership, BillingPostalCode: e.target.value })}
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.Please enter the city.
              </p>
            </div>
            <div>
              <label className="input-label-required" htmlFor="billing_address_1">
                Street Address
              </label>
              <input
                required
                type="text"
                disabled={isFetching}
                id="billing_address_1"
                className="input-text"
                placeholder="E.g. 42 Wallaby Way"
                value={membership.BillingAddress}
                onChange={(e) => setMembership({ ...membership, BillingAddress: e.target.value })}
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <label className="input-label" htmlFor="billing_address_2">
                Apartment, suite, etc
              </label>
              <input
                required
                type="text"
                disabled={isFetching}
                id="billing_address_2"
                className="input-text"
                value={membership.BillingApartment}
                onChange={(e) => setMembership({ ...membership, BillingApartment: e.target.value })} />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#fbfbfb] dark:bg-[#878688] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed] mb-5">
          <div className="grid grid-cols-1 gap-x-8">
            <div className="">
              <legend className="text-[#777771] pb-1">Membership plan</legend>
              <div className="flex">
                <input
                  id="time1"
                  name="time"
                  type="radio"
                  value="month"
                  className="mr-2 w-5 h-5  accent-black"
                  defaultChecked={membership.MemberhipPlan === "month"}
                  onChange={({ target }) => setMembership({ ...membership, MemberhipPlan: target.value })} />
                <label htmlFor="time1" className="mr-4">Monthly</label>
                <input
                  id="time2"
                  name="time"
                  type="radio"
                  value="year"
                  className="mr-2 w-5 h-5  accent-black"
                  defaultChecked={membership.MemberhipPlan === "year"}
                  onChange={({ target }) => setMembership({ ...membership, MemberhipPlan: target.value })} />
                <label htmlFor="time2">Yearly</label>
              </div>
            </div>
            <div className="pt-4 pb-2">
              <p className="text-[18px] text-[#191f23]">
                Currency Price {payableAmount}$ / {membership.MemberhipPlan}
              </p>
            </div>
            <div className="">
              <CardElement className="input-card" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div>
            <label className="input-label-required">
              Signature
            </label>
            <div>
              <input
                required
                type="text"
                disabled={isFetching}
                className="input-signature"
                value={membership?.Signature}
                placeholder="Enter Your Signature"
                onChange={({ target }) => setMembership({ ...membership, Signature: target.value })}
              />
            </div>
          </div>
          <br />
          <label className="w-full">
            <input type="checkbox" required className="mr-2" /> Yes, I agree with the{' '}
            <span className="text-[#cb9833] cursor-pointer">privacy policy</span>{' '}and{' '}
            <span className="text-[#cb9833] cursor-pointer">terms and conditions</span>
          </label>
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={() => setShowMember(false)} className="btn-submit xl:w-[30%] w-[40%]">
            Previous
          </button>
          <button type={isFetching ? 'button' : 'submit'} className="btn-submit xl:w-[30%] w-[40%]" disabled={isFetching}>
            {isFetching ? 'Loading...' : 'Submit application'}
          </button>
        </div>
      </form>
    </div>
  );
};
