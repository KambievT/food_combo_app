"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { API_BASE_URL } from "@/constants";

function GoogleCallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      const token = searchParams.get("token");
      const error = searchParams.get("error");

      if (error) {
        console.error("Google auth error:", error);
        router.push("/auth/login");
        return;
      }

      if (token) {
        // Сохраняем токен в localStorage
        localStorage.setItem("token", token);

        // Получаем данные пользователя
        try {
          const response = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const userData = await response.json();
            localStorage.setItem("user", JSON.stringify(userData));
            router.push("/"); // Перенаправляем на главную страницу
          } else {
            throw new Error("Failed to get user data");
          }
        } catch (error) {
          console.error("Error getting user data:", error);
          router.push("/auth/login");
        }
      } else {
        router.push("/auth/login");
      }
    };

    handleCallback();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Обработка входа...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    </div>
  );
}

export default function GoogleCallback() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <GoogleCallbackInner />
    </Suspense>
  );
}
