// page.tsx
import CategoriesCard from "./categoriesCard"

const data = [
  { title: "کیک", id: 1, img: "🍪" },
  { title: "ویفر", id: 2, img: "☕" },
  { title: "کلوچه", id: 3, img: "🍰" },
  { title: "آبمیوه", id: 4, img: "🍛" },
  { title: "انرژی زا ها", id: 5, img: "🥗" },
  { title: "خشکبار", id: 6, img: "🍲" },
]

export default function ProductCategories() {
  return (
    <div className="w-full  py-15 flex flex-col items-center bg-gray-50">
      <h2 className="text-3xl mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
        دسته‌بندی محصولات
      </h2>
      <CategoriesCard CategoriesData={data} />
    </div>
  )
}