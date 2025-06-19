"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserStore } from "@/lib/userStore";

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

export default function Profile() {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
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

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3001/auth/profile", {
          credentials: "include",
        });
        if (!res.ok)
          throw new Error("Не удалось получить профиль пользователя");
        const data = await res.json();
        setProfile({ name: data.user.name, email: data.user.email });
      } catch (e: any) {
        setError(e.message || "Ошибка получения профиля");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3001/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {}
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

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Профиль</h1>
      {loading === true && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <div className="space-y-2">
            <div>
              <Skeleton className="w-[150px ] h-[30px] my-2" />
            </div>
            <hr />
            <div>
              <Skeleton className="w-[150px ] h-[30px] my-2" />
            </div>
            <hr />
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-white hover:border-1 hover:border-red-600 hover:text-red-600 hover:scale-105 transition-all"
          >
            Выйти
          </button>
        </div>
      )}
      {profile && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <div className="space-y-2">
            <div className="my-3">
              <span className="font-medium">Имя: </span>
              <span>{profile.name}</span>
            </div>
            <hr />
            <div className="my-3">
              <span className="font-medium">Email: </span>
              <span>{profile.email}</span>
            </div>
            <hr />
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-white hover:border-1 hover:border-red-600 hover:text-red-600 hover:scale-105 transition-all"
          >
            Выйти
          </button>
        </div>
      )}
      {error && (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center text-red-500">
          {error}
        </div>
      )}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">История заказов</h2>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium">Заказ #{order.id}</p>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.total} ₽</p>
                  <p className="text-sm text-gray-600">
                    {getStatusText(order.status)}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>{item.price * item.quantity} ₽</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
