import { useRef } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  firstContentVariants,
  secondContentVariants,
  linkVariants,
} from "../helpers/animation";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  //Recibir Email cuando envian formulario
  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm("gmail", "rcweb_template", form.current, "jDYT49szBWHrh5m3P")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message has been sent successfully!");
    reset();
  };

  return (
    <div className="lg:flex lg:mx-auto lg:w-10/12 xl:my-10 my-20">
      <motion.div
        className="flex flex-col lg:w-6/12 xl:w-6/12"
        variants={firstContentVariants}
        initial="hidden"
        animate="visible"
        exit={"exit"}
      >
        <h1 className="text-slate-200 text-center text-3xl mb-10 font-semibold">
          Message
        </h1>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-10/12 sm:w-8/12 md:w-8/12 xl:w-10/12 mx-auto"
        >
          <input
            {...register("name", {
              required: "Name is required!",
              minLength: {
                value: 2,
                message: "Name must have at least 2 or more characters!",
              },
              maxLength: {
                value: 50,
                message: "Name must be 50 characters or less!",
              },
            })}
            type="text"
            placeholder="Name:"
            className="opacity-70 w-full border-b-2 bg-transparent focus:outline-none active:bg-transparent p-2 text-white"
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          {errors?.name?.length < 2 ? (
            <ErrorMessage message={errors?.name?.message} />
          ) : (
            ""
          )}
          {errors?.name?.length > 50 ? (
            <ErrorMessage message={errors?.name?.message} />
          ) : (
            ""
          )}

          <input
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email!",
              },
            })}
            type="text"
            placeholder="Email:"
            className="opacity-70 w-full border-b-2 bg-transparent focus:outline-none active:bg-transparent p-2  text-white mt-8"
          />
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          {errors?.email && <ErrorMessage message={errors?.email?.message} />}

          <input
            {...register("phone", {
              required: "Phone number is required!",
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "Invalid phone number!",
              },
            })}
            type="text"
            placeholder="Phone Number:"
            className="opacity-70 w-full border-b-2 bg-transparent focus:outline-none active:bg-transparent p-2 text-white mt-8"
          />
          <ErrorMessage>{errors?.phone?.message}</ErrorMessage>
          {errors?.phone && <ErrorMessage message={errors?.phone?.message} />}

          <textarea
            {...register("message")}
            placeholder="Message"
            rows="5"
            className="opacity-70 w-full border-2 bg-transparent focus:outline-none active:bg-transparent p-2 text-white mt-12 rounded-md"
          />
          <input
            type="submit"
            className="w-full text-slate-800 font-bold p-2 rounded-full mt-8 cursor-pointer bg-slate-200 hover:bg-blue-300 uppercase transition-colors"
            value="Send Message"
          />
        </form>
      </motion.div>

      <motion.div
        className="w-full lg:w-6/12 xl:w-6/12 mt-16 lg:m-0"
        variants={secondContentVariants}
        initial="hidden"
        animate="visible"
        exit={"exit"}
      >
        <h1 className="text-slate-200 text-3xl text-center font-semibold mb-6 xl:mb-16">
          Contact Information
        </h1>

        <div className="flex flex-col items-center mx-auto xl:w-10/12 w-11/12 gap-10">
          <motion.a
            variants={linkVariants}
            whileHover="hover"
            className="flex items-center justify-center gap-4 mx-auto gold"
            href="tel: +18325465983"
          >
            <Image
              src="/img/telephone.png"
              width={30}
              height={30}
              alt="Telephone"
              priority
            />
            Phone Number: +1 (832)546-5983
          </motion.a>

          <motion.a
            variants={linkVariants}
            whileHover="hover"
            className="flex items-center justify-center gap-4 mx-auto gold"
            href="mailto:caballerorandy6@gmail.com"
          >
            <Image
              src="/img/mail.png"
              width={30}
              height={30}
              alt="Email"
              priority
            />
            caballerorandy6@gmail.com
          </motion.a>

          <div className="flex items-center justify-center gap-2 mx-auto gold">
            <Image
              src="/img/address.png"
              width={30}
              height={30}
              alt="Email"
              priority
            />
            <p className="gold">Houston, TX</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
