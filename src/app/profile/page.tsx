"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserStore } from "@/lib/userStore";
import { useGetProfile } from "@/hooks/UseGetProfile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Order {
  id: number;
  date: string;
  total: number;
  status: "completed" | "processing" | "cancelled";
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

const statusColors: Record<Order["status"], string> = {
  completed: "border-green-400",
  processing: "border-yellow-400",
  cancelled: "border-red-400",
};
const statusTextColors: Record<Order["status"], string> = {
  completed: "text-green-600",
  processing: "text-yellow-600",
  cancelled: "text-red-600",
};

export default function Profile() {
  const { profile, loading, error } = useGetProfile();
  const router = useRouter();
  const clearAccessToken = useUserStore((state) => state.clearAccessToken);

  const [orders] = useState<Order[]>([
    {
      id: 1,
      date: "2024-03-15",
      total: 430,
      status: "completed",
      items: [
        { name: "Капучино", quantity: 1, price: 180 },
        { name: "Тирамису", quantity: 1, price: 250 },
      ],
    },
    // Add more orders as needed
  ]);
  const [orderFilter, setOrderFilter] = useState<
    "all" | "completed" | "processing" | "cancelled"
  >("all");

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3001/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch {}
    clearAccessToken();
    router.push("/auth/login");
  };

  const getStatusText = (status: Order["status"]) => {
    const statusMap = {
      completed: "Выполнен",
      processing: "В обработке",
      cancelled: "Отменен",
    };
    return statusMap[status];
  };

  const filters: {
    label: string;
    value: "all" | "completed" | "processing" | "cancelled";
  }[] = [
    { label: "Все", value: "all" },
    { label: "Выполнен", value: "completed" },
    { label: "В обработке", value: "processing" },
    { label: "Отменен", value: "cancelled" },
  ];

  return (
    <motion.div
      className="max-w-3xl mx-auto space-y-12 px-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Профиль пользователя */}
      <motion.div
        className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center relative min-h-[220px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Кнопка Выйти */}
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-white hover:border hover:border-red-600 hover:text-red-600 hover:scale-105 transition-all text-sm shadow flex items-center gap-2"
        >
          {/* Иконка выхода */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12H9m0 0l3-3m-3 3l3 3"
            />
          </svg>
          Выйти
        </button>
        {/* Аватар */}
        <div className="bg-black rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4 mt-2">
          👤
        </div>
        {loading === true ? (
          <div className="w-full flex flex-col items-center">
            <Skeleton className="w-[120px] h-[28px] my-2" />
            <Skeleton className="w-[180px] h-[20px] my-2" />
          </div>
        ) : profile ? (
          <>
            <div className="text-2xl font-bold text-center mb-1">
              {profile.name}
            </div>
            <div className="text-gray-500 text-center mb-2">
              {profile.email}
            </div>
          </>
        ) : error ? (
          <div className="text-red-500 text-center w-full">{error}</div>
        ) : null}
      </motion.div>

      {/* История заказов */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
          <span className="text-2xl">🧾</span> История заказов
        </h2>
        {/* Фильтр заказов */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {filters.map((f) => (
            <Button
              key={f.value}
              size="lg"
              onClick={() => setOrderFilter(f.value)}
              className={
                orderFilter === f.value
                  ? "bg-white text-black  border-1 border-black/30 hover:bg-white rounded-full"
                  : "bg-black text-white hover:bg-white hover:text-black hover:scale-105 transition-all border-1 border-black/30 rounded-full"
              }
            >
              {f.label}
            </Button>
          ))}
        </div>
        {/* Отфильтрованные заказы */}
        {(() => {
          const filtered =
            orderFilter === "all"
              ? orders
              : orders.filter((o) => o.status === orderFilter);
          return (
            <div className="space-y-6">
              {filtered.length === 0 ? (
                <div className="text-gray-400 text-center">Нет заказов</div>
              ) : (
                filtered.map((order, idx) => (
                  <motion.div
                    key={order.id}
                    className={`relative bg-white rounded-xl shadow p-6 pl-8 border-l-4 ${
                      statusColors[order.status]
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">Заказ #{order.id}</p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg text-orange-600">
                          {order.total} ₽
                        </p>
                        <p
                          className={`text-xs font-medium mt-1 ${
                            statusTextColors[order.status]
                          }`}
                        >
                          {getStatusText(order.status)}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 mt-2">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm text-gray-700"
                        >
                          <span>
                            {item.name}{" "}
                            <span className="text-gray-400">
                              x {item.quantity}
                            </span>
                          </span>
                          <span>{item.price * item.quantity} ₽</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          );
        })()}
      </motion.div>
    </motion.div>
  );
}
