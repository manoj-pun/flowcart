import { create } from "zustand";
import { Product, CartItem } from "@/types/product";

type Store = {
  // Mobile menu
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  // Wishlist
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;

  // Quick view
  selectedProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
};

export const useStore = create<Store>((set) => ({
  isMobileMenuOpen: false,

  toggleMobileMenu: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
    })),

  closeMobileMenu: () =>
    set({
      isMobileMenuOpen: false,
    }),

  wishlist: [],

  toggleWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return {
          wishlist: state.wishlist.filter(
            (item) => item.id !== product.id
          ),
        };
      }

      return {
        wishlist: [...state.wishlist, product],
      };
    }),

  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                ...item,
                quantity: item.quantity + 1,
              }
              : item
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== productId
      ),
    })),

  increaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === productId
            ? {
              ...item,
              quantity: item.quantity - 1,
            }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  selectedProduct: null,

  openQuickView: (product) =>
    set({
      selectedProduct: product,
    }),

  closeQuickView: () =>
    set({
      selectedProduct: null,
    }),
}));