"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

const cardHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2 },
  },
};

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="space-y-16" ref={targetRef}>
      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Featured Categories */}
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

      {/* Special Offers */}
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

      {/* Contact Section */}
      <motion.section
        className="text-center py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ opacity, scale }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-black"
          variants={fadeInUp}
        >
          Как нас найти
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: "📍", title: "Адрес", content: "ул. Примерная, 123" },
            {
              icon: "🕒",
              title: "Часы работы",
              content: "Ежедневно с 8:00 до 22:00",
            },
            { icon: "📞", title: "Телефон", content: "+7 (999) 123-45-67" },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="bg-white p-8 rounded-2xl shadow-lg"
              variants={cardHover}
              whileHover="hover"
              initial="initial"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-black">
                {item.title}
              </h3>
              <p className="text-black text-lg">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
