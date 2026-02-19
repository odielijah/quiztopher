import { Fire } from "../assets/icons/Fire";
import profilePic from "../assets/images/IMG_4432.JPG";
import { categories } from "../data/categoriesData";
import { ArrowRight } from "../assets/icons/ArrowRight";

export default function Home() {
  return (
    <div className="my-5 flex flex-col justify-center gap-10">
      <header className="px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-orange-100 to-orange-200 flex items-center justify-center overflow-hidden border-2 border-purple-600 shadow-md">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px]">Welcome</span>
              <span className="text-[14px] font-bold">Odija the Iconic!</span>
            </div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-orange-900">
            <Fire className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-orange-600 text-sm">99</span>
          </div>
        </div>
      </header>

      <div className="mx-5 h-[150px] px-10 py-4 bg-[linear-gradient(to_bottom_right,rgb(101,14,231)_0%,rgb(25,4,58)_100%)] text-black rounded-[30px] poppins font-medium text-[16px]"></div>

      <div className="w-full">
        <div>
          <div className="flex justify-between items-center mb-4 px-5">
            <h1 className="text-[20px] font-bold">Categories</h1>
            <button className="text-sm text-white/50 flex items-center">
              See All
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="flex flex-row gap-2 overflow-x-auto pb-4 px-5 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat, i) => (
              <button
                key={i}
                className="shrink-0 flex items-center gap-2 border-[1px] border-white/20 rounded-full py-2 px-5 text-white bg-white/5 transition-all active:scale-95 snap-start"
                onClick={() => onSelectCat(cat.name)}
              >
                <cat.icon className="w-4 h-4" />
                <span className="capitalize text-sm font-medium whitespace-nowrap">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full pt-10">
          <div className="flex justify-between items-center mb-4 px-5">
            <h2 className="text-[20px] font-bold text-white">Recent Quiz</h2>
            <button className="text-sm text-white/50 flex items-center">
              See All
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="flex flex-row gap-4 overflow-x-auto pb-8 px-5 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="shrink-0 w-[240px] bg-white rounded-[24px] overflow-hidden snap-start shadow-xl relative">
              {/* Score Badge Overlay */}
              <div className="absolute top-3 right-3 z-10 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                SCORE: 18/20
              </div>

              <div className="h-[140px] w-full relative bg-red-900"></div>

              <div className="p-4 bg-white">
                <h3 className="text-black font-bold text-lg leading-tight">
                  Sport Quiz
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-500 text-[10px] uppercase font-semibold tracking-wider">
                    Completed
                  </p>
                  <p className="text-gray-400 text-[10px]">Just now</p>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-[240px] bg-white rounded-[24px] overflow-hidden snap-start shadow-xl relative">
              {/* Score Badge Overlay */}
              <div className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                SCORE: 12/20
              </div>

              <div className="h-[140px] w-full relative bg-purple-900"></div>

              <div className="p-4 bg-white">
                <h3 className="text-black font-bold text-lg leading-tight">
                  Sport Quiz
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-500 text-[10px] uppercase font-semibold tracking-wider">
                    Practice Run
                  </p>
                  <p className="text-gray-400 text-[10px]">2h ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
