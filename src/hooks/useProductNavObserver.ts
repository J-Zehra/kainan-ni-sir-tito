import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ApplicationContext } from "../context/AppContext";

function useProductNavObserver(pageName: string) {
  const context = useContext(ApplicationContext);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      context?.setActiveProductNav(pageName);
    }
  }, [ref, isInView, context, pageName]);

  return { ref };
}

export default useProductNavObserver;
