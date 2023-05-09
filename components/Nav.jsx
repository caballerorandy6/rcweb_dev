import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { linkVariants } from "../helpers/animation";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="w-full flex flex-col sm:flex-row  text-slate-200">
      <Link
        href="/"
        className="text-slate-200 font-bold p-4 sm:p-8 cursor-pointer bg-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto sm:w-3/12 w-4/12 sm:text-start text-center"
      >
        RC Web
      </Link>

      <div className="flex items-center justify-center mx-auto gap-4 sm:gap-8 font-bold uppercase text-xs sm:text-lg w-9/12 lg:text-lg">
        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className="flex items-center gap-2 text"
        >
          <Link
            href="/"
            className={
              router.pathname === "/"
                ? "text-blue-300"
                : " hover:text-blue-300 "
            }
          >
            Home
          </Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className="flex items-center gap-2"
        >
          <Link
            href="/about"
            className={
              router.pathname === "/about"
                ? "text-blue-300"
                : " hover:text-blue-300"
            }
          >
            About Me
          </Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className="flex items-center gap-2"
        >
          <Link
            href="/portfolio"
            className={
              router.pathname === "/portfolio"
                ? "text-blue-300"
                : " hover:text-blue-300"
            }
          >
            Portfolio
          </Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className="flex items-center gap-2"
        >
          <Link
            href="/contact"
            className={
              router.pathname === "/contact"
                ? "text-blue-300"
                : " hover:text-blue-300"
            }
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
