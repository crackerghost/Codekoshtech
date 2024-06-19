import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState, useEffect } from "react";
import "./hooks/locomotive.css";

const Layout = () => {
  const scrollRef = useRef(null);

  const options = {
    smooth: true,
    tablet: {
      smooth: true,
    },
    smartphone: {
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
          <main data-scroll-container ref={scrollRef} id="main" className="bg-black">
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
