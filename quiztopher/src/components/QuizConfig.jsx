import { ArrowLeft } from "../assets/icons/ArrowLeft";
export default function QuizConfig({ selectedCategory }) {
  return (
    <div className="text-white">
      <button>
        <ArrowLeft className="w-6 h-6 cursor-pointer" />
      </button>
      Setup for {selectedCategory}
    </div>
  );
}
