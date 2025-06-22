import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/constants";

export const useGetProfile = () => {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/auth/profile`, {
          credentials: "include",
        });
        if (!res.ok)
          throw new Error("Не удалось получить профиль пользователя");
        const data = await res.json();
        setProfile({ name: data.user.name, email: data.user.email });
      } catch (e) {
        setError(e instanceof Error ? e.message : "Ошибка получения профиля");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return { profile, loading, error };
};
