import HeroSection from "@/components/heroSection";
import BestSellingProducts from "@/components/heroSection/bestSellingProducts";
import CompaniesSection from "@/components/heroSection/companiesSection";
import SpecialProducts from "@/components/heroSection/specialProducts";
import MobileNavbar from "@/components/navbar";
import ProductCategories from "@/components/ProductCategories";


export default function Home() {
  return (
<div className="mb-70">
<HeroSection/>
<ProductCategories/>
{/* محصولات ویژه */}
<SpecialProducts/>
{/* محصولات پر فروش */}
<BestSellingProducts/>
{/* شرکت ها و کمپانی ها  */}
<CompaniesSection/>
</div>
  );
}
