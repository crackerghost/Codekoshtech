import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState, useEffect } from "react";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "./hooks/locomotive.css";
const StickyOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowOverlay(scrollY > 100); // Adjust this value as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showOverlay ? (
    <div className="fixed bottom-0 w-full h-full bg-black opacity-75 z-50"></div>
  ) : null;
};

const Layout = () => {
  const scrollRef = useRef(null);
  const options = {
    smooth: true
    // Add any other options you need
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
          <div data-scroll-container ref={scrollRef} id="main">
            <Navbar />
            <div className="flex flex-col min-h-screen">
              <Outlet />
              <Footer />
            </div>
          </div>
          <StickyOverlay />
        </LocomotiveScrollProvider>
      )}
    </>
  );
};

export default Layout;