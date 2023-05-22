import React, { useRef, useState } from 'react';
import 'react-phone-number-input/style.css';
export default function MemberLogin({ setShowMember }) {
  const [isFetching, setFetching] = useState(false);
  const [textSig, setTextSig] = useState('');
  const [email, setEmail] = useState('');
  const testSig = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFetching(true);
    setTimeout(() => {
      setFetching(false);
    }, 1000);
  };
  return (
    <div className="lg:mx-[50px] my-[3rem]">
      <div className="w-full">
        <h1 className="text-[34px] dark:text-white">PERSONAL INFORMATION</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 dark:bg-[#878688] gap-x-8 mb-5 bg-[#fbfbfb] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed]">
          <div>
            <input
              required
              id="email"
              type="email"
              value={email}
              placeholder="email"
              disabled={isFetching}
              className="input-text"
              onChange={(e) => setEmail(e.target.value)} />
            <p className=" text-sm mt-[1px] text-red invisible">
              This field is required.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 dark:bg-[#878688] gap-x-8 mb-5 bg-[#fbfbfb] px-6 py-5 border-l-[6px] rounded-l-2xl border-[#ededed]">
          <div>
            <div>
              <input
                required
                type="text"
                ref={testSig}
                value={textSig}
                disabled={isFetching}
                className="input-signature"
                placeholder="Enter Your Signature"
                onChange={(e) => setTextSig(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={() => setShowMember(false)} className="btn-submit xl:w-[30%] w-[40%]">
            Previous
          </button>
          <button type="submit" className="btn-submit xl:w-[30%] w-[40%]">
            {isFetching ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

