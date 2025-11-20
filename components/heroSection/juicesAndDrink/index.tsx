import ProductCard from "@/components/cards/productCard";
import ProductSlider from "../../ui/productSlider";

const data = [
    {
      id: 1,
      img: "https://dkstatics-public.digikala.com/digikala-products/e845ddd84067a2132856b95652fa48b5a1bae47f_1628667112.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      special: true,
      title: "آب پرتقال طبیعی",
      companyName: "دورنا",
      discountPrice: 25000,
      price: 20000,
      stock: 15,
    },
    {
      id: 2,
      img: "https://dkstatics-public.digikala.com/digikala-products/93d15b97f73a96acb6dce07e9e295800f52fffe2_1723961318.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      special: true,
      title: "آب سیب طبیعی",
      companyName: "شیرین عسل",
      discountPrice: 22000,
      price: 18000,
      stock: 10,
    },
    {
      id: 3,
      img: "https://dkstatics-public.digikala.com/digikala-products/121716048.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      special: false,
      title: "نکتار مخلوط میوه",
      companyName: "کاله",
      discountPrice: 30000,
      price: 27000,
      stock: 12,
    },
    {
      id: 4,
      img: "https://dkstatics-public.digikala.com/digikala-products/2da3617ce6ca4a9633773379ca54ddfff5703182_1755664970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      special: false,
      title: "آب انبه",
      companyName: "پگاه",
      discountPrice: 28000,
      price: 25000,
      stock: 8,
    },
    {
      id: 5,
      img: "https://dkstatics-public.digikala.com/digikala-products/121337925.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      special: true,
      title: "آب انگور قرمز",
      companyName: "دورنا",
      discountPrice: 27000,
      price: 24000,
      stock: 14,
    },
    {
        id: 6,
        img: "https://dkstatics-public.digikala.com/digikala-products/121716048.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        special: false,
        title: "نکتار مخلوط میوه",
        companyName: "کاله",
        discountPrice: 30000,
        price: 27000,
        stock: 12,
      },
      {
        id: 7,
        img: "https://dkstatics-public.digikala.com/digikala-products/2da3617ce6ca4a9633773379ca54ddfff5703182_1755664970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        special: false,
        title: "آب انبه",
        companyName: "پگاه",
        discountPrice: 28000,
        price: 25000,
        stock: 8,
      },
  ];
  

export default function JuicesAndDrink() {
  return (
    <section className="w-full  py-8 flex flex-col bg-gray-50 px-4 md:px-45">

      {/* Header */}
      <div className="flex justify-between w-full items-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          ⭐ محصولات نوشیدنی و انرژی زا
        </h3>
        <button className="px-2 md:px-5 text-sm py-3 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl transition-all">
          مشاهده همه
        </button>
      </div>

      {/* Desktop Grid */}
      {/* <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 gap-1">
        {data.map((item,index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div> */}

      {/* Mobile Slider */}
      <div className="">
  <ProductSlider items={data} CardComponent={ProductCard} rtl={true} />
</div>

    </section>
  );
}
