"use client";
import { X } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  isOpen: boolean;
  handleClose: () => void;
}

export default function MyModal({ isOpen, handleClose }: props) {
  return (
    <AnimatePresence>
      {isOpen === true && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-[100vh] bg-white backdrop-blur-3xl top-0 left-0 text-black"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <X
              size={30}
              className="fixed top-5 right-5"
              onClick={handleClose}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center "
          >
            <Image
              src="/logo5.jpg"
              alt=""
              width={80}
              height={100}
              className="absolute top-20 rounded-full"
            />
          </motion.div>
          <div className="flex flex-col items-center mt-[270px] gap-7">
            <motion.a
              onClick={handleClose}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              href="/"
              className="text-2xl"
            >
              Главная
            </motion.a>
            <motion.a
              onClick={handleClose}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              href="/menu"
              className="text-2xl"
            >
              Меню
            </motion.a>
            <motion.a
              onClick={handleClose}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              href="/profile"
              className="text-2xl"
            >
              Профиль
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
