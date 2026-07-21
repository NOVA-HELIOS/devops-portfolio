import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#07111f] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center text-cyan-400"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Let's build something amazing together.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}

          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  veerabhaaskar90006@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <FaPhone className="text-green-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +91 9908898040
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <FaMapMarkerAlt className="text-red-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Andhra Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">

              <a
                href="https://github.com/NOVA-HELIOS"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-cyan-500 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/koujuluri-veera-bhaskara-durga-prasad-a926a7379"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-blue-500 transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="bg-cyan-500 px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-cyan-600 transition"
              >
                <FaDownload />
                Resume
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none resize-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
