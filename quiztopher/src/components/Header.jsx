import { ArrowLeft } from "../assets/icons/ArrowLeft";

export const Header = (title, goBack ) => (
  <div className="w-full flex items-center justify-between">
    <button>
      <ArrowLeft className="w-6 h-6 cursor-pointer" />
    </button>
    <h1 className="playwrite-at-regular text-[20px] mx-auto">{title}</h1>
    <div className="w-6" />
  </div>
);
