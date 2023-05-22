import { contactContext } from '@/context/ContactContext';
import useSweetAlert from '@/assets/plugins/sweetalert2';
import { AppContext } from "@/context/AppProvider";
import PhoneInput from 'react-phone-number-input';
import { useContext, useState } from 'react';
import axios from 'axios';
export default function ContactForm() {
  const { countryCode } = useContext(AppContext);
  const { showSuccess, showError } = useSweetAlert();
  const [isFetching, setFetching] = useState(false);
  const { contact, setContact, contactInitial } = useContext(contactContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    axios.post(`/api/contact`, contact).then(({ data }) => {
      showSuccess.fire(data.status).then(() => {
        setContact(contactInitial);
      });
    }).catch(() => {
      showError.fire('Opps! We are currently unable to get request');
    }).finally(() => setFetching(false));
  };
  return (
    <div className="dark:bg-[#161519] dark:text-[#ffffffbf]">
      <div
        className="lg:py-8 p-2 container mx-auto scroll-smooth transition-all duration-200" id="contact">
        <form
          name="contactForm"
          onSubmit={handleSubmit}
          className="px-5 lg:px-20">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div>
              <label className="input-label" htmlFor="name">
                Name
              </label>
              <input
                required
                id="name"
                type="text"
                value={contact.Name}
                disabled={isFetching}
                className="input-text"
                placeholder="Your name"
                onChange={(e) => setContact({ ...contact, Name: e.target.value })}
              />
            </div>
            <div>
              <label className="input-label" htmlFor="phone">
                Phone
              </label>
              <PhoneInput
                required
                id="phone"
                international
                value={contact.Phone}
                disabled={isFetching}
                className="input-phone"
                defaultCountry={countryCode}
                onChange={(e) => setContact({ ...contact, Phone: e })} />
              <p className="invisible text-sm mt-[1px] text-red">
                This field is required.
              </p>
            </div>
            <div>
              <label className="input-label" htmlFor="name">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                value={contact.Email}
                disabled={isFetching}
                className="input-text"
                placeholder="Your Working Email"
                onChange={(e) => setContact({ ...contact, Email: e.target.value })}
              />
            </div>
          </div>
          <div className="my-5">
            <label className="input-label" htmlFor="message">
              Message
            </label>
            <textarea
              required
              id='message'
              disabled={isFetching}
              className="input-text"
              value={contact.Message}
              placeholder="Enter your message"
              onChange={(e) => setContact({ ...contact, Message: e.target.value })}
            />
          </div>
          <div className="mt-5 xl:w-[30%] w-[50%]">
            <button type={isFetching ? 'disabled' : 'submit'} className="btn-submit">
              {isFetching ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
