import { motion } from "framer-motion";
import { headerVariants } from "../helpers/animation";

const AboutHeader = () => {
  return (
    <motion.div
      className="w-full"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      exit={"exit"}
    >
      <div className="flex flex-col ">
        <h1 className="text-slate-200 text-center text-3xl font-bold uppercase mb-2 pt-12">
          About Me
        </h1>
        <p className="text-opacity-50 text-white text-center text-md mb-4 uppercase">
          Relevant personal information
        </p>
        <div className="w-16 content-none mx-auto h-2 bg-blue-300"></div>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
