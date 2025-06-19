"use client";

import { useState } from "react";
import MenuCard from "./../../components/MenuCard";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Капучино",
    description: "Классический итальянский кофе с молоком",
    price: 180,
    category: "Горячие напитки",
    image: "/coffee.jpg",
  },
  {
    id: 2,
    name: "Тирамису",
    description: "Итальянский десерт с кофе и маскарпоне",
    price: 250,
    category: "Десерты",
    image: "/tiramisu.jpg",
  },
  // Add more items as needed
];

const categories = ["Все", "Горячие напитки", "Десерты", "Основные блюда"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredItems =
    selectedCategory === "Все"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Меню</h1>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto py-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? "bg-white text-black  border-1 border-black/30"
                : "bg-black text-white hover:bg-white hover:text-black hover:scale-105 transition-all border-1 border-black/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <MenuCard item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
}
