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
  activeProductNav: string;
  cartItems: CartItemModel[];
  setCartItems: Dispatch<SetStateAction<CartItemModel[]>>;
  setActiveNav: Dispatch<SetStateAction<string>>;
  setActiveProductNav: Dispatch<SetStateAction<string>>;
}

export const ApplicationContext = createContext<Values | null>(null);

function AppContext({ children }: ChildrenProp) {
  const [activeNav, setActiveNav] = useState<string>("Home");
  const [activeProductNav, setActiveProductNav] = useState("Ko-Tea");
  const [cartItems, setCartItems] = useState<CartItemModel[]>([]);

  // INITIALIZE A STATE TO TRACK IF THE PAGE IS SCROLLED
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isLocalStorageLoaded, setIsLocalStorageLoaded] =
    useState<boolean>(false);

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
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    setIsLocalStorageLoaded(true);
  }, []);

  useEffect(() => {
    if (isLocalStorageLoaded) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, isLocalStorageLoaded]);

  // SET THE VALUES
  const values = useMemo(() => {
    const items: Values = {
      scrolled,
      activeProductNav,
      setActiveProductNav,
      cartItems,
      setCartItems,
      activeNav,
      setActiveNav,
    };
    return items;
  }, [activeNav, activeProductNav, cartItems, scrolled]);

  return (
    <ApplicationContext.Provider value={values}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default AppContext;
