import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState, useEffect } from "react";
import "./hooks/locomotive.css";

const Layout = () => {
  const scrollContainerRef = useRef(null);

  const options = {
    smooth: true,
    tablet: true, // Enable smooth scrolling on tablets
    smartphone: true, // Enable smooth scrolling on smartphones
    getSpeed: 1000, // Adjust the speed if needed (default is 50)
    getDirection: "vertical", // Ensure vertical scrolling
    touchMultiplier: 2.5, // Increase touch sensitivity for smoother scrolling
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
        <LocomotiveScrollProvider options={options} containerRef={scrollContainerRef}>
          <main data-scroll-container ref={scrollContainerRef} id="main" className="bg-black">
            <Navbar />
            <Outlet />
            <Footer />
          </main>
        </LocomotiveScrollProvider>
      )}
    </>
  );
};

export default Layout;
