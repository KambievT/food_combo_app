import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants";

// Иконки для секций (можно заменить на SVG или кастомные)
const IconPrice = () => <span className="text-blue-400 text-2xl">💰</span>;
const IconInfo = () => <span className="text-green-400 text-2xl">ℹ️</span>;
const IconExtra = () => <span className="text-yellow-400 text-2xl">⭐</span>;
const IconFeature = () => <span className="text-pink-400 text-2xl">✨</span>;
const IconAccess = () => <span className="text-purple-400 text-2xl">♿</span>;

export default function SpecialFeatures() {
  return (
    <motion.section
      className="bg-white p-4 md:p-8 rounded-2xl shadow-md"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-black text-center"
        variants={fadeInUp}
      >
        Больше информации о нас
      </motion.h2>
      {/* Теги */}
      <div className="flex gap-2 mb-10 flex-wrap justify-center">
        <span className="bg-gray-100 text-black px-4 py-1 rounded-full font-medium">
          Кафе
        </span>
        <span className="bg-gray-100 text-black px-4 py-1 rounded-full font-medium">
          Быстрое питание
        </span>
      </div>
      {/* Секции в виде карточек */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- Цены и особенности --- */}
        <section className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-start">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <IconPrice /> <IconFeature /> Цены и особенности
          </h3>
          <div className="flex flex-col gap-6 w-full">
            {/* Цены */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Средний счёт:</span>
                <span className="font-bold">500–700 ₽</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Цена бизнес-ланча:</span>
                <span className="font-bold">350 ₽</span>
              </div>
            </div>
            {/* Особенности */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Музыка:</span>{" "}
                <span className="text-gray-700">pop, europop</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Специальное меню:</span>{" "}
                <span className="text-gray-700">
                  хот-доги, шаурма, сезонное
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Особенности заведения:</span>{" "}
                <span className="text-gray-700">
                  можно с ноутбуком, бесплатная парковка
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Число экранов:</span>{" "}
                <span className="text-gray-700">3</span>
              </div>
            </div>
          </div>
        </section>
        {/* --- Общая информация --- */}
        <section className="bg-green-50 rounded-xl shadow p-6 flex flex-col items-start">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <IconInfo /> Общая информация
          </h3>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛵</span>Доставка еды
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🥡</span>Еда навынос
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💳</span>Оплата картой
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">☕</span>Кофе с собой
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>Подарочный сертификат
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>Завтрак
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>Бизнес-ланч
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>Предзаказ онлайн
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>Самовывоз
            </div>
          </div>
        </section>
        {/* --- Дополнительная информация --- */}
        <section className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-start">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <IconExtra /> Дополнительная информация
          </h3>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Типы безналичных чаевых:</span>{" "}
              <span className="text-blue-600 font-bold">Яндекс.Чаевые</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Кухня:</span>{" "}
              <span className="text-gray-700">
                европейская, американская, авторская
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Способ оплаты:</span>{" "}
              <span className="text-gray-700">
                СБП, безналичная, QR-код, наличными, оплата картой, банковским
                переводом
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Тип заведения:</span>{" "}
              <span className="text-gray-700">
                семейный ресторан, фаст-фуд, бургерная
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Акции:</span>{" "}
              <span className="text-gray-700">
                акции, скидки, спецпредложения, бонусы
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Доставка еды:</span>{" "}
              <span className="text-gray-700">
                собственная курьерская служба, Яндекс.Еда, Delivery-club
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">
                Количество столов в зале для посадки:
              </span>{" "}
              <span className="text-gray-700">5–8</span>
            </div>
          </div>
        </section>
        {/* --- Доступность и события --- */}
        <section className="bg-purple-50 rounded-xl shadow p-6 flex flex-col items-start md:col-span-2">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <IconAccess /> Доступность и события
          </h3>
          <div className="flex flex-wrap gap-4 w-full">
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-xl">🚻</span>Туалет
            </div>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-xl">✅</span>Забота о курьерах
            </div>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-xl">🧋</span>Бабл-чай
            </div>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-xl">🦽</span>Пандус
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-gray-400">
                Доступность входа на инвалидной коляске:
              </span>{" "}
              <span className="text-red-500 font-bold">недоступно</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-xl">🅿️</span>Парковка для людей с
              инвалидностью
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-gray-400">
                Доступность помещения на инвалидной коляске:
              </span>{" "}
              <span className="text-yellow-600 font-bold">
                частично доступно
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-xl">🅿️</span>Парковка
            </div>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <span className="text-xl">✅</span>Подарочный сертификат
            </div>
            <div className="flex flex-col border border-gray-200 rounded-lg px-3 py-2 bg-white min-w-[180px]">
              <span className="text-gray-400">События:</span>
              <span className="text-gray-700">Деловая встреча</span>
              <span className="text-gray-700">Семейный ужин</span>
            </div>
            <div className="flex border border-gray-200 rounded-lg px-3 py-2 bg-white min-w-[180px]">
              <span className="text-gray-400">Посещение с животными:</span>
              <span className="text-red-500 font-bold ml-2">
                запрещено с животными
              </span>
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
