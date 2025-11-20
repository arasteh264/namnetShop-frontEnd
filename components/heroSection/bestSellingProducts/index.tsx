import ProductCard from "@/components/cards/productCard";
import ProductSlider from "../../ui/productSlider";

const data = [
  {
    id: 1,
    img: "https://api.omdebashi.com/static/images/products/cover/biscuit-hi-bi-cacao-sirang-8441718-optimized.jpeg",
    special: true,
    title: "کیک تاینی",
    companyName: "شیرین عسل",
    discountPrice: 230000,
    price: 200000,
    stock: 12,
  },
  {
    id: 2,
    img: "https://api.omdebashi.com/static/images/products/cover/biscuit-hi-bi-cacao-sirang-8441718-optimized.jpeg",
    special: true,
    title: "کیک های‌دی",
    companyName: "کاله",
    discountPrice: 180000,
    price: 150000,
    stock: 7,
  },
  {
    id: 3,
    img: "https://api.omdebashi.com/static/images/products/cover/biscuit-hi-bi-cacao-sirang-8441718-optimized.jpeg",
    special: true,
    title: "کیک تاینی",
    companyName: "شیرین عسل",
    discountPrice: 230000,
    price: 200000,
    stock: 12,
  },
  {
    id: 4,
    img: "https://api.omdebashi.com/static/images/products/cover/biscuit-hi-bi-cacao-sirang-8441718-optimized.jpeg",
    special: true,
    title: "کیک های‌دی",
    companyName: "کاله",
    discountPrice: 180000,
    price: 150000,
    stock: 7,
  },
];

export default function BestSellingProducts() {
  return (
    <section className="w-full  py-8 flex flex-col bg-gray-50 px-4 md:px-45">

      {/* Header */}
      <div className="flex justify-between w-full items-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          ⭐ محصولات پرفروش
        </h3>
        <button className="px-2 md:px-5 text-sm py-3 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl transition-all">
          مشاهده همه
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 gap-1">
        {data.map((item,index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden">
  <ProductSlider items={data} CardComponent={ProductCard} rtl={true} />
</div>

    </section>
  );
}
