import React from "react";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/constants";
import Link from "next/link";

export default function SpecialOffers() {
  return (
    <>
      <motion.section
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl font-bold mb-10 text-black text-center"
          variants={fadeInUp}
        >
          Специальные предложения
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            variants={cardHover}
            whileHover="hover"
            initial="initial"
          >
            <div className="text-4xl mb-4">🍳</div>
            <h3 className="text-2xl font-semibold mb-3 text-black">
              Комбо &quot; Завтрак &quot;
            </h3>
            <p className="mb-6 text-black text-lg">
              Капучино + круассан всего за 350₽
            </p>
            <Link
              href="/menu"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              Подробнее →
            </Link>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            variants={cardHover}
            whileHover="hover"
            initial="initial"
          >
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-2xl font-semibold mb-3 text-black">
              Скидка 20%
            </h3>
            <p className="mb-6 text-black text-lg">
              На все десерты с 14:00 до 17:00
            </p>
            <Link
              href="/menu"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              Подробнее →
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
