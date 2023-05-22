import React from "react";

import Layout from "@/components/Layout";
import JoinPage from "@/components/Contact/JoinPage";
import ContactForm from "@/components/Contact/ContactForm";
import EmailSection from "@/components/Contact/EmailSection";
import BannerSection from "@/components/Contact/BannerSection";

export default function contact() {
  return <Layout title={"Contact Us"}>
    <BannerSection />
    <EmailSection />
    <ContactForm />
    <JoinPage />
  </Layout>;
}
