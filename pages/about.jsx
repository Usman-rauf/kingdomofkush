import React from "react";
import Layout from "@/components/Layout";
import FlagLang from '@/components/About/FlagLang';
import MoreInfo from '@/components/About/MoreInfo';
import BasicInfo from '@/components/About/BasicInfo';
import Ourservice from '@/components/About/Ourservice';
import ExecutiveBranch from '@/components/About/ExecutiveBranch';
export default function about() {
  return (
    <Layout title={"About Us"}>
      <BasicInfo
        isOdd={true}
        data={{
          banner: 'https://kingdomofkush.org/images/2022/12/oh__img150-1.jpg',
          title: 'Basic Information',
          count: 2060,
          info: [
            {
              key: 'Official Name',
              value: 'Kingdom of kush'
            },
            {
              key: 'Coat of Arms',
              value: ''
            },
            {
              key: 'Head of State',
              value: 'Queen Mother Dr/Delois Blakely'
            },
            {
              key: 'Religion',
              value:
                'Islam, Chrishtianity, Judaism, African Traditional Believes'
            }
          ]
        }}
      />
      <MoreInfo
        isOdd={false}
        data={{
          banner: 'https://kingdomofkush.org/images/2022/12/oh__img150-1.jpg',
          title: 'More Information',
          info: [
            {
              key: 'Short Name',
              value: 'Kush'
            },
            {
              key: 'Motto',
              value: 'Together we prosper. The future is now'
            },
            {
              key: 'Area',
              value: '2,060 km2'
            },
            {
              key: 'Founder',
              value: 'Citizens of the world'
            },
            {
              key: 'Time Zone',
              value: 'GMT +2'
            }
          ]
        }}
      />
      <FlagLang
        isOdd={true}
        data={{
          banner: 'https://kingdomofkush.org/images/2022/12/oh__img150-1.jpg',
          title: 'Flag & Languages',
          count: 2060,
          info: [
            {
              key: 'Flag',
              value: ''
            },
            {
              key: 'National Anthem',
              value: 'Kush National Anthem'
            },
            {
              key: 'Official Language',
              value: 'Nubian, Arabic, English, French'
            },
            {
              key: 'Form of Government',
              value: 'Constitutional Monarchy'
            }
          ]
        }}
      />
      <ExecutiveBranch />
      <Ourservice />
    </Layout>
  );
}
