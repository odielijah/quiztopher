import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="h-screen flex justify-center items-center md:bg-[#460071]">
      <div className="h-screen w-full flex max-w-[500px] min-w-full mx-auto justify-center items-center text-white">
        <span className="playwrite-at-regular text-[30px]">Quiztopher</span>
      </div>
    </div>
  );
}
