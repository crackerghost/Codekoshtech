import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState, useEffect } from "react";
import { debounce } from "lodash";
import { isMobile } from "react-device-detect"; // Import from react-device-detect

import "locomotive-scroll/dist/locomotive-scroll.css";
import "./hooks/locomotive.css";

const Layout = () => {
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get current location from React Router

  // Determine scroll options based on device type
  const options = {
    smooth: isMobile ? 0.5 : 1.0, // Adjust smooth value based on device type
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  // Debounced scroll handler to improve performance
  useEffect(() => {
    const handleScroll = debounce(() => {
      // Handle scroll events here
    }, 100); // Adjust debounce delay as needed

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to update locomotive-scroll instance on route change
  useEffect(() => {
    if (scrollRef.current) {
      // Cleanup existing scroll instance
      scrollRef.current.destroy();

      // Initialize new instance with updated props
      scrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        ...options,
      });

      // Update scroll instance when route changes
      scrollRef.current.update();
    }
  }, [location.pathname]); // Listen to location.pathname changes

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
