"use client";
import React from "react";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/cartStore";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface props {
  item: MenuItem;
}
export default function MenuCard({ item }: props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: 1,
    });
    toast.success(`Добавлено в корзину: ${item.title}`);
  };
  return (
    <>
      <Toaster position="top-right" richColors />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{
          opacity: 0,
          scale: 0.8,
          rotateY: 15,
          y: -50,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: item.id * 0.1,
        }}
        whileTap={{ scale: 0.95 }}
        key={item.id}
        className="bg-white rounded-lg shadow-md overflow-hidden relative transform perspective-1000"
      >
        <div className="h-48 bg-gray-200">{/* Add image here */}</div>
        <div className="p-4">
          <motion.h3
            className="text-xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.3 + item.id * 0.1 }}
          >
            {item.title}
          </motion.h3>
          <motion.p
            className="text-gray-600 mt-1 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.4 + item.id * 0.1 }}
          >
            {item.description}
          </motion.p>
          <motion.span
            className="text-lg font-bold absolute left-5 bottom-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.5 + item.id * 0.1 }}
          >
            {item.price} ₽
          </motion.span>
          <motion.button
            className="cursor-pointer bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black border-1 border-black/30 transition-all absolute bottom-2 right-2"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
              delay: 0.6 + item.id * 0.1,
              duration: 0.15,
            }}
            onClick={handleAddToCart}
          >
            В корзину
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
