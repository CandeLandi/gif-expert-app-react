import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Samurai X"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gift expert app</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        {
        categories.map((category) => {
          <GifGrid 
          key={category}
          category={category}
          />
        })
        }


      {/* GifItem */}
    </>
  );
};