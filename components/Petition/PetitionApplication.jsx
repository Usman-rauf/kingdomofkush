import React, { useState, useEffect, useContext , useRef } from "react";
import { petitionContext } from "@/context/PetitioContext";
import useSweetAlert from "@/assets/plugins/sweetalert2";
import countryNam from "../../public/country.json";
import { AppContext } from "@/context/AppProvider";
import PhoneInput from "react-phone-number-input";
import stateNam from "../../public/state.json";
import cityNam from "../../public/city.json";
import logo from "@/assets/images/logo.png";
import SharePetition from "./SharePetition";
import { useRouter } from 'next/router';
import axios from "axios";

import SignatureCanvas from 'react-signature-canvas';
import os from 'os';



export default function PetitionApplication() {
    const { push } = useRouter();
    const canvasRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [states, setStates] = useState("");
    const [cities, setCities] = useState("");
    const [isFetching, setFetching] = useState(false);
    const { showConfirm, showError } = useSweetAlert();
    const {
        petition,
        setPetition,
        totalSignCount,
        petitionInitial,
        setTotalSignCount
    } = useContext(petitionContext);
    const {
        ip,
        ipAddress,
        osName,
        countryCode,
        browserName,
        defaultCountry,
        fullBrowserVersion,
    } = useContext(AppContext);
    useEffect(() => {
        setPetition({
            ...petition,
            DeviceIp: ip,
            DeviceBrowser: browserName,
            DeviceOperatingSystem: osName,
            DeviceLocation: defaultCountry,
            DeviceBrowserVersion: fullBrowserVersion,
        })
        const handleStates = () => {
            const findCountry = countryNam.find((item) => item.country_name.toLowerCase() === defaultCountry.toLowerCase());
            if (findCountry?.country_name) {
                setPetition({ ...petition, Country: findCountry.country_name })
            }
        };
        setTimeout(() => handleStates(), 1000);
    }, [defaultCountry]);
    useEffect(() => {
        const handleStates = () => {
            const countryId = countryNam.find((country) => country.country_name.toLowerCase() === petition?.Country.toLowerCase());
            const allStates = stateNam.filter((state) => state.country_id === countryId?.country_id);
            setStates(allStates);
        };
        handleStates();
    }, [petition?.Country]);
    useEffect(() => {
        const handleCities = () => {
            const countryId = countryNam.find(
                (country) => country.country_name.toLowerCase() === petition?.Country.toLowerCase()
            );
            const allStates = stateNam.filter(
                (state) => state.country_id === countryId?.country_id
            );
            const stateId = allStates.find(
                (state) => state.state_name === petition?.State
            );
            const city = cityNam.filter(
                (city) => city.state_id === stateId?.state_id
            );
            setCities(city);
        };
        handleCities();
    }, [petition?.Country, petition?.State]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFetching(true);
        axios.post(`/api/petition`, petition).then(() => {
            showConfirm.fire({
                title: 'THANK YOU FOR SUPPORT KINGDOM OF KUSH',
                text: 'TOGETHER WE PROSPER. THE FUTURE IS NOW',
                html: `<b>Are you Like to Donation?</b>`,
                imageAlt: 'kingdom of kush',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                imageUrl: logo.src,
            }).then(async (result) => {
                setTotalSignCount(totalSignCount + 1);
                setPetition(petitionInitial);
                if (result.isConfirmed) {
                    await push('/donation');
                }
                if (result.isDismissed) {
                    setOpen(true);
                }
            }).finally(() => setFetching(false));
        }).catch(() => showError.fire('Unable to submit your petition. Please try again later'))
    };
    return (
        <>
            <div className="dark:bg-[#161519] dark:text-[#ffffffbf]">
                <div className="container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem]">
                    <div>
                        <h1 className="text-[1.5rem] text-center font-bold mb-8 dark:text-white">
                            Add your name to show your support for the campaign for action!
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-x-8 mb-5">
                                <fieldset>
                                    <label className="input-label-required" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="firstName"
                                        disabled={isFetching}
                                        className="input-text"
                                        value={petition?.FirstName}
                                        onChange={({ target }) => setPetition({ ...petition, FirstName: target.value })}
                                    />
                                    <p className=" text-sm mt-[1px] text-red invisible">
                                        This field is required.
                                    </p>
                                </fieldset>
                                <fieldset>
                                    <label className="input-label-required" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="lastName"
                                        disabled={isFetching}
                                        className="input-text"
                                        value={petition?.LastName}
                                        onChange={({ target }) => setPetition({ ...petition, LastName: target.value })}
                                    />
                                </fieldset>
                            </div>
                            <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 mb-5">
                                <fieldset>
                                    <label className="input-label" htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <PhoneInput
                                        id="phone"
                                        international
                                        disabled={isFetching}
                                        className="input-phone"
                                        value={petition?.Phone}
                                        defaultCountry={'US'}
                                        onChange={(e) => setPetition({ ...petition, Phone: e })} />
                                    <p className="invisible text-sm mt-[1px] text-red">
                                        This field is required.
                                    </p>
                                </fieldset>
                                <fieldset>
                                    <label className="input-label-required" htmlFor="Email">
                                        Email Address
                                    </label>
                                    <input
                                        required
                                        id="Email"
                                        type="email"
                                        disabled={isFetching}
                                        className="input-text"
                                        value={petition?.Email}
                                        onChange={({ target }) => setPetition({ ...petition, Email: target.value })}
                                    />
                                    <p className="invisible text-sm mt-[1px] text-red">
                                        This field is required.
                                    </p>
                                </fieldset>
                            </section>
                            <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
                                <fieldset>
                                    <label className="input-label-required" htmlFor="country">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        disabled={isFetching}
                                        className="input-select"
                                        value={petition?.Country}
                                        onChange={({ target }) => setPetition({ ...petition, Country: target.value })}>
                                        <option defaultValue=''>Select country</option>
                                        {countryNam?.map((country, country_id) =>
                                            <option key={country_id} value={country?.country_name}>
                                                {country?.country_name}
                                            </option>
                                        )}
                                    </select>
                                    <p className="text-sm mt-[1px] text-red invisible">
                                        This field is required.
                                    </p>
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="state" className="input-label-required">
                                        State/Province
                                    </label>
                                    <select
                                        required
                                        id="state"
                                        disabled={isFetching}
                                        className="input-select"
                                        value={petition?.State}
                                        onChange={({ target }) => setPetition({ ...petition, State: target.value })}>
                                        <option defaultValue=''>Select State</option>
                                        {states?.length > 0 && states?.map((state, state_id) => (
                                            <option key={state_id} value={state?.state_name}>
                                                {state?.state_name}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="text-sm mt-[1px] text-red invisible">
                                        This field is required.
                                    </p>
                                </fieldset>
                                <fieldset>
                                    <label htmlFor="city" className="input-label-required">
                                        City
                                    </label>
                                    <select
                                        id="city"
                                        required
                                        disabled={isFetching}
                                        className="input-select"
                                        value={petition?.City}
                                        onChange={({ target }) => setPetition({ ...petition, City: target.value })}>
                                        <option defaultValue=''>Select City</option>
                                        {cities?.length > 0 && cities?.map((city, city_id) => (
                                            <option key={city_id} value={city?.city_name}>
                                                {city?.city_name}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="text-sm mt-[1px] text-red invisible">
                                        This field is required.
                                    </p>
                                </fieldset>
                            </section>
                            <section className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-x-8">
                                <fieldset className="col-span-1 md:col-span-3 lg:col-span-7">
                                    <label className="input-label" htmlFor="streetAddress">
                                        Street Address
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="streetAddress"
                                        disabled={isFetching}
                                        className="input-text"
                                        value={petition?.StreetAddress}
                                        onChange={({ target }) => setPetition({ ...petition, StreetAddress: target.value })}
                                    />
                                </fieldset>
                                <fieldset className="col-span-1 md:col-span-3 lg:col-span-2">
                                    <label className="input-label" htmlFor="zipCode">
                                        Zip / Postal Code
                                    </label>
                                    <input
                                        id="zipCode"
                                        type="number"
                                        disabled={isFetching}
                                        value={petition?.PostalCode}
                                        onChange={({ target }) => setPetition({ ...petition, PostalCode: target.value })}
                                        className="input-text"
                                    />
                                    <p className="text-sm mt-[1px] text-red invisible">
                                        This field is required.
                                    </p>
                                </fieldset>
                            </section>
                            <section className="grid grid-cols-1">
                                <fieldset>
                                    <label className="input-label" htmlFor="Comment">
                                        Comment
                                    </label>
                                    <textarea
                                        id="Comment"
                                        disabled={isFetching}
                                        className="input-text"
                                        value={petition?.Comment}
                                        onChange={({ target }) => setPetition({ ...petition, Comment: target.value })}
                                    />
                                </fieldset>
                            </section>
                            <fieldset>
                                <label htmlFor="sig" className="input-label-required">
                                    Signature
                                </label>
                                <input
                                    id="sig"
                                    required
                                    type="text"
                                    disabled={isFetching}
                                    value={petition?.Signature}
                                    className="input-signature"
                                    placeholder="Enter Your Signature"
                                    onChange={({ target }) => setPetition({ ...petition, Signature: target.value })}
                                />
                            </fieldset>
                            <fieldset style={{float:'right', marginTop: '-160px'}}>
                            <label htmlFor="usersig" className="input-label-required">
                                    Text
                                </label>
                            <div className="input-signature" style={{ border: '1px solid black', borderRadius: '5px' }}>
                                <SignatureCanvas 
                                id="usersig"
                                ref={canvasRef}                                 
                                canvasProps={{ width: 600, height: 130 }} 
                                value={petition?.Signaturetext}
                                onChange={({ target }) => setPetition({ ...petition, Signaturetext: target.value })}
                                />
                            </div>
                            </fieldset>
                            
                            <div className="mt-5 xl:w-[30%] w-[50%]">
                                <button type={isFetching ? 'button' : 'submit'} className="btn-submit" disabled={isFetching}>
                                    {isFetching ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <SharePetition open={open} setOpen={setOpen} />
        </>
    );
};
