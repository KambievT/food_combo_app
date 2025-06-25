import React from "react";

export default function ReadyForOrder() {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col items-center justify-center my-10">
      <div className="text-4xl mb-3">🍽️</div>
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-center">
        Готовы заказать еду у нас?
      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-6 text-center max-w-xl">
        Ознакомьтесь с нашим меню и оформите заказ онлайн — быстро, удобно и
        вкусно!
      </p>
      <a
        href="/menu"
        className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 px-6 rounded-full text-base shadow"
      >
        Перейти в меню
      </a>
    </section>
  );
}
