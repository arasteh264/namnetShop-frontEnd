import { Award, Percent, Truck, Zap } from 'lucide-react'
import React from 'react'

export default function FeaturesSection() {
  return (
<section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl transform group-hover:scale-110 transition-transform">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">ارسال سریع</h3>
              <p className="text-gray-600">تحویل در کمترین زمان</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl transform group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">کیفیت تضمینی</h3>
              <p className="text-gray-600">فقط بهترین محصولات</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl transform group-hover:scale-110 transition-transform">
                <Percent className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">قیمت رقابتی</h3>
              <p className="text-gray-600">بهترین قیمت بازار</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl transform group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">پشتیبانی 24/7</h3>
              <p className="text-gray-600">همیشه در کنار شما</p>
            </div>
          </div>
        </div>
      </section>
  )
}
