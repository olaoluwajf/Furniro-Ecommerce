import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const parsePrice = (p) => Number(String(p).replace(/[^0-9]/g, "") || 0);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) =>
    setCart((prev) =>
      prev.some((i) => i.id === product.id) ? prev : [...prev, product]
    );

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const toggleCartItem = (product) =>
    setCart((prev) =>
      prev.some((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    );

  const subtotal = cart.reduce((sum, item) => sum + parsePrice(item.price), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, toggleCartItem, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
