"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">О нас</h3>
            <p className="text-foreground/80">
              Уютное кафе с лучшими блюдами и напитками для вас
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Контакты</h3>
            <ul className="space-y-4 text-foreground/80">
              <li>Адрес: ул. Примерная, 123</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@cafe.ru</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Часы работы</h3>
            <ul className="space-y-4 text-foreground/80">
              <li>Пн-Пт: 8:00 - 22:00</li>
              <li>Сб-Вс: 9:00 - 23:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Cafe. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
