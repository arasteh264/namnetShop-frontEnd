import React from 'react'
import { IoMenu } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
const BasketIcon = SlBasket as any;
const IoMenuIcon = IoMenu as any;
export default function Navbar() {

  return (
    <div className='w-full border-b-2 border-white'>
    <section className='sm:hidden min-h-[60px] max-h-[60px] px-4 py-2  w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-2xl sticky top-0 z-50 '>
<div className='flex justify-between items-center'>



    <div className=' flex gap-18 '>
    <div className='rounded-[10px] bg-amber-600 px-1 py-1 items-center flex'>
<BasketIcon  className='text-3xl' />
    </div>
    <div className='flex flex-col gap-1 items-center'>
        <span className='text-1xl font-extrabold'>نامنت شاپ</span>
        <span className='text-sm font-semibold'>بازار عمده فروشی آراسته</span>
    </div>
    </div>




<div className=' px-1 py-1 items-center'>
<IoMenuIcon className='text-4xl' />
    </div>
</div>
    </section>


    <section className='hidden sm:flex justify-between min-h-[80px] max-h-[80px] px-40 py-6  w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-2xl sticky top-0 z-50'>
<div className='w-full flex justify-between items-center'>
    <div className=' flex gap-5'>
    <div className='rounded-[10px] bg-amber-600 px-1  items-center flex'>
<BasketIcon  className='text-3xl' />
    </div>
    <div className='flex flex-col gap-1 text-white'>
        <span className='text-1xl font-extrabold'>نامنت شاپ</span>
        <span className='text-sm font-semibold'>بازار عمده فروشی آراسته</span>
    </div>
    </div>

    <nav>
    <ul className='flex gap-20 text-white'>
        <li className='text-lg'>پنل کاربری</li>
        <li className='text-lg'>محصولات</li>
        <li className='text-lg'>خانه</li>
    </ul>
</nav>

<div className=' px-1 py-1 items-center'>
<IoMenuIcon className='text-4xl' />
    </div>







</div>
    </section>


    </div>
  )
}
