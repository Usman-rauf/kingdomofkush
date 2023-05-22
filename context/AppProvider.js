import { ThemeProvider } from "next-themes";
import { useSlug } from "@/assets/plugins/helpers";
import { createContext, useState, useEffect } from "react";
import { osName, browserName, fullBrowserVersion } from "react-device-detect";

import os from 'os';

import axios from "axios";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [defaultCountry, setDefaultCountry] = useState('');
    const [openSidebar, setOpenSidebar] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [ip, setIp] = useState('');

    const ipAddress = Object.values(os.networkInterfaces())
    .flat()
    .filter((iface) => iface.family === 'IPv4' && !iface.internal)
    .map((iface) => iface.address)
    .shift();
    const locationList = [
        {
            name: "Kingdom of kush",
            slug: useSlug("Kingdom of kush")
        },
        {
            name: "Benin",
            slug: useSlug("Benin")
        },
        {
            name: "Burkina Faso",
            slug: useSlug("Burkina Faso")
        },
        {
            name: "DRC",
            slug: useSlug("DRC")
        },
        {
            name: "Guinea",
            slug: useSlug("Guinea")
        },
        {
            name: "Indonesia",
            slug: useSlug("Indonesia")
        },
        {
            name: "Ivory Coast",
            slug: useSlug("Ivory Coast")
        },
        {
            name: "Mali",
            slug: useSlug("Mali")
        },
        {
            name: "Nigeria",
            slug: useSlug("Nigeria")
        },
        {
            name: "Sudan",
            slug: useSlug("Sudan")
        },
        {
            name: "Togo",
            slug: useSlug("Togo")
        },
        {
            name: "Zimbabwe",
            slug: useSlug("Zimbabwe")
        },
    ];

    useEffect(() => {
        if (!countryCode) {
            axios.get(`https://api.ipify.org/?format=json`).then(({ data }) => {
                setIp(data.ip);
                axios.get(`https://ipapi.co/${data.ip}/json/`).then(({ data }) => {
                    setCountryCode(data?.country_code);
                    setDefaultCountry(data?.country_name);
                }).catch(() => {
                    console.log('Unable defined device info')
                });
            }).catch(() => {
                console.log('Unable defined ip')
            })
        }
    });
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <AppContext.Provider value={{
                fullBrowserVersion,
                setOpenSidebar,
                defaultCountry,
                locationList,
                countryCode,
                browserName,
                openSidebar,
                osName,
                ip,
                ipAddress
            }}>
                {children}
            </AppContext.Provider>
        </ThemeProvider>
    )
};
