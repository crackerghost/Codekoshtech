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
    },
    tablet: {
      smooth: true,
    },
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
              <Footer />
            </div>
          </div>
        </LocomotiveScrollProvider>
      )}
    </>
  );
};

export default Layout;
