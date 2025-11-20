// components/categoriesCard.tsx
interface CategoryItem {
  id: number;
  title: string;
  img: string;
}

interface CategoriesCardProps {
  CategoriesData: CategoryItem[];
}

const CategoriesCard = ({ CategoriesData }: CategoriesCardProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl px-4">
      {CategoriesData.map((category) => (
        <div 
          key={category.id} 
          className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="text-4xl mb-3">{category.img}</div>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
            {category.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;