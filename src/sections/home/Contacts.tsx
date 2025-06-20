import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cardHover, fadeInUp, staggerContainer } from "@/constants";

export default function Contacts() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <>
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
    </>
  );
}
