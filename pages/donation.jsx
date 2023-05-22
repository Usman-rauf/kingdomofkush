import React from "react";
import Layout from "@/components/Layout";
import DonationHero from "@/components/Donation/DonationHero";
import DonationService from "@/components/Donation/DonationService";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// connect stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function donation() {
  return (
    <Layout title={"Donation"}>
      <Elements stripe={stripePromise}>
        <DonationHero />
        </Elements>
      <DonationService />
    </Layout>
  );
}
