// imports tailwinds styles
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
// imports swiper sliders
import "swiper/swiper-bundle.css";
import "react-phone-number-input/style.css";
// 1. import contxts component
import { MembershipProvider } from "@/context/MembershipContext";
import { VolunteerProvider } from "@/context/VolunteerContext";
import { DonationProvider } from "@/context/DonationContext";
import { PetitionProvider } from "@/context/PetitioContext";
import { ContactProvider } from "@/context/ContactContext";
import { ProjectProvider } from "@/context/ProjectContext";
import { VendorProvider } from "@/context/VendorContext";
import { InvestProvider } from "@/context/InvestContext";
import { AppProvider } from "@/context/AppProvider";
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <ProjectProvider>
          <MembershipProvider>
            <VolunteerProvider>
              <PetitionProvider>
                <VendorProvider>
                  <InvestProvider>
                    <DonationProvider>
                      <ContactProvider>
                        <NextNProgress color="#d39e17" height={4} />
                        <Component {...pageProps} />
                      </ContactProvider>
                    </DonationProvider>
                  </InvestProvider>
                </VendorProvider>
              </PetitionProvider>
            </VolunteerProvider>
          </MembershipProvider>
        </ProjectProvider>
      </AppProvider>
    </SessionProvider>
  );
}
