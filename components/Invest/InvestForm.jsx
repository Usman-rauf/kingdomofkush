import React, { useEffect, useState, useContext } from 'react';
import useSweetAlert from "@/assets/plugins/sweetalert2";
import { InvextContext } from '@/context/InvestContext';
import { AppContext } from "@/context/AppProvider";
import PhoneInput from 'react-phone-number-input';
import { Alert } from '@material-tailwind/react';
import axios from 'axios';
export default function InvestForm() {
  const [checked, setChecked] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const { showSuccess, showError } = useSweetAlert();
  const { countryCode, locationList } = useContext(AppContext);
  const { invest, setInvest, InvestInitial } = useContext(InvextContext);
  useEffect(() => {
    const preferredInvests = document.querySelectorAll('.preferredInvest');
    const checkPreferredInvests = [];
    preferredInvests.forEach((checkbox) => {
      if (checkbox.checked) {
        checkPreferredInvests.push(checkbox.value);
      }
    });
    const projectCetegorys = document.querySelectorAll('.projectCetegory');
    const checkedCheckboxes = [];
    projectCetegorys.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCheckboxes.push(checkbox.value);
      }
    });
    setInvest({
      ...invest,
      ProjectCategories: checkedCheckboxes.join(', '),
      InvestmentLocation: checkPreferredInvests.join(', ')
    });
  }, [checked]);

  const InvestmentStartTime = [
    'Immediate',
    '1 week',
    '3 week',
    '4 week'
  ];
  const projectCategories = [
    "Agriculture",
    "Houseing",
    "Clean Water",
    "Healthcare",
    "Education",
    "Infrastructure (including roads)",
    "Power",
    "Communication",
    "Tourism"
  ];
  const InvestorType = [
    "Individual",
    "Business/Corporation"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    axios.post(`/api/invest`, invest).then((res) => {
      showSuccess.fire('Invest Submitted Successfully').then(() => {
        setInvest(InvestInitial);
        document.querySelectorAll("input[type='checkbox']").forEach((checkboxes) => (checkboxes.checked = false));
      });
    }).catch(() => {
      showError.fire('Unable to submit your invest form. Please try again later');
    }).finally(() => setFetching(false));
  };
  return (
    <div className="InvestForm dark:bg-[#161519] sm:py-10">
      <div className="container lg:px-[3rem] mx-auto sm:pt-[3rem] ">
        <form onSubmit={handleSubmit}>
          <div className="grid rounded-md border-l-4 border-[#eaeaea] grid-cols-1 md:grid-cols-2 p-[1rem] dark:bg-[#878688] bg-[#fbfbfb]">
            <div className="w-[95%]">
              <input
                required
                type="text"
                disabled={isFetching}
                className="input-text"
                placeholder="First Name"
                value={invest.FirstName}
                onChange={({ target }) => setInvest({ ...invest, FirstName: target.value })} />
              <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                Name is required..
              </Alert>
            </div>
            <div className="w-[95%]">
              <input
                required
                type="text"
                disabled={isFetching}
                className="input-text"
                placeholder="Last Name"
                value={invest.LastName}
                onChange={({ target }) => setInvest({ ...invest, LastName: target.value })} />
              <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                Name is required..
              </Alert>
            </div>
            <div className="w-[95%] ">
              <PhoneInput
                required
                international
                value={invest.Phone}
                disabled={isFetching}
                className="input-phone"
                defaultCountry={countryCode}
                onChange={(e) => setInvest({ ...invest, Phone: e })}
              />
              <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                Please input required a valid international phone number.
              </Alert>
            </div>
            <div className="w-[95%]">
              <input
                required
                type="email"
                placeholder="Email"
                value={invest.Email}
                className="input-text"
                onChange={({ target }) => setInvest({ ...invest, Email: target.value })}
              />
              <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                Email is required..
              </Alert>
            </div>
          </div>

          <div className="mt-8  dark:bg-[#878688]  rounded-md border-l-4 border-[#eaeaea] p-[1rem] bg-[#fbfbfb]">
            <div className="grid gap-2 md:grid-cols-3">
              <div>
                <label className="input-label-required">
                  Project categories
                </label>
                {projectCategories.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center mb-4">
                    <input
                      value={item}
                      type="checkbox"
                      disabled={isFetching}
                      onChange={() => setChecked(!checked)}
                      className="mr-2 w-4 h-5 projectCetegory accent-black" />
                    <label className="text-[14px]">{item}</label>
                  </div>
                ))}
                <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  This field is required. Please select a value.
                </Alert>
              </div>
              <div>
                <label className="input-label">
                  Investor Type
                </label>
                {InvestorType.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center mb-4">
                    <input
                      required
                      value={item}
                      type="radio"
                      name="invest"
                      disabled={isFetching}
                      className="mr-2 w-5 h-5 accent-black"
                      onChange={({ target }) => setInvest({ ...invest, InvestorType: target.value })}
                    />
                    <label className="text-[14px]">Individual</label>
                  </div>
                ))}
                <Alert className="bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  This field is required. Please select a value.
                </Alert>
              </div>
              <div>
                <label className="input-label-required">
                  Preferred Investment Location
                </label>
                {locationList.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center mb-4">
                    <input
                      value={item.slug}
                      type={'checkbox'}
                      disabled={isFetching}
                      onChange={() => setChecked(!checked)}
                      className="mr-2 w-4 h-5 preferredInvest accent-black" />
                    <label className="text-[14px]">{item.name}</label>
                  </div>
                ))}
                <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  This field is required. Please select a value.
                </Alert>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 items-center gap-4">
              <div className="flex flex-col">
                <label className="input-label-required">
                  Preferred Investment Amount (USD)
                </label>
                <div className="flex">
                  <span className="px-4 pt-3 border-[1px] border-r-0 border-softGray dark:bg-[#3b3b3b] text-softGray">$</span>
                  <input
                    required
                    type={'number'}
                    placeholder="Amount"
                    disabled={isFetching}
                    className="input-text"
                    value={invest.InvestmentAmount}
                    onChange={({ target }) => setInvest({ ...invest, InvestmentAmount: target.value })} />
                </div>
                <Alert className=" bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  This field is required. Please select a value.
                </Alert>
              </div>
              <div className="flex flex-col">
                <label className="input-label-required">
                  Preferred Investment Start Time
                </label>
                <select
                  required
                  disabled={isFetching}
                  className="input-select"
                  value={invest.InvestmentStartTime}
                  onChange={({ target }) => setInvest({ ...invest, InvestmentStartTime: target.value })}>
                  <option defaultValue=''>Preferred Investment Start Time</option>
                  {InvestmentStartTime.map((item) => <option key={item}>{item}</option>)}
                </select>
                <Alert className="bg-[#f9e4e8] invisible text-red text-[12px]  rounded-none py-1 mt-1">
                  This field is required. Please select a value.
                </Alert>
              </div>
            </div>
          </div>
          <div className="mt-5 xl:w-[30%] w-[50%]">
            <button type={isFetching ? 'disabled' : 'submit'} className="btn-submit">
              {isFetching ? 'Submittig...' : 'I am Interested in Investing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
