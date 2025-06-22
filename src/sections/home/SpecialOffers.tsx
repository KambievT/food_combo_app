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
        Больше информации о нас
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
      {/* Цены */}
      <div className="w-full font-bold text-lg mt-8 mb-2">Цены</div>
      <div className="flex flex-wrap gap-4 max-w-5xl mx-auto text-base justify-start mb-4">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Средний счёт:</span>{" "}
          <span className="font-bold">500–700 ₽</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Цена бизнес-ланча:</span>{" "}
          <span className="font-bold">350 ₽</span>
        </div>
      </div>
      {/* Общая информация */}
      <div className="w-full font-bold text-lg mt-8 mb-2">Общая информация</div>
      <div className="flex flex-wrap gap-4 max-w-5xl mx-auto text-base justify-start mb-4">
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">🛵</span>Доставка еды
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">🥡</span>Еда навынос
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">💳</span>Оплата картой
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">☕</span>Кофе с собой
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">✅</span>Подарочный сертификат
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">✅</span>Завтрак
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">✅</span>Бизнес-ланч
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">✅</span>Предзаказ онлайн
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">✅</span>Самовывоз
        </div>
      </div>
      {/* Дополнительная информация */}
      <div className="flex flex-wrap gap-4 max-w-5xl mx-auto text-base justify-start mb-4">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Типы безналичных чаевых:</span>{" "}
          <span className="text-blue-600 font-bold">Яндекс.Чаевые</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Кухня:</span>{" "}
          <span className="text-gray-700">
            европейская, американская, авторская
          </span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Способ оплаты:</span>{" "}
          <span className="text-gray-700">
            СБП, безналичная, QR-код, наличными, оплата картой, банковским
            переводом
          </span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Тип заведения:</span>{" "}
          <span className="text-gray-700">
            семейный ресторан, фаст-фуд, бургерная
          </span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Акции:</span>{" "}
          <span className="text-gray-700">
            акции, скидки, спецпредложения, бонусы
          </span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Доставка еды:</span>{" "}
          <span className="text-gray-700">
            собственная курьерская служба, Яндекс.Еда, Delivery-club
          </span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">
            Количество столов в зале для посадки:
          </span>{" "}
          <span className="text-gray-700">5–8</span>
        </div>
      </div>
      {/* Особенности */}
      <div className="w-full font-bold text-lg mt-8 mb-2">Особенности</div>
      <div className="flex flex-wrap gap-4 max-w-5xl mx-auto text-base justify-start mb-4">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Музыка:</span>{" "}
          <span className="text-gray-700">pop, europop</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Специальное меню:</span>{" "}
          <span className="text-gray-700">хот-доги, шаурма, сезонное</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Особенности заведения:</span>{" "}
          <span className="text-gray-700">
            можно с ноутбуком, бесплатная парковка
          </span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">Число экранов:</span>{" "}
          <span className="text-gray-700">3</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 max-w-5xl mx-auto text-base justify-start">
        {/* Каждая карточка отдельно */}
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
          <span className="text-xl">✅</span>Забота о курьерах
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">🅿️</span>Парковка для людей с инвалидностью
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400">
            Доступность помещения на инвалидной коляске:
          </span>{" "}
          <span className="text-yellow-600 font-bold">частично доступно</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">🅿️</span>Парковка
        </div>
        <div className="flex items-center gap-2 text-gray-700 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <span className="text-xl">✅</span>Подарочный сертификат
        </div>
        <div className="flex flex-col border border-gray-200 rounded-lg px-3 py-2 bg-white min-w-[220px]">
          <span className="text-gray-400">События:</span>
          <span className="text-gray-700">Деловая встреча</span>
          <span className="text-gray-700">Семейный ужин</span>
        </div>
        <div className="flex border border-gray-200 rounded-lg px-3 py-2 bg-white min-w-[220px]">
          <span className="text-gray-400">Посещение с животными:</span>{" "}
          <span className="text-red-500 font-bold ml-2">
            запрещено с животными
          </span>
        </div>
      </div>
    </motion.section>
  );
}
