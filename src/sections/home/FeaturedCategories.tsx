import React from "react";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/constants";
import Link from "next/link";

export default function FeaturedCategories() {
  return (
    <>
      <motion.section
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-black text-center"
          variants={fadeInUp}
        >
          Популярные категории
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Горячие напитки",
              description: "Кофе, чай и другие горячие напитки",
              items: ["Капучино", "Латте", "Американо", "Чай"],
              icon: "☕",
            },
            {
              title: "Десерты",
              description: "Свежие и вкусные десерты",
              items: ["Тирамису", "Чизкейк", "Эклеры", "Макаруны"],
              icon: "🍰",
            },
            {
              title: "Основные блюда",
              description: "Сытные и вкусные блюда",
              items: ["Паста", "Сэндвичи", "Салаты", "Супы"],
              icon: "🍝",
            },
          ].map((category) => (
            <motion.div
              key={category.title}
              className="bg-white p-8 rounded-2xl shadow-lg"
              variants={cardHover}
              whileHover="hover"
              initial="initial"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-black">
                {category.title}
              </h3>
              <p className="mb-6 text-black text-lg">{category.description}</p>
              <ul className="space-y-3 mb-6">
                {category.items.map((item) => (
                  <motion.li
                    key={item}
                    className="text-black flex items-center"
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="mr-2">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/menu"
                className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg"
              >
                Смотреть все →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
