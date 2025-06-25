import { create } from "zustand";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.find((i) => i.id === item.id);
      if (exists) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),
}));
