import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaGithub,
  FaDocker,
  FaAws,
  FaGlobe,
} from "react-icons/fa";

import { SiGithubactions, SiKubernetes } from "react-icons/si";

const pipeline = [
  {
    title: "Developer",
    icon: <FaLaptopCode size={45} className="text-cyan-400" />,
  },
  {
    title: "GitHub",
    icon: <FaGithub size={45} className="text-white" />,
  },
  {
    title: "GitHub Actions",
    icon: <SiGithubactions size={45} className="text-blue-400" />,
  },
  {
    title: "Docker",
    icon: <FaDocker size={45} className="text-blue-500" />,
  },
  {
    title: "Amazon ECR",
    icon: <FaAws size={45} className="text-orange-400" />,
  },
  {
    title: "Amazon EKS",
    icon: <SiKubernetes size={45} className="text-blue-500" />,
  },
  {
    title: "Production",
    icon: <FaGlobe size={45} className="text-green-400" />,
  },
];

const Pipeline = () => {
  return (
    <section
      id="pipeline"
      className="bg-[#07111f] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-5xl font-bold text-cyan-400"
        >
          DevOps CI/CD Pipeline
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          From code commit to production deployment
        </p>

        <div className="grid md:grid-cols-7 gap-6 items-center">

          {pipeline.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>

                <h3 className="font-semibold text-white">
                  {step.title}
                </h3>
              </div>

              {index !== pipeline.length - 1 && (
                <div className="hidden md:flex justify-center mt-4 text-cyan-400 text-3xl">
                  ↓
                </div>
              )}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Pipeline;
