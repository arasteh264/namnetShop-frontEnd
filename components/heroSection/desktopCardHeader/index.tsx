const data=[
    {title:"انواع کیک",id:1,Feature:"ارزان و اقتصادی",icon:"🍪"},
    {title:"انواع ابمیوه",id:2,Feature:"زیر قیمت کارخانه",icon:"🧃"},
    {title:"تنقلات",id:3,Feature:"متنوع و گسترده",icon:"🌰"},
    {title:"خشکبار",id:4,Feature:"قیمت استثنایی",icon:"🌰"}
]

export default function DesktopCardHeader() {
  return (
    <div className="hidden md:grid grid-cols-2 gap-6 py-25 w-[50%]">
     {data.map((item) => {
  return (
    <div key={item.id} className="max-h-[200px] bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 transform hover:scale-105 transition-all card-hover">
    <div className="text-5xl mb-3">{item.icon}</div>
    <h3 className="text-xl mb-2">{item.title}</h3>
    <p className="text-purple-100">{item.Feature}</p>
  </div>
  );
})}

    </div>
  )
}
