import React, {
  useEffect,
  useMemo,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { CartItemModel } from "../utils/interfaces/AppInterfaces";

interface ChildrenProp {
  children: React.ReactNode;
}

interface Values {
  scrolled: boolean;
  activeNav: string;
  cartItems: CartItemModel[];
  setCartItems: Dispatch<SetStateAction<CartItemModel[]>>;
  setActiveNav: Dispatch<SetStateAction<string>>;
}

export const ApplicationContext = createContext<Values | null>(null);

function AppContext({ children }: ChildrenProp) {
  const [activeNav, setActiveNav] = useState<string>("Home");
  const [cartItems, setCartItems] = useState<CartItemModel[]>([]);

  // INITIALIZE A STATE TO TRACK IF THE PAGE IS SCROLLED
  const [scrolled, setScrolled] = useState<boolean>(false);

  // HANDLE THE SCROLL EVENT. CHANGE VARIABLES WHEN SCROLLED
  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // ATTACH THE FUNCTION TO THE SCROLL EVENT LISTENER ON MOUNT
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // SET THE VALUES
  const values = useMemo(() => {
    const items: Values = {
      scrolled,
      cartItems,
      setCartItems,
      activeNav,
      setActiveNav,
    };
    return items;
  }, [activeNav, cartItems, scrolled]);

  return (
    <ApplicationContext.Provider value={values}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default AppContext;
