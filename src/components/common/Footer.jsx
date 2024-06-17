import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";

const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      target="blank"
      className="hover:border-gray-100 border-b border-transparent  font-normal flex items-center gap-2"
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <>
      <div
        className="w-screen h-[60vh] md:h-screen bg-transparent relative !-z-1 overflow-x-hidden"
        data-scroll
      ></div>
      <footer
        className="fixed bottom-0 !-z-1 w-full mx-auto rounded-md h-[90%] pt-[20vh] overflow-hidden"
        data-scroll
      >
        <div className="leftAnime anime"></div>
        <div className="topAnime anime"></div>
        <div className="rightAnime anime"></div>
        <div className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-white flex flex-col md:flex-row justify-between w-11/12 mx-auto my-[8vh] md:my-[4vw] gap-8">
            <div className="flex flex-col text-xl md:text-2xl font-bold space-y-3 md:space-y-6">
              <FooterLink to="#service">Work</FooterLink>
              <FooterLink to="#about">About us</FooterLink>
              <FooterLink to="#contact">Contact</FooterLink>
            </div>
            <div className="right">
              <p className="text-white my-4 text-xl md:text-2xl border-b pb-1">
                {` Let's Bring Your Vision to Life!`}
              </p>
              <SecondaryButton>Get in touch</SecondaryButton>
            </div>
          </div>
          <h1 className="text-white text-6xl md:text-[9vw] font-bold text-center uppercase ">
            Codekosh tech
          </h1>
          <ul className="w-11/12 mx-auto grid grid-cols-2 md:flex flex-row justify-between items-center gap-4 -mb-14 border-t border-gray-200 md:border-gray-600 text-white py-4 md:py-12 text-sm md:text-base">
            <li>2024©Codekoshtech</li>
            <li>
              <FooterLink to="tel:+91 63777 18671">
                <FaPhoneFlip />
                +91 63777 18671
              </FooterLink>
            </li>
            <li>
              <FooterLink to="https://www.instagram.com/Codekoshtech">
                <IoLogoInstagram />
                Instagram
              </FooterLink>
            </li>
            <li>
              <FooterLink to="www.linkedin.com/in/Codekoshtech">
                <IoLogoLinkedin />
                LinkedIn
              </FooterLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
