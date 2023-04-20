import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { linkVariants } from "../helpers/animation";

function Footer() {
  return (
    <footer className="flex align-bottom justify-around items-center h-40 bg-black opacity-95">
      <nav className="flex items-center relative gap-2 mx-4">
        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="https://github.com/caballerorandy6" target="_blank">
            <Image
              src="/social/github.png"
              width={25}
              height={25}
              alt="github image"
              priority
            />
          </Link>
        </motion.div>

        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="https://linkedin.com/in/caballerorandy" target="_blank">
            <Image
              src="/social/linkedin.png"
              width={25}
              height={25}
              alt="github image"
              priority
            />
          </Link>
        </motion.div>

        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="https://twitter.com/caballerorandy6" target="_blank">
            <Image
              src="/social/twitter.png"
              width={25}
              height={25}
              alt="github image"
              priority
            />
          </Link>
        </motion.div>
      </nav>

      <div className="flex flex-col mt-8">
        <p className="text-slate-200 text-center text-xs font-semibold">
          Developed with
        </p>
        <Image
          src="/footer/nextjs.png"
          width={150}
          height={80}
          alt="github image"
          priority
        />
      </div>

      <p className="text-slate-200 text-center text-xs font-semibold">
        {`© ${new Date().getFullYear()}  All rights reserved.`}
      </p>
    </footer>
  );
}

export default Footer;
