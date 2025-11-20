import DesktopCardHeader from "../desktopCardHeader";
import { MdElectricRickshaw } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";
import { LuArrowRight } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
const LuArrowRightIcon = LuArrowRight as any;
const BasketIcon = SlBasket as any;
const MdElectricRickshawIcon = MdElectricRickshaw as any;
const GrLineChartIcon = GrLineChart as any;

export default function MainBanner() {
  return (
    <div className="flex items-center md:px-40">
    <div className='px-5 py-10 gap-2 flex flex-col md:w-[50%] '>
        <div className='bg-yellow-400 w-50 flex items-center justify-center py-1 text-purple-900 rounded-[10px] '>
        <MdElectricRickshawIcon className="text-1xl"/>
            <span className='px-1 text-sm'>تخفیف ویژه عمده فروشی</span>
        </div>
    
    
        <span className='text-3xl md:text-7xl pt-6 font-extralight'>بهترین  محصولات</span>
        <span className='text-3xl md:text-7xl pt-3 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent'>با قیمت عمده</span>
    
        <p className="text-sm md:text-2xl mb-5 text-purple-100 leading-relaxed pt-3">
                    🎯 تامین‌کننده مطمئن سوپرمارکت‌ها، فروشگاه‌ها و کافه‌ها
                    <br />
                    💰 بهترین قیمت‌ها با کیفیت تضمین شده
                  </p>
    
    
                  <div className='flex'>
    
                    <button className='px-1 py-1 mr-2 flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 rounded-[10px]  shadow-2xl text-lg transform hover:scale-105 transition-all'>
                        <label className='text-[12px] px-1'><BasketIcon/></label>
                        مشاهده محصولات
                        <label className='text-[12px] px-1' ><LuArrowRightIcon /></label>
                        </button>
                    <button className='px-1 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/40  rounded-[10px] flex items-center'>
                        <label className='pr-2 '>
                        <GrLineChartIcon />
                        </label>
                        
                        پیشنهادات ویژه</button>
                  </div>
                  <div className='flex mt-15 justify-between' >
                  <div className='flex flex-col items-center text-[18px]'>
        <span>500+</span>
        <span>محصول متنوع</span>
    </div>
    <div className='flex flex-col items-center text-[18px]'>
        <span>1000+</span>
        <span>مشتری راضی</span>
    </div>
    <div className='flex flex-col items-center text-[18px]'>
        <span>24/7</span>
        <span>پشتیبانی</span>
    </div>
    
    
    
    
                  </div>
                

    </div>
    <DesktopCardHeader/>
    </div>
  )
}
