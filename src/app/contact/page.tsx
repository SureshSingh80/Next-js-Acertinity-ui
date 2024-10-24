"use client";

// import "@/index.css";
import React, { useState, FormEvent } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { div } from "framer-motion/client";
function page() {
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<any>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    console.log("Submited:", { email, message });
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className=" z-50 max-w-2xl mx-auto p-4 mt-32">
        <h1 className="relative z-10  text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-200  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className=" max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We here to help with any questions about our courses,programs, or
          events reach out and let us know how we can assist you in your musical
          journey
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Your email address"
            onChange={handleEmailChange}
            className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />

          <textarea
            name="message"
            value={message}
            id=""
            rows={6}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-lg bg-transparent  text-white border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4"
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:cursor-pointer "
          >
            Send Message
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
