import HeroSection from "@/components/heroSection";
import BestSellingProducts from "@/components/heroSection/bestSellingProducts";
import CakeAndCookieCompanySection from "@/components/heroSection/cakeAndCookieCompanySection";
import FruitJuiceCompanySection from "@/components/heroSection/fruitJuiceCompanySection";
import JuicesAndDrink from "@/components/heroSection/juicesAndDrink";
import SpecialProducts from "@/components/heroSection/specialProducts";
import MobileNavbar from "@/components/navbar";
import ProductCategories from "@/components/ProductCategories";


export default function Home() {
  return (
<div className="">
<HeroSection/>
<ProductCategories/>

{/* محصولات ویژه */}
<SpecialProducts/>

{/* شرکت ها و کمپانی ها  */}
<CakeAndCookieCompanySection/>

{/* محصولات پر فروش */}
<BestSellingProducts/>

{/*شرکت های ابمیوه و نوشیدنی*/}
<FruitJuiceCompanySection/>

{/*انواع ابمیوه و نوشیدنی*/}
<JuicesAndDrink/>

</div>
  );
}
