import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import LocomotiveScroll from "locomotive-scroll";
import "./hooks/locomotive.css";
import { useRef, useState } from "react";
import { useEffect } from "react";

const Layout = () => {
  const scrollRef = useRef(null);

  const options = {
    smooth: true,
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
        <LocomotiveScrollProvider options={options} scrollRef={scrollRef}>
          <main data-scroll-container ref={scrollRef} id="main">
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
