import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">

        <div>

          <h3 className="text-cyan-400 text-xl mb-4">
            Hello, I'm
          </h3>

          <h1 className="text-6xl font-bold text-white">
            Veera Bhaskara
          </h1>

          <h2 className="text-3xl mt-6 text-gray-300">
            <Typewriter
              words={[
                "Cloud Engineer",
                "DevOps Engineer",
                "AWS Enthusiast",
                "Kubernetes Learner"
              ]}
              loop
              cursor
            />
          </h2>

          <p className="text-gray-400 mt-8 leading-8 max-w-xl">
            Passionate Cloud & DevOps Engineer with hands-on experience in AWS,
            Docker, Kubernetes, Terraform, GitHub Actions, and CI/CD automation.
          </p>

          <div className="mt-10 flex gap-5">

            <a
              href="#contact"
              className="px-8 py-4 bg-cyan-500 rounded-xl"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border border-cyan-500 rounded-xl"
            >
              Download Resume
            </a>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src="/profile.png"
            alt="profile"
            className="rounded-full w-[420px] mx-auto border-4 border-cyan-500 shadow-[0_0_80px_#00E5FF]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
