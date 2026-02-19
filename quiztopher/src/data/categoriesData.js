import { Ball } from "../assets/icons/Ball";
import { Clapperboard } from "../assets/icons/Clapperboard";
import { Earth } from "../assets/icons/Earth";
import { Flask } from "../assets/icons/Flask";
import { Gamepad } from "../assets/icons/Gamepad";
import { Star } from "../assets/icons/Star";

export const categories = [
  { name: "pop culture", icon: Star, color: "from-purple-600 to-indigo-900" },
  { name: "sports", icon: Ball, color: "from-amber-500 to-orange-900" },
  {
    name: "general knowledge",
    icon: Earth,
    color: "from-emerald-500 to-teal-900",
  },
  { name: "film & TV", icon: Clapperboard, color: "from-blue-600 to-blue-900" },
  { name: "gaming", icon: Gamepad, color: "from-red-600 to-red-900" },
  { name: "science & tech", icon: Flask, color: "from-pink-600 to-rose-900" },
];
