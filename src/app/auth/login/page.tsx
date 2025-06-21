"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/userStore";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Неверный адрес электронной почты." }),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать не менее 6 символов." }),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const setAccessToken = useUserStore((state) => state.setAccessToken);

  function onSubmit(values: z.infer<typeof formSchema>) {
    PostLogin(values);
  }

  const PostLogin = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setAccessToken(data.access_token);
      router.push("/profile");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-lg flex flex-col items-center p-8 max-w-md w-full relative"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Войти в аккаунт
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Нет аккаунта?{" "}
          <Link
            href="/auth/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Создать
          </Link>
        </p>

        <p className="text-gray-600 text-sm mb-4">
          Введите вашу почту и пароль от аккаунта и войдите в него
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваш Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваш пароль</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-black hover:bg-white hover:text-black hover:scale-105 border-1 border-black/30 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out w-full"
            >
              Войти
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
