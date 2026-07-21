import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12"
          />

          <h1 className="text-white font-bold text-xl">
            Veera
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        <Menu className="md:hidden text-white"/>
      </div>
    </nav>
  );
};

export default Navbar;
