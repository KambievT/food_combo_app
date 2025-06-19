"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GrGoogle } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/userStore";

import * as z from "zod";
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
  name: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2 символов." }),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать не менее 6 символов." }),
});

const RegisterPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  const router = useRouter();
  const setAccessToken = useUserStore((state) => state.setAccessToken);

  const PostRegister = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      setAccessToken(data.access_token);
      router.push("/profile");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    PostRegister(values);
  }

  const handleGoogleRegister = () => {
    window.location.href = "http://localhost:3001/auth/google";
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
          Создать аккаунт
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Есть аккаунт?{" "}
          <Link
            href="/auth/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Войти в него
          </Link>
        </p>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center py-2 px-4 rounded-lg border border-gray-300 text-gray-700 mb-6 hover:bg-gray-50"
          onClick={handleGoogleRegister}
        >
          <GrGoogle className="mr-2 h-5 w-5" /> Продолжить с Google
        </Button>

        {/* OR Separator */}
        <div className="relative w-full flex justify-center items-center mb-6">
          <div className="absolute w-full border-t border-gray-300"></div>
          <span className="relative bg-white px-3 text-gray-500 text-sm">
            Или
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          Введите ваш адрес электронной почты для создания аккаунта.
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваше имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Ваше имя" {...field} />
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
              Создать аккаунт
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
