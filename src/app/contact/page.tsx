'use client'
import Wrapper from "@/components/ui/Wrapper";
import { sendMail } from "@/lib/send-mail";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log({ name, email, message });
    const res = await sendMail({sendTo: email, subject: 'Contact Service SIH2025', text: message})
    if(res?.messageId) {
      console.log("message sent");
      
    }
    // reset fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Wrapper>
      <div className="relative min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8 py-12 ">
      {/* Background overlay with blur effect */}
      <div className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0" />

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl p-8 border border-white/20">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          <span className="font-extrabold">Contact Us</span>
        </h1>
        <p className="text-center font-bold text-white/70 mb-6">
          We’d love to hear from you! Reach out directly or use the form below.
        </p>

        {/* Contact Info */}
        <div className="mb-8 font-bold text-white/80 text-center">
          <p>Email: <span className="font-medium">teamtriton@gmail.com</span></p>
          <p>Phone: <span className="font-medium">+91 9876543210</span></p>
          <p>Address: <span className="font-medium">I.I.I.T Bhagalpur, Bihar, India</span></p>
        </div>

        {/* New message */}
        <div>
          <p className="mb-8 font-bold text-white/80 text-center">
            <span className="font-medium">
              You can also submit your feedback and queries, We will soon reach you.
            </span>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-white mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-white mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium shadow-md transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </Wrapper>
  );
}
