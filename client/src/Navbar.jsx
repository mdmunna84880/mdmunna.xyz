import { useState } from "react";
import Professional from "./assets/Professional.jpg";
function Navbar() {
  const [isManuOpen, setIsManuOpen] = useState(false);

  function handleManu() {
    setIsManuOpen(!isManuOpen);
  }

  return (
    <header className="h-24 w-full bg-[#F9FAFB] text-[#1E3A8A]">
      <nav className="w-full h-full flex justify-between items-center px-8">
        <div className="flex gap-5 items-center justify-center">
          <a href="#">
            <img
              src={Professional}
              alt="mypicture"
              className="h-16 w-16 rounded-full transition duration-300 hover:scale-110 hover:shadow-[0_0_15px_#06B6D4]"
            />
          </a>
          <a href="#" className="hover:text-[#06B6D4]">
            <h1>Md Munna</h1>
          </a>
        </div>
        <div
          className="flex flex-col gap-1.5 cursor-pointer"
          onClick={handleManu}
        >
          <div
            className={`w-8 h-1 rounded-sm bg-[#00BFA6] transition-transform duration-300 ease-in-out
      ${isManuOpen ? "rotate-45 translate-y-3" : ""}`}
          ></div>

          <div
            className={`w-8 h-1 rounded-sm bg-[#00BFA6] transition-all duration-300
      ${isManuOpen ? "opacity-0" : "opacity-100"}`}
          ></div>

          <div
            className={`w-8 h-1 rounded-sm bg-[#00BFA6] transition-transform duration-300
      ${isManuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <a href="#projects" className="hover:text-[#06B6D4]">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-[#06B6D4]">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#06B6D4]">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#06B6D4]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#06B6D4]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
