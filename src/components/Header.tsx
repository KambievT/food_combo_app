"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MyModal from "./MyModal";
import { useUserStore } from "@/lib/userStore";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const accessToken = useUserStore((state) => state.accessToken);
  const pathname = usePathname();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b pb-2">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo5.jpg"
              alt=""
              width={65}
              height={100}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className={
                "border-1 border-black/30 py-2 px-3 rounded-full transition-all " +
                (pathname === "/"
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-white hover:text-black hover:scale-105")
              }
            >
              Главная
            </Link>
            <Link
              href="/menu"
              className={
                "border-1 border-black/30 py-2 px-3 rounded-full transition-all " +
                (pathname === "/menu"
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-white hover:text-black hover:scale-105")
              }
            >
              Меню
            </Link>
            <Link
              href="/profile"
              className={
                "border-1 border-black/30 py-2 px-3 rounded-full transition-all " +
                (pathname === "/profile"
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-white hover:text-black hover:scale-105")
              }
            >
              Профиль
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-6">
            <Link href="/cart">
              <Button
                className="text-foreground/80 bg-white border-1 border-black/30  hover:text-white hover:bg-black"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </Link>
            {!accessToken && (
              <Link href="/auth/login">
                <Button
                  color="default"
                  className="border-1 border-black/30 py-2 px-3 rounded-xl bg-black text-white hover:bg-white hover:scale-105 hover:text-black transition-all font-medium"
                >
                  Войти
                </Button>
              </Link>
            )}
            <Button
              className="md:hidden text-foreground/80  bg-white border-1 border-black/30 hover:text-white hover:bg-black"
              aria-label="Menu"
              onClick={handleOpen}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <MyModal isOpen={isOpen} handleClose={handleClose} />
    </header>
  );
}
