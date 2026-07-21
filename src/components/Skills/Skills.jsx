import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaJava,
  FaGithub,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
  SiGithubactions,
} from "react-icons/si";

const skills = [
  { name: "AWS", icon: <FaAws size={45} className="text-orange-400" /> },
  { name: "Docker", icon: <FaDocker size={45} className="text-blue-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={45} className="text-blue-500" /> },
  { name: "Terraform", icon: <SiTerraform size={45} className="text-purple-400" /> },
  { name: "Jenkins", icon: <SiJenkins size={45} className="text-red-400" /> },
  { name: "GitHub", icon: <FaGithub size={45} className="text-white" /> },
  { name: "GitHub Actions", icon: <SiGithubactions size={45} className="text-blue-300" /> },
  { name: "Linux", icon: <FaLinux size={45} className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava size={45} className="text-red-500" /> },
  { name: "Prometheus", icon: <SiPrometheus size={45} className="text-orange-500" /> },
  { name: "Grafana", icon: <SiGrafana size={45} className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[#050816] px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-cyan-400"
        >
          Technical Skills
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Cloud • DevOps • Automation • Monitoring
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center shadow-xl hover:border-cyan-400"
            >
              <div className="flex justify-center mb-6">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
