import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState, useEffect } from "react";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "./hooks/locomotive.css";

const Layout = () => {
  const scrollRef = useRef(null);

  const options = {
    smooth: true,
    smartphone: {
      smooth: true,
      touchMultiplier: 3, // Adjust touchMultiplier for smoother scrolling on touch devices
    },
    tablet: {
      smooth: true,
      touchMultiplier: 2, // Adjust touchMultiplier for smoother scrolling on tablets
    },
    reloadOnContextChange: true, // Optional: reloads the scroll context when context (like a font or a container width) changes
    lerp: 0.07, // Optional: adjust lerp for smoothness; higher values for faster response, lower values for smoother motion
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <LocomotiveScrollProvider options={options} containerRef={scrollRef}>
          <div data-scroll-container ref={scrollRef} id="main" className="relative">
            <Navbar />
            <div className="flex flex-col min-h-screen">
              <Outlet />
            </div>
            <Footer />
          </div>
        </LocomotiveScrollProvider>
      )}
    </>
  );
};

export default Layout;
