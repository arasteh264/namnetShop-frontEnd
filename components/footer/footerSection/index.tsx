import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <ShoppingCart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl">نامنت شاپ</div>
                  <div className="text-yellow-200 text-xs">بازار عمده فروشی آراسته</div>
                </div>
              </div>
              <p className="text-purple-200 text-sm leading-relaxed">
                شریک قابل اعتماد شما برای تامین مواد غذایی عمده. محصولات باکیفیت با قیمت‌های رقابتی.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-yellow-300">لینک‌های سریع</h3>
              <ul className="space-y-3 text-sm text-purple-200">
                <li><button  className="hover:text-yellow-300 transition-colors">خانه</button></li>
                <li><button  className="hover:text-yellow-300 transition-colors">محصولات</button></li>
                <li><button  className="hover:text-yellow-300 transition-colors">پنل کاربری</button></li>
                <li><button className="hover:text-yellow-300 transition-colors">درباره ما</button></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-yellow-300">دسته‌بندی‌ها</h3>
              <ul className="space-y-3 text-sm text-purple-200">
                <li>🎂 کیک و شیرینی</li>
                <li>🍪 بیسکویت</li>
                <li>🧃 آبمیوه و نوشیدنی</li>
                <li>🌰 آجیل و خشکبار</li>
                <li>🍿 تنقلات</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-yellow-300">تماس با ما</h3>
              <ul className="space-y-3 text-sm text-purple-200">
                <li className="flex items-center gap-2">
                  📧 arasteh264@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  📞 +98 912-7998427
                </li>
                <li className="flex items-center gap-2">
                  📍 تهران،عبدل اباد
                </li>
              </ul>
              <div className="flex gap-3 mt-6">
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all">
                  📱
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all">
                  💬
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all">
                  🌐
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-purple-200 text-sm">
              تمامی حقوق محفوظ است.توسط تیم نامنت شاپ❤️
            </p>
          </div>
        </div>
      </footer>
  )
}
