"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  {
    id: 3,
    name: "Латте",
    description: "Нежный кофе с молоком и пенкой",
    price: 160,
    category: "Горячие напитки",
    image: "/latte.jpg",
  },
  {
    id: 4,
    name: "Паста Карбонара",
    description: "Классическая итальянская паста с беконом и яйцом",
    price: 320,
    category: "Основные блюда",
    image: "/pasta.jpg",
  },
  {
    id: 5,
    name: "Чизкейк",
    description: "Нежный десерт с творожным кремом",
    price: 280,
    category: "Десерты",
    image: "/cheesecake.jpg",
  },
  {
    id: 6,
    name: "Эспрессо",
    description: "Крепкий итальянский кофе",
    price: 120,
    category: "Горячие напитки",
    image: "/espresso.jpg",
  },
];

const categories = ["Все", "Горячие напитки", "Десерты", "Основные блюда"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "Все" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Меню</h1>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Поиск блюд..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

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

      {/* Results count */}
      {searchQuery && (
        <p className="text-gray-600">
          Найдено {filteredItems.length}{" "}
          {filteredItems.length === 1
            ? "блюдо"
            : filteredItems.length < 5
            ? "блюда"
            : "блюд"}
        </p>
      )}

      {/* Menu Items */}
      <AnimatePresence mode="wait">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
      </AnimatePresence>

      {/* No results message */}
      {filteredItems.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <p className="text-gray-500 text-lg">
            {searchQuery
              ? `По запросу "${searchQuery}" ничего не найдено`
              : "В данной категории пока нет блюд"}
          </p>
        </motion.div>
      )}
    </div>
  );
}
