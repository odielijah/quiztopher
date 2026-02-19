import { useState } from "react";
import { ArrowRight } from "../assets/icons/ArrowRight";
import { Ball } from "../assets/icons/Ball";
import { Clapperboard } from "../assets/icons/Clapperboard";
import { Earth } from "../assets/icons/Earth";
import { Flask } from "../assets/icons/Flask";
import { Gamepad } from "../assets/icons/Gamepad";
import { Star } from "../assets/icons/Star";
import { ArrowLeft } from "../assets/icons/ArrowLeft";

export default function Categories({ viewConfig }) {
  const categories = [
    { name: "pop culture", icon: Star },
    { name: "gaming", icon: Gamepad },
    { name: "film & TV", icon: Clapperboard },
    { name: "science & tech", icon: Flask },
    { name: "general knowledge", icon: Earth },
    { name: "sports", icon: Ball },
  ];

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white">
      <div className="w-full relative max-w-md px-6 flex flex-col gap-20 items-center">
        <div className="w-full flex items-center justify-between">
          <button>
            <ArrowLeft className="w-6 h-6 cursor-pointer" />
          </button>
          <h1 className="playwrite-at-regular text-[20px] mx-auto">
            Categories
          </h1>
          <div className="w-6" />
        </div>

        <div className="flex flex-col lato-regular text-[15px] w-full min-w-[250px] text-left text-white gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="text-white relative w-full flex gap-4 items-center border-[1px] rounded-full py-3 px-5"
              onClick={() => viewConfig(cat.name)}
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
