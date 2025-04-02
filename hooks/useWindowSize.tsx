import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

// Modified to return an object with a size property
interface WindowSizeReturn {
  size: WindowSize;
}

const useWindowSize = (): WindowSizeReturn => {
  const [size, setSize] = useState<WindowSize>(() => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return {
      width: 0,
      height: 0,
    };
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { size }; // Return an object with a size property
};

export default useWindowSize;
