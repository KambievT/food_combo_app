"use client";
import React from "react";
import { motion } from "framer-motion";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface props {
  item: MenuItem;
}
export default function MenuCard({ item }: props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100, x: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        key={item.id}
        className="bg-white rounded-lg shadow-md overflow-hidden relative"
      >
        <div className="h-48 bg-gray-200">{/* Add image here */}</div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-gray-600 mt-1 mb-10">{item.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold absolute left-5 bottom-3">
              {item.price} ₽
            </span>
            <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black border-1 border-black/30 transition-all absolute bottom-2 right-2">
              В корзину
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
