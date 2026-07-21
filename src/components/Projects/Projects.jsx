import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
} from "react-icons/si";

const projects = [
  {
    title: "GitHub → EKS CI/CD Pipeline",
    image: "/projects/cicd.png",
    description:
      "Complete CI/CD pipeline using GitHub Actions, Docker, Amazon ECR and Amazon EKS.",
    github: "https://github.com/NOVA-HELIOS/train-ticket-reservation",
    demo: "#",
    tech: [
      "GitHub Actions",
      "Docker",
      "Amazon ECR",
      "Amazon EKS",
      "Kubernetes",
    ],
    icon: <SiGithubactions className="text-blue-400 text-5xl" />,
  },

  {
    title: "AWS Three-Tier Architecture",
    image: "/projects/aws-3tier.png",
    description:
      "Designed a scalable AWS architecture using VPC, EC2, ALB, Auto Scaling and RDS.",
    github: "#",
    demo: "#",
    tech: [
      "AWS",
      "VPC",
      "EC2",
      "RDS",
      "ALB",
    ],
    icon: <FaAws className="text-orange-400 text-5xl" />,
  },

  {
    title: "Terraform Infrastructure",
    image: "/projects/terraform.png",
    description:
      "Provisioned AWS infrastructure using Terraform with reusable modules.",
    github: "#",
    demo: "#",
    tech: [
      "Terraform",
      "AWS",
      "IAM",
      "VPC",
    ],
    icon: <SiTerraform className="text-purple-400 text-5xl" />,
  },

  {
    title: "Kubernetes Deployment",
    image: "/projects/kubernetes.png",
    description:
      "Containerized and deployed microservices into Kubernetes with rolling updates.",
    github: "#",
    demo: "#",
    tech: [
      "Docker",
      "Kubernetes",
      "YAML",
    ],
    icon: <SiKubernetes className="text-blue-500 text-5xl" />,
  },

  {
    title: "Dockerized React Application",
    image: "/projects/react-app.png",
    description:
      "React application packaged with Docker and deployed using Nginx.",
    github: "#",
    demo: "#",
    tech: [
      "React",
      "Docker",
      "Nginx",
    ],
    icon: <FaDocker className="text-blue-400 text-5xl" />,
  },

  {
    title: "DevOps Portfolio",
    image: "/projects/portfolio.png",
    description:
      "Modern portfolio built using React, Tailwind CSS, Framer Motion and GitHub Pages.",
    github: "https://github.com/NOVA-HELIOS/devops-portfolio",
    demo: "#",
    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
      "GitHub Pages",
    ],
    icon: <FaGithub className="text-white text-5xl" />,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-5xl font-bold text-cyan-400"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Real DevOps projects built with AWS and Kubernetes
        </p>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <div className="mb-5">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-xl"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-500 px-5 py-3 rounded-xl"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
