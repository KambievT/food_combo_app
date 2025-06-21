"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <footer className="w-full bg-background border-t">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">О нас</h3>
            <p className="text-foreground/80">
              Уютное кафе с лучшими блюдами и напитками для вас
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Контакты</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-xl">📍</span>
                <span>Краснодарский край, село Успенское, улица Калинина</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📞</span>
                <div>
                  <span className="block text-xs text-gray-400 uppercase">
                    Для заказов
                  </span>
                  <span className="block">+7 (918) 681-88-77</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-xl">⏰</span>
              Время работы
            </h3>
            <div className="mb-2 text-foreground/80">Открыто до 22:00</div>
            <div className="border-t pt-2">
              <div
                className="flex justify-between items-center mb-2 select-none cursor-pointer"
                onClick={() => setShowSchedule((v) => !v)}
              >
                <span className="text-gray-400 text-sm">&nbsp;</span>
                <span className="text-gray-400 text-sm font-semibold flex items-center gap-1">
                  График
                  <motion.span
                    animate={{ rotate: showSchedule ? 180 : 0 }}
                    className="inline-block"
                  >
                    ▲
                  </motion.span>
                </span>
              </div>
              <AnimatePresence initial={false}>
                {showSchedule && (
                  <motion.ul
                    key="schedule"
                    className="divide-y divide-gray-200 origin-top"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    {[
                      "Понедельник",
                      "Вторник",
                      "Среда",
                      "Четверг",
                      "Пятница",
                      "Суббота",
                      "Воскресенье",
                    ].map((day, idx) => {
                      const today = (new Date().getDay() + 6) % 7;
                      return (
                        <li
                          key={day}
                          className={`flex items-center justify-between py-1 ${
                            today === idx ? "font-semibold text-black" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {today === idx && (
                              <span className="inline-block w-2 h-2 rounded bg-blue-500 mr-2" />
                            )}
                            <span>{day}</span>
                          </div>
                          <span>09:00–22:00</span>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Cafe. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
