import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { secondVariants, linkVariants } from "../helpers/animation";

const PortfolioGrid = () => {
  return (
    <motion.main
      className="flex flex-row flex-wrap gap-10 justify-center mx-auto mt-20 mb-10 w-10/12"
      variants={secondVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Quisco App */}
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full rounded-xl object-cover shadow-xl"
              src="/grid/quiosco.png"
              alt=""
              layout="fill"
              priority={true}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-black mb-1">Quiosco App</h1>
              <div className="w-40 content-none mx-auto h-1 m-2 bg-blue-300"></div>
              <p className="text-lg gold uppercase font-bold">Technologies</p>
              <p className="text-base text-slate-300 p-2">
                React | Prisma | MySQl | TailwindCSS
              </p>

              <div className="flex justify-center items-center gap-4 w-full p-4">
                <motion.a
                  target="_blank"
                  href="https://quioscoapp-production-46f1.up.railway.app/"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-cyan-300 to-blue-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="view"
                    src="/grid/view.png"
                    width={25}
                    height={25}
                    alt="View Image"
                    priority
                  />
                  Site
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://github.com/caballerorandy6/quioscoapp"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-blue-300 to-cyan-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="github"
                    src="/grid/github.png"
                    width={25}
                    height={25}
                    alt="GitHub Image"
                    priority
                  />
                  Github
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Musical instruments mini-shop */}
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              className="rounded-xl object-cover shadow-xl"
              src="/grid/music.png"
              alt="Music Store Image"
              layout="fill"
              priority={true}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-black mb-1">
                Musical instruments mini-shop
              </h1>
              <div className="w-40 content-none mx-auto h-1 m-2 bg-blue-300"></div>
              <p className="text-lg gold uppercase font-bold">Technologies</p>
              <p className="text-base text-slate-300 p-2">
                React | Strapi | PostgreSQl | TailwindCSS
              </p>

              <div className="flex justify-center items-center gap-4 w-full p-4">
                <motion.a
                  target="_blank"
                  href="https://musical-instruments-store.netlify.app"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-cyan-300 to-blue-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="view"
                    src="/grid/view.png"
                    width={25}
                    height={25}
                    alt="View Image"
                    priority
                  />
                  Site
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://github.com/caballerorandy6/Mini-Fashion-Store"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-blue-300 to-cyan-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="github"
                    src="/grid/github.png"
                    width={25}
                    height={25}
                    alt="GitHub Image"
                    priority
                  />
                  Github
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather App */}
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              className="rounded-xl object-cover shadow-xl"
              src="/grid/weatherApp.png"
              alt="Weather App Image"
              layout="fill"
              priority={true}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-black mb-1">Weather App</h1>
              <div className="w-40 content-none mx-auto h-1 m-2 bg-blue-300"></div>
              <p className="text-lg gold uppercase font-bold">Technologies</p>
              <p className="text-base text-slate-300 p-2">
                React | Vite | TailwindCSS
              </p>

              <div className="flex justify-center items-center gap-4 w-full p-4">
                <motion.a
                  target="_blank"
                  href="https://weatherapp1988.netlify.app"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-cyan-300 to-blue-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="view"
                    src="/grid/view.png"
                    width={25}
                    height={25}
                    alt="View Image"
                    priority
                  />
                  Site
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://github.com/caballerorandy6/weather-app"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-blue-300 to-cyan-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="github"
                    src="/grid/github.png"
                    width={25}
                    height={25}
                    alt="GitHub Image"
                    priority
                  />
                  Github
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cryptocurrency trading */}
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              className="rounded-xl object-cover shadow-xl"
              src="/grid/crypto.png"
              alt="Crypto Trading Image"
              layout="fill"
              priority={true}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-black mb-1">
                Cryptocurrency trading
              </h1>
              <div className="w-40 content-none mx-auto h-1 m-2 bg-blue-300"></div>
              <p className="text-lg gold uppercase font-bold">Technologies</p>
              <p className="text-base text-slate-300 p-2">
                React | Vite | TailwindCSS
              </p>

              <div className="flex justify-center items-center gap-4 w-full p-4">
                <motion.a
                  target="_blank"
                  href="https://crypto-quotation.netlify.app"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-cyan-300 to-blue-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="view"
                    src="/grid/view.png"
                    width={25}
                    height={25}
                    alt="View Image"
                    priority
                  />
                  Site
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://github.com/caballerorandy6/cryptocurrency-quotation-system"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-blue-300 to-cyan-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="github"
                    src="/grid/github.png"
                    width={25}
                    height={25}
                    alt="GitHub Image"
                    priority
                  />
                  Github
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Drink */}
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              className="rounded-xl object-cover shadow-xl"
              src="/grid/searchDrinks.png"
              alt="Search Drink Image"
              layout="fill"
              priority={true}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-black mb-1">Search Drink</h1>
              <div className="w-40 content-none mx-auto h-1 m-2 bg-blue-300"></div>
              <p className="text-lg gold uppercase font-bold">Technologies</p>
              <p className="text-base text-slate-300 p-2">
                React | Vite | Reactbootstrap
              </p>

              <div className="flex justify-center items-center gap-4 w-full p-4">
                <motion.a
                  target="_blank"
                  href="https://seachdrinks.netlify.app/"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-cyan-300 to-blue-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="view"
                    src="/grid/view.png"
                    width={25}
                    height={25}
                    alt="View Image"
                    priority
                  />
                  Site
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://github.com/caballerorandy6/seachdrinks"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-blue-300 to-cyan-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="github"
                    src="/grid/github.png"
                    width={25}
                    height={25}
                    alt="GitHub Image"
                    priority
                  />
                  Github
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Expenses */}
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              className="rounded-xl object-cover shadow-xl"
              src="/grid/monthlyExpensesPlanner.png"
              alt="Monthly Expenses Image"
              layout="fill"
              priority={true}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-black mb-1">Monthly Expenses</h1>
              <div className="w-40 content-none mx-auto h-1 m-2 bg-blue-300"></div>
              <p className="text-lg gold uppercase font-bold">Technologies</p>
              <p className="text-base text-slate-300 p-2">
                React | Vite | TailwindCSS
              </p>

              <div className="flex justify-center items-center gap-4 w-full p-4">
                <motion.a
                  target="_blank"
                  href="https://cost-planner.netlify.app"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-cyan-300 to-blue-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="view"
                    src="/grid/view.png"
                    width={25}
                    height={25}
                    alt="View Image"
                    priority
                  />
                  Site
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://github.com/caballerorandy6/cost-planner"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-blue-300 to-cyan-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="github"
                    src="/grid/github.png"
                    width={25}
                    height={25}
                    alt="GitHub Image"
                    priority
                  />
                  Github
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Quotes */}
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              className="rounded-xl object-cover shadow-xl"
              src="/grid/insuranceQuotes.png"
              alt="Insurance Quotes Image"
              layout="fill"
              priority={true}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-black mb-1">Insurance Quotes</h1>
              <div className="w-40 content-none mx-auto h-1 m-2 bg-blue-300"></div>
              <p className="text-lg gold uppercase font-bold">Technologies</p>
              <p className="text-base text-slate-300 p-2">
                React | Vite | TailwindCSS
              </p>

              <div className="flex justify-center items-center gap-4 w-full p-4">
                <motion.a
                  target="_blank"
                  href="https://insurancequotes6.netlify.app/"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-cyan-300 to-blue-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="view"
                    src="/grid/view.png"
                    width={25}
                    height={25}
                    alt="View Image"
                    priority
                  />
                  Site
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://github.com/caballerorandy6/cotizador"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-blue-300 to-cyan-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="github"
                    src="/grid/github.png"
                    width={25}
                    height={25}
                    alt="GitHub Image"
                    priority
                  />
                  Github
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* React-CRM */}
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              className="rounded-xl object-cover shadow-xl"
              src="/grid/crmReact.png"
              alt="React-CRM Image"
              layout="fill"
              priority={true}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-black mb-1">React-CRM</h1>
              <div className="w-40 content-none mx-auto h-1 m-2 bg-blue-300"></div>
              <p className="text-lg gold uppercase font-bold">Technologies</p>
              <p className="text-base text-slate-300 p-2">
                React | Vite | JSON Server | TailwindCSS
              </p>

              <div className="flex justify-center items-center gap-4 w-full p-4">
                <motion.a
                  target="_blank"
                  href="https://react-crm7.netlify.app"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-cyan-300 to-blue-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="view"
                    src="/grid/view.png"
                    width={25}
                    height={25}
                    alt="View Image"
                    priority
                  />
                  Site
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://github.com/caballerorandy6/React-CRM"
                  className="flex items-center justify-center gap-2 w-6/12 bg-gradient-to-l from-blue-300 to-cyan-600 py-1 px-2 rounded  transition-colors text-black"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Image
                    id="github"
                    src="/grid/github.png"
                    width={25}
                    height={25}
                    alt="GitHub Image"
                    priority
                  />
                  Github
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default PortfolioGrid;
