import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useContext } from "react";
import { contactContext } from "@/context/ContactContext";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { time, setTime } = useContext(contactContext);
  const elements = useElements();
  const stripe = useStripe();
  const createSubscription = async () => {
    try {
      if (elements.getElement("card") === null) return;
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card"),
      });
      const res = await fetch(`/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          time,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });

      if (!res.ok) return alert("Payment unsuccessfull!");

      const data = await res.json();

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(`${data.clientSecret.client_secret}`, {
          payment_method: {
            type: "card",
            card: elements.getElement("card"),
            billig_details: {
              name: "rabbi",
              email: email,
            },
          },
        });

      if (confirm.error) return alert("Payment unsuccessfull!");
      alert("Payment successfull! Subscripton active");
    } catch (err) {
      console.error(err);
      alert("Payment Faild!" + err.message);
    }
  };

  return (
    <div className=" w-[40%]">
      Name :
      <input
        type="text"
        value={name}
        className="border-2 p-2 mb-2"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email :
      <input
        type="Email"
        value={email}
        className="border-2 p-2 mb-4"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="cars">Choose Subscription</label>
      <select
        id="cars"
        name="cars"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="month">monthly</option>
        <option value="year">yearly</option>
      </select>
      <br />
      <CardElement />
      <button onClick={createSubscription}>Subscribe</button>
    </div>
  );
}

export default PaymentForm;
