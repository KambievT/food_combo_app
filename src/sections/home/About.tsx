import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/constants";

export default function About() {
  return (
    <>
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div className="space-y-6" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-black">О нашем кафе</h2>
          <p className="text-lg text-black leading-relaxed">
            Мы предлагаем широкий выбор свежих блюд и напитков, приготовленных
            из качественных ингредиентов. Наше кафе - это место, где вы можете
            насладиться вкусной едой в уютной атмосфере.
          </p>
          <ul className="space-y-4 text-black">
            {[
              { icon: "☕", text: "Свежие ингредиенты каждый день" },
              { icon: "👨‍🍳", text: "Профессиональные бариста" },
              { icon: "🪑", text: "Уютная атмосфера" },
              { icon: "📶", text: "Бесплатный Wi-Fi" },
            ].map((item) => (
              <motion.li
                key={item.text}
                className="flex items-center space-x-3 text-lg"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="relative h-[500px] rounded-2xl overflow-hidden"
          variants={scaleIn}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
            {/* Add cafe image here */}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
