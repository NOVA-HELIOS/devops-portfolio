import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";

const timeline = [
  {
    year: "2024",
    title: "Started Cloud & DevOps Journey",
    description:
      "Learned Linux, Git, GitHub, and Bash scripting fundamentals.",
    icon: <FaLinux />,
    color: "text-yellow-400",
  },
  {
    year: "2025",
    title: "Containerization",
    description:
      "Built and deployed applications using Docker and Docker Compose.",
    icon: <FaDocker />,
    color: "text-blue-400",
  },
  {
    year: "2025",
    title: "CI/CD Automation",
    description:
      "Created CI/CD pipelines using GitHub Actions and Jenkins.",
    icon: <SiJenkins />,
    color: "text-red-400",
  },
  {
    year: "2026",
    title: "AWS Cloud",
    description:
      "Worked with EC2, IAM, VPC, S3, ECR, ECS, EKS and CloudWatch.",
    icon: <FaAws />,
    color: "text-orange-400",
  },
  {
    year: "2026",
    title: "Kubernetes & Terraform",
    description:
      "Automated infrastructure using Terraform and deployed workloads to Kubernetes.",
    icon: <SiTerraform />,
    color: "text-purple-400",
  },
  {
    year: "Present",
    title: "Cloud & DevOps Engineer",
    description:
      "Building production-ready DevOps projects and continuously learning cloud technologies.",
    icon: <SiKubernetes />,
    color: "text-blue-500",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#07111f] px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-bold text-cyan-400"
        >
          My Journey
        </motion.h2>

        <p className="text-center text-gray-400 mt-4 mb-20">
          My learning path in Cloud & DevOps
        </p>

        <div className="relative border-l-2 border-cyan-500 ml-6">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 ml-10"
            >
              <div
                className={`absolute -left-5 w-10 h-10 rounded-full bg-[#050816] border-2 border-cyan-400 flex items-center justify-center text-xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h4 className="text-cyan-400 font-bold">
                {item.year}
              </h4>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
