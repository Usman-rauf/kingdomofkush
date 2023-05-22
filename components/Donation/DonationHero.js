// stripe related import
import axios from 'axios';
import CountUp from 'react-countup';
import { CgPathCrop } from 'react-icons/cg';
import { BiShapePolygon } from 'react-icons/bi';
import PhoneInput from 'react-phone-number-input';
import { AppContext } from "@/context/AppProvider";
import { useState, useContext, useEffect } from 'react';
import useSweetAlert from '@/assets/plugins/sweetalert2';
import { DonationContext } from '@/context/DonationContext';
import img from '@/assets/images/donation/donationHero.jpg';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

export default function DonationHero() {
    const stripe = useStripe();
    const elements = useElements();
    const { countryCode } = useContext(AppContext);
    const [isCustom, setIsCustom] = useState(false);
    const { showSuccess, showError } = useSweetAlert();
    const [isFetching, setFetching] = useState(false);
    const [currentPackage, setCurrentPackage] = useState(0);

    const [amountIndex, setAmountIndex] = useState(0);
    const { donation, setDonation, donationInitial, postDonation } = useContext(DonationContext);
    const styling = {
        backgroundImage: `url('${img.src}')`,
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
    };
    const amountList = [2, 10, 15, 25, 50, 75, 100];
    const handleAmount = (amount, index) => {
        if (index !== -1) {
            setIsCustom(false);
            setAmountIndex(index);
            setDonation({ ...donation, Amount: amount });
            return;
        }
        setAmountIndex(-1);
        setIsCustom(true);
    }
    useEffect(() => {
        setDonation({ ...donation, Frequency: currentPackage ? 'one-time' : 'monthly' });
    }, [currentPackage]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (elements.getElement('card') != null) {
            const { paymentMethod, error } = await stripe.createPaymentMethod({
                card: elements.getElement('card'),
                type: 'card',
            });
            if (error) {
                showError.fire({ title: 'Invalid card' });
                return;
            }
            axios.post('/api/donation', { ...donation, PaymentId: paymentMethod.id }).then(({ data }) => {
                showSuccess.fire(data.status);
            }).catch((err) => {
                showError.fire('We are unable to received this request');
            }).finally(() => setFetching(false))
        } else {
            showError.fire({ title: 'Please provide a valid card' })
        }
    };
    return (
        <div className="dark:bg-[#161519]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between">
                <div className="donation-left w-full lg:col-span-1 lg:pt-0 pt-52 flex items-end justify-end"
                    style={styling}>
                    <div
                        className="bg-black p-5 text-white w-full lg:w-[35rem] ml-auto flex items-center justify-center lg:justify-between">
                        <div className="flex flex-col items-end justify-center">
                            <div className="flex items-center gap-2 p-3">
                                <CgPathCrop size={42} />
                                <div className="font-bold text-[3rem] text-primary">
                                    <CountUp
                                        end={20}
                                        start={0}
                                        duration={5}
                                        separator=","
                                        decimal=","
                                    />
                                    +
                                </div>
                            </div>
                            <p className="text-primary">years in the making</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center gap-2 p-3">
                                <BiShapePolygon size={42} />
                                <div className="font-bold text-[3rem] text-primary">
                                    <CountUp
                                        start={0}
                                        end={3000}
                                        duration={5}
                                        separator=","
                                        decimal=","
                                    />
                                    +
                                </div>
                            </div>
                            <p className="text-primary">years of history</p>
                        </div>
                    </div>
                </div>

                <div className="donation-right w-full dark:text-[#ffffffbf] lg:col-span-1">
                    <div className="p-5">
                        <div>
                            <h3 className="uppercase">kingdom of kush</h3>
                            <h1 className="font-bold dark:text-white text-[3rem]">Donations</h1>
                            <div className="amount">
                                <label className="input-label">Donation amount</label>
                                <div
                                    className="amount-box-container flex flex-wrap  gap-3 items-center justify-center lg:justify-start">
                                    {amountList.map((item, index) => (
                                        <button key={index}
                                            className={`py-2 shadow-md rounded-sm border border-softGray hover:border-link transition-all duration-200 px-3  ${amountIndex === index ? 'bg-gray text-primary' : 'bg-white text-gray'}`}
                                            onClick={() => handleAmount(item, index)}>
                                            <p className="font-bold text-sm">$ {item}</p>
                                        </button>
                                    ))}
                                    {!isCustom ? <button
                                        className={`py-2 shadow-md rounded-sm border border-softGray hover:border-link transition-all duration-200 px-3  bg-white text-gray`}
                                        onClick={() => handleAmount(0, -1)}>
                                        <p className="font-bold text-sm">Others</p>
                                    </button> : <div className="custom-box">
                                        <div
                                            className="flex shadow-sm rounded-sm bg-softGray focus:border-link">
                                            <span className="px-4 py-1.5 dark:bg-[#3b3b3b] text-softGray">$</span>
                                            <input
                                                type="number"
                                                value={donation.Amount}
                                                className="px-4 py-1.5 w-[6rem] bg-white transition-all duration-200 dark:text-black"
                                                onChange={(e) => setDonation({
                                                    ...donation,
                                                    Amount: Number(e.target.value)
                                                })} />
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <h1 className="input-label">
                                Donation frequency
                            </h1>
                            <div className="packages flex items-center justify-center font-bold">
                                {['one-time', 'monthly'].map((item, index) => (
                                    <button key={index}
                                        className={`w-full border-softGray py-2 rounded-l-sm shadow-md border  ${currentPackage === index ? 'bg-gray dark:bg-white dark:text-black text-primary' : ''}`}
                                        onClick={() => setCurrentPackage(index)}>
                                        <span className="uppercase">{item}</span>
                                    </button>
                                ))}
                            </div>
                            <form className="my-3" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="input-label-required">
                                        E-mail address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        disabled={isFetching}
                                        value={donation.Email}
                                        className="input-text"
                                        onChange={(e) =>
                                            setDonation({ ...donation, Email: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="mobile" className="input-label-required">
                                        Phone
                                    </label>
                                    <PhoneInput
                                        required
                                        international
                                        value={donation.Phone}
                                        className="input-phone"
                                        defaultCountry={countryCode}
                                        onChange={(e) => setDonation({ ...donation, Phone: e })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="name" className="input-label-required">
                                        Cardholder’s name
                                    </label>
                                    <input
                                        required
                                        id="name"
                                        type="text"
                                        value={donation.Name}
                                        disabled={isFetching}
                                        className="input-text"
                                        onChange={(e) =>
                                            setDonation({ ...donation, Name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="input-label-required">
                                        Card info
                                    </label>
                                    <CardElement className="input-card" />
                                </div>
                                <div className="xl:w-[30%] w-[50%]">
                                    <button className="btn-submit" disabled={isFetching}>
                                        {isFetching ? 'Loading...' : 'Donate'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
