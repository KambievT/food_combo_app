import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <motion.section
        className="relative text-center py-32 bg-gradient-to-b from-gray-50 to-white rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.h1
          className="text-5xl font-bold mb-6 text-black relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Добро пожаловать в наше кафе
        </motion.h1>
        <motion.p
          className="text-xl mb-10 text-black max-w-2xl mx-auto relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Лучшие блюда и напитки для вас в уютной атмосфере
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/menu"
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Смотреть меню
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}
