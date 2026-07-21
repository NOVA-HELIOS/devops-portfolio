import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="w-28 h-28 mx-auto"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.h1
          className="text-3xl font-bold mt-6 text-cyan-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Veera Bhaskara
        </motion.h1>

        <motion.div
          className="w-64 h-2 bg-gray-700 rounded-full mt-6 overflow-hidden mx-auto"
        >
          <motion.div
            className="h-full bg-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
