import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants";

export default function SpecialFeatures() {
  return (
    <motion.section
      className="bg-white p-6 md:p-10 rounded-2xl shadow-md"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-black"
        variants={fadeInUp}
      >
        Особенности
      </motion.h2>
      {/* Теги */}
      <div className="flex gap-2 mb-8 flex-wrap">
        <span className="bg-gray-100 text-black px-4 py-1 rounded-full font-medium">
          Кафе
        </span>
        <span className="bg-gray-100 text-black px-4 py-1 rounded-full font-medium">
          Быстрое питание
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 text-base">
        {/* Колонка 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">🛵</span>Доставка еды
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">🚻</span>Туалет
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">✅</span>Подарочный сертификат
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">💳</span>Оплата картой
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Средний счёт:</span>{" "}
            <span className="font-bold">500–700 ₽</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">🦽</span>Пандус
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">
              Доступность входа на инвалидной коляске:
            </span>{" "}
            <span className="text-red-500 font-bold">недоступно</span>
          </div>
        </div>
        {/* Колонка 2 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">🥡</span>Еда навынос
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">✅</span>Забота о курьерах
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">☕</span>Кофе с собой
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">🧋</span>Бабл-чай
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Типы безналичных чаевых:</span>{" "}
            <span className="text-blue-600 font-bold">Яндекс.Чаевые</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">🅿️</span>Парковка для людей с
            инвалидностью
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">
              Доступность помещения на инвалидной коляске:
            </span>{" "}
            <span className="text-yellow-600 font-bold">частично доступно</span>
          </div>
        </div>
        {/* Колонка 3 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">🅿️</span>Парковка
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">✅</span>Подарочный сертификат
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">События:</span>{" "}
            <span className="text-gray-700 flex flex-col">
              <span>Деловая встреча</span>
              <span>Семейный ужин</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Посещение с животными:</span>{" "}
            <span className="text-red-500 font-bold">
              запрещено с животными
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
