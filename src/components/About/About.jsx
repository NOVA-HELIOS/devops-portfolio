import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#07111f] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <motion.img
          src="/profile.png"
          alt="Veera"
          className="rounded-3xl w-full max-w-md mx-auto shadow-2xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-cyan-400 mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-8">
            I'm Veera Bhaskara Durga Prasad, a Cloud & DevOps Engineer passionate
            about building scalable cloud infrastructure and automating deployments.
            I enjoy working with AWS, Docker, Kubernetes, Terraform, Jenkins, and
            GitHub Actions while continuously improving my DevOps skills.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-cyan-400 font-bold">Education</h3>
              <p className="text-gray-300 mt-2">
                B.Tech – Electronics & Communication Engineering
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-cyan-400 font-bold">Current Focus</h3>
              <p className="text-gray-300 mt-2">
                AWS • Kubernetes • Terraform • CI/CD
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
