import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Categories from "./components/Categories";
import QuizConfig from "./components/QuizConfig";

function App() {
  const [view, setView] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);

  function onSelectCat(categoryName) {
    setSelectedCategory(categoryName);
    setView("config");
  }

  function onBack(previousView) {
    setView(previousView);
  }

  return (
    <>
      <div className="min-h-screen text-white">
        {view === "home" && <Home />}
        {view === "categories" && <Categories onSelectCat={onSelectCat} />}
        {view === "config" && (
          <QuizConfig selectedCategory={selectedCategory} />
        )}
      </div>
    </>
  );
}

export default App;
