"use client";

import { useCartStore } from "@/lib/cartStore";
import Link from "next/link";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Корзина</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Ваша корзина пуста</p>
          <Link
            href="/menu"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            Перейти в меню
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.price} ₽</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 ml-2"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-4 mt-8">
            <span className="text-lg">Итого:</span>
            <span className="text-2xl font-bold">{total} ₽</span>
          </div>
          <Link
            href="/checkout"
            className="block w-full bg-black text-white text-center py-3 rounded-md hover:bg-gray-800"
          >
            Оформить заказ
          </Link>
        </>
      )}
    </div>
  );
}
