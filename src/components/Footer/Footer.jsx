import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>

            <img
              src="/logo.png"
              alt="logo"
              className="w-20 mb-4"
            />

            <h2 className="text-2xl font-bold">
              Veera Bhaskara
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Cloud & DevOps Engineer passionate about AWS,
              Kubernetes, Docker, Terraform and CI/CD Automation.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/NOVA-HELIOS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28}/>
              </a>

              <a
                href="https://www.linkedin.com/in/koujuluri-veera-bhaskara-durga-prasad-a926a7379"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28}/>
              </a>

              <a
                href="mailto:veerabhaaskar90006@gmail.com"
              >
                <FaEnvelope size={28}/>
              </a>

            </div>

          </div>

        </div>

        <hr className="my-10 border-white/10"/>

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">

            © {new Date().getFullYear()} Veera Bhaskara Durga Prasad

          </p>

          <p className="text-cyan-400">

            Built with React • Vite • Tailwind CSS

          </p>

          <a
            href="#home"
            className="bg-cyan-500 p-3 rounded-full mt-6 md:mt-0 hover:bg-cyan-600 transition"
          >
            <FaArrowUp/>
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
