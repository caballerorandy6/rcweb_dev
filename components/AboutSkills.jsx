import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { secondVariants } from "../helpers/animation";

const AboutSkills = () => {
  return (
    <motion.div
      className="w-11/12 mt-20 bg-neutral-900 p-10 shadow-md mx-auto mb-8 bg-opacity-70"
      variants={secondVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className=" text-center">
        <h1 className="text-3xl text-slate-200 mb-4">My Skills</h1>
        <div className="w-16 content-none mx-auto h-2 bg-blue-300"></div>
        <div className="hidden md:flex gap-4 justify-center mt-10">
          <Image
            src="/skills/html.png"
            width={50}
            height={50}
            alt="html image"
            priority
          />
          <Image
            src="/skills/css.png"
            width={50}
            height={50}
            alt="css image"
            priority
          />
          <Image
            src="/skills/sass.png"
            width={50}
            height={50}
            alt="sass image"
            priority
          />
          <Image
            src="/skills/tailwind.png"
            width={50}
            height={50}
            alt="tailwind image"
            priority
          />
          <Image
            src="/skills/javascript.png"
            width={50}
            height={50}
            alt="javascript image"
            priority
          />
          <Image
            src="/skills/react.png"
            width={50}
            height={50}
            alt="react image"
            priority
          />
          <Image
            src="/skills/sql.png"
            width={50}
            height={50}
            alt="sql image"
            priority
          />
          <Image
            src="/skills/mysql.png"
            width={50}
            height={50}
            alt="mysql image"
            priority
          />
          <Image
            src="/skills/postgre.png"
            width={50}
            height={50}
            alt="postgre image"
            priority
          />
          <Image
            src="/skills/mongo.png"
            width={50}
            height={50}
            alt="mongo image"
            priority
          />
          <Image
            src="/skills/html.png"
            width={50}
            height={50}
            alt="html image"
            priority
          />
          <Image
            src="/skills/java.png"
            width={50}
            height={50}
            alt="java image"
            priority
          />
          <Image
            src="/skills/docker.png"
            width={50}
            height={50}
            alt="docker image"
            priority
          />
          <Image
            src="/skills/aws.png"
            width={50}
            height={50}
            alt="aws image"
            priority
          />
          <Image
            src="/skills/git.png"
            width={50}
            height={50}
            alt="aws image"
            priority
          />
        </div>
        <ul className="flex md:hidden items-center justify-center font-semibold gap-6 mt-6 gold">
          <div>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>TailwindCSS</li>
          </div>
          <div>
            <li>Javascript</li>
            <li>Java</li>
            <li>ReactJS</li>
            <li>Git</li>
          </div>
          <div>
            <li>Docker</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Mongo DB</li>
          </div>
        </ul>
      </div>
      <div className="mt-10 sm:mt-20">
        <p className="text-3xl text-slate-200 text-center">My Services</p>
        <div className="sm:flex gap-6">
          <div className="flex flex-col mx-auto mt-10 sm:w-10/12">
            <h1 className="text-opacity-80 text-white text-lg font-bold text-center sm:text-start mb-2">
              Web Development
            </h1>
            <div className="text-opacity-50 text-white text-center sm:text-start">
              <p>
                Creating fullstack websites and web applications using
                programming languages, tools and frameworks to build the
                frontend and backend of a website or web application.
              </p>
              <p>
                Working with databases, APIs and web servers, as well as testing
                and debugging to ensure that the website or web application is
                working properly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSkills;
