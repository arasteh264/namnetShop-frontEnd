import CompaniesCard from '@/components/cards/CompaniesCard';
import React from 'react';

const cakeBiscuitCompanies = [
  {
    name: "سیرنگ",
    description: "گروه صنایع غذایی سیرنگ، تولیدکننده کیک، کلوچه، ویفر، بیسکویت و ….",
    website: "https://siranggroup.com",
    logo: "https://siranggroup.com/assets/images/%D9%84%D9%88%DA%AF%D9%88%20%D9%81%D8%A7%D8%B1%D8%B3%DB%8C.png",
  },
  {
    name: "درنا",
    description: "گروه کارخانجات صنایع غذایی درنا، بیش از ۵۰ سال تجربه در تولید کیک، کلوچه، بیسکویت و محصولات پودری.",
    website: "http://dorna-co.com",
    logo: "https://dorna-co.com/themedata/images/logo.png",
  },
  {
    name: "شیرین عسل",
    description: "گروه صنایع غذایی شیرین عسل، تولیدکننده بیسکویت، کیک، ویفر، شکلات و محصولات قنادی.",
    website: "https://shirinasal.com",
    logo: "https://logoyab.com/wp-content/uploads/2024/06/Shirin-Asal-Logo-600x600.png",
  },
  {
    name: "نوشین",
    description: "شرکت نوشین، از قدیمی‌ترین تولیدکنندگان کلوچه و کیک در ایران؛ شعبه لاهیجان.",
    website: "https://noosheen.ir",
    logo: "https://noosheen.ir/wp-content/uploads/2021/04/newlogo1.png",
  },
  {
    name: "چلسی (شیرین گندم)",
    description: "برند کیک و کلوچه چلسی متعلق به گروه صنایع غذایی شیرین گندم.",
    website: "https://chelci.co",
    logo: "https://mahyarcake.com/wp-content/uploads/2021/10/mahyar.png",
  },
  {
    name: "لحظه (دنیای شیرین)",
    description: "شرکت صنایع غذایی دنیای شیرین (لحظه)، تولیدکننده کیک اسفنجی، کلوچه و ویفر.",
    website: "https://donyaieshirin.com",
    logo: "https://donyaieshirin.com/wp-content/uploads/2024/08/Logo-Lahza.webp",
  },
];

export default function CompaniesSection() {
  return (
    <section className="w-full  py-8 flex flex-col bg-gray-50 px-4 md:px-45">
        <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-6'>
      {cakeBiscuitCompanies.map((item, index) => (
        <CompaniesCard key={index} Company={item} />
      ))}
      </div>
    </section>
  );
}
