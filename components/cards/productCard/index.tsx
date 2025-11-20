"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  product: {
    id: number
    img: string
    special?: boolean
    topSeller?: boolean
    title: string
    companyName: string
    discountPrice: number
    price: number
    stock?: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="md:w-[280px]  overflow-hidden rounded-3xl border-2 border-gray-100 shadow-lg relative group bg-white">

      {/* 🔥 لیبل پرفروش */}
      {product.topSeller && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
            پرفروش
          </Badge>
        </div>
      )}

      {/* ⭐ لیبل ویژه */}
      {product.special && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            ویژه
          </Badge>
        </div>
      )}

      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="p-5 text-right">
        <h3 className="text-gray-900 mb-1 font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{product.companyName}</p>

        <div className="flex items-center justify-end gap-3 mb-4">
          <span className="text-sm text-gray-400 line-through">{product.discountPrice.toLocaleString()} تومان</span>
          <span className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
            {product.price.toLocaleString()}
            تومان
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 justify-end mb-4">
          <Package className="w-4 h-4" />
          {product.stock ?? 20} عدد موجود
        </div>

        <Button className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white shadow-lg">
          <ShoppingCart className="w-4 h-4 ml-2" />
          افزودن به سبد خرید
        </Button>
      </div>
    </Card>
  )
}
