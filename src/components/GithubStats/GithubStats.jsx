import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaUsers,
  FaBook,
} from "react-icons/fa";

const GithubStats = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/NOVA-HELIOS")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) {
    return (
      <section className="bg-[#050816] py-24 text-center text-white">
        Loading GitHub Stats...
      </section>
    );
  }

  const stats = [
    {
      title: "Repositories",
      value: user.public_repos,
      icon: <FaBook size={35} className="text-cyan-400" />,
    },
    {
      title: "Followers",
      value: user.followers,
      icon: <FaUsers size={35} className="text-green-400" />,
    },
    {
      title: "Following",
      value: user.following,
      icon: <FaCodeBranch size={35} className="text-yellow-400" />,
    },
    {
      title: "GitHub",
      value: user.login,
      icon: <FaGithub size={35} className="text-white" />,
    },
  ];

  return (
    <section
      id="github"
      className="bg-[#050816] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-5xl font-bold text-cyan-400"
        >
          GitHub Dashboard
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Live data from my GitHub profile
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

        <div className="text-center mt-12">

          <a
            href="https://github.com/NOVA-HELIOS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600 transition"
          >
            <FaGithub />
            Visit GitHub
          </a>

        </div>

      </div>
    </section>
  );
};

export default GithubStats;
