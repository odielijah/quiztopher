import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import QuizConfig from "./components/QuizConfig";

function App() {
  const [view, setView] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);

  function viewConfig(categoryName) {
    setSelectedCategory(categoryName);
    setView("config");
  }

  function goBack(previousView) {
    setView(previousView);
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center md:bg-[#460071]">
        {view === "categories" && <Categories viewConfig={viewConfig} />}
        {view === "config" && (
          <QuizConfig selectedCategory={selectedCategory} />
        )}
      </div>
    </>
  );
}

export default App;
