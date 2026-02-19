import { ArrowRight } from "../assets/icons/ArrowRight";
import { categories } from "../data/categoriesData";

export default function Categories({ onSelectCat, titleAndBackBtn }) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white">
      <div className="w-full relative max-w-md px-6 flex flex-col gap-20 items-center">
        {titleAndBackBtn}

        <div className="flex flex-col lato-regular text-[15px] w-full min-w-[250px] text-left text-white gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="text-white relative w-full flex gap-4 items-center border-[1px] rounded-full py-3 px-5"
              onClick={() => onSelectCat(cat.name)}
            >
              <span className="text-white transition-colors">
                <cat.icon className="w-5 h-5" />
              </span>
              <span className="capitalize">{cat.name}</span>
              <ArrowRight className="w-4 h-4 absolute right-5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
