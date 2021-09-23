import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const resize = window.addEventListener("resize", () =>
      setScreenWidth(window.innerWidth)
    );

    return () => window.removeEventListener("resize", resize);
  }, []);

  return screenWidth;
};

export const useOffline = () => {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const online = window.addEventListener("online", () => setOffline(false));
    const offline = window.addEventListener("offline", () => setOffline(true));

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return offline;
};
