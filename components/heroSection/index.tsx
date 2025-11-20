

import DiscountWave from "./discountWave";
import MainBanner from "./mainBanner";


export default function HeroSection () {
  return (
    <section className='bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500'>
      {/* قسمت بعد از منو */}
<MainBanner/>

{/* قسمت موج و تخفیف */}
<DiscountWave/>



        
    </section>
  )
}
