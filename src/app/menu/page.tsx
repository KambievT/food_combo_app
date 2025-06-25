"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCard from "./../../components/MenuCard";
import { API_BASE_URL } from "@/constants";

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const categories = ["Все", "Горячие напитки", "Десерты", "Основные блюда"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_BASE_URL}/cards/menu`) // Замените на ваш реальный эндпоинт
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки меню");
        return res.json();
      })
      .then((data) => setMenuItems(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "Все" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

      {/* Loading/Error */}
      {loading && <div className="text-center py-8">Загрузка...</div>}
      {error && <div className="text-center text-red-500 py-8">{error}</div>}

      {/* Results count */}
      {searchQuery && !loading && !error && (
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
          {!loading &&
            !error &&
            filteredItems.map((item) => <MenuCard item={item} key={item.id} />)}
        </div>
      </AnimatePresence>

      {/* No results message */}
      {!loading && !error && filteredItems.length === 0 && (
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
