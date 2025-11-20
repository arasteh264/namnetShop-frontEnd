import React from 'react'

export default function SubscribeForm() {
  return (
    
    <div className='relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-20 px-5'>
      <div className='max-w-xl mx-auto text-center'>
        <span className='text-white text-3xl font-bold'>خبرنامه ویژه</span>
        <p className='text-white py-4'>برای دریافت جدیدترین محصولات و تخفیف‌ها عضو شوید</p>
        <input
          type="email"
          placeholder="شماره موبایل خود را وارد نمایید"
          className="mt-4 p-2 rounded-md w-full md:w-2/3 text-gray-900 mr-4 bg-amber-50"
        />
        <button className="mt-2 bg-white text-purple-600 font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition">
          عضویت
        </button>
      </div>
    </div>
  )
}
