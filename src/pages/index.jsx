import Layout from "../../components/Layout";
import About from "./about";
import Image from "next/legacy/image";
import Link from "next/link";
import TypewriterReact from "../../components/Typewriter";
import { motion } from "framer-motion";
import { containerVariants, linkVariants } from "../../helpers/animation";

function Index() {
  return (
    <Layout
      title={"Home"}
      description={"RC - Web, Randy Caballero, Portfolio, Home"}
    >
      <motion.div
        className="flex flex-col items-center justify-center h-screen w-screen text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p className="text-white text-opacity-40 lg:text-7xl md:text-5xl sm:text-3xl text-2xl">
          {"Hello, I'm Randy Caballero"}
        </p>

        <TypewriterReact />

        <div className="flex flex-col">
          <label className="text-slate-400 text-center font-semibold uppercase text-sm mt-10">
            Download my resume
          </label>
          <Link
            target="_blank"
            href="/pdf/Randy-Caballero.pdf"
            download="Randy-Caballero.pdf"
            className="text-center p-2"
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <Image
                src="/img/download.png"
                width={40}
                height={40}
                alt="download image"
                priority
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Index;
