import CompaniesCard from '@/components/cards/CompaniesCard';
import React from 'react';

const cakeBiscuitCompanies = [
  {
    name: "سان استار",
    description: "گروه صنایع غذایی سیرنگ، تولیدکننده کیک، کلوچه، ویفر، بیسکویت و ….",
    website: "https://siranggroup.com",
    logo: "https://sunstarjuice.ir/fa/wp-content/uploads/2019/12/logo-EN-01-66p.png",
  },
  {
    name: "تک گل",
    description: "گروه کارخانجات صنایع غذایی درنا، بیش از ۵۰ سال تجربه در تولید کیک، کلوچه، بیسکویت و محصولات پودری.",
    website: "http://dorna-co.com",
    logo: "https://dorna-co.com/themedata/images/logo.png",
  },
  {
    name: "به آمد",
    description: "گروه صنایع غذایی شیرین عسل، تولیدکننده بیسکویت، کیک، ویفر، شکلات و محصولات قنادی.",
    website: "https://shirinasal.com",
    logo: "https://behamadco.com/module/menu/1639159687/file/logo-behamad.png",
  },
  {
    name: "گلشن",
    description: "شرکت نوشین، از قدیمی‌ترین تولیدکنندگان کلوچه و کیک در ایران؛ شعبه لاهیجان.",
    website: "https://noosheen.ir",
    logo: "http://www.golshanjuice.ir/template/default/fa/images/logo.png",
  },

  {
    name: "رانی",
    description: "شرکت صنایع غذایی دنیای شیرین (لحظه)، تولیدکننده کیک اسفنجی، کلوچه و ویفر.",
    website: "https://donyaieshirin.com",
    logo: "https://ranimania.com/wp-content/uploads/2023/09/Rani_LogoX96.webp",
  },
];

export default function FruitJuiceCompanySection() {
  return (
    <section className="w-full  py-8 flex flex-col bg-gray-50 px-4 md:px-45">
      <span className='text-center text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>محصولات نوشیدنی و ابمیوه</span>
      <div className="flex flex-wrap justify-center gap-4 p-6">
      {cakeBiscuitCompanies.map((item, index) => (
        <CompaniesCard key={index} Company={item} />
      ))}
      </div>
    </section>
  );
}
