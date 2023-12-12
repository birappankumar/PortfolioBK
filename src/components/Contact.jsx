import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { sectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
//ZmaKjfDJa5BFZhQeh
//template_z2q6ije
//service_zau5xjy

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendemail = () =>
    toast.success("Thanks! Will get back to you very soon.", {
      position: "bottom-center",
    });
  const notsendemail = () =>
    toast.warning("Oops! Something went Wrong.", { position: "bottom-center" });

  const handleSubmit = (e) => {
    e.preventDefault(); //stops browser reloading a fter sending
    setLoading(true);

    emailjs
      .send(
        "service_zau5xjy",
        "template_z2q6ije",
        {
          from_name: form.name,
          to_name: "Birappan Kumar",
          from_email: form.email,
          to_email: "birappaniitp21@gmail.com",
          message: form.message,
        },
        "ZmaKjfDJa5BFZhQeh"
      )
      .then(
        () => {
          setLoading(false);
          sendemail();

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          notsendemail();
        }
      );
  };

  return (
    <div className="xl:mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Lets Get in Touch!</p>
        <h3 className={styles.sectionHeadText}>Contact me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-8 mb-2"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
        </form>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          {loading ? "Sending.." : "Send"}
        </button>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto ms:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default sectionWrapper(Contact, "contact");
