import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/constants";
import Image from "next/image";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 min-h-[500px] md:min-h-[600px]"
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
          className="relative min-h-[350px] h-full min-w-[320px] w-full md:w-[500px] rounded-2xl overflow-hidden justify-self-center self-stretch"
          variants={scaleIn}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {["/cafe-img2.webp", "/FON.webp"].map(
              (src, idx) =>
                currentSlide === idx && (
                  <motion.div
                    key={src + currentSlide}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ pointerEvents: "auto" }}
                  >
                    <Image
                      src={src}
                      alt="Кафе"
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </>
  );
}
