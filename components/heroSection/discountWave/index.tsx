

import { RiDiscountPercentFill } from "react-icons/ri";
const RiDiscountPercentFillIcon = RiDiscountPercentFill as any;
export default function DiscountWave() {
  return (
    <>
<div className="w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>

        <section className="py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-white">
            <RiDiscountPercentFillIcon  className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
            <p className="md:text-xl text-center md:py-3">
               تخفیف ویژه! خرید بالای 10 میلیون تومان 15% تخفیف رایگان! 
            </p>
            <RiDiscountPercentFillIcon className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>
      </section>
      </>
  )
}
