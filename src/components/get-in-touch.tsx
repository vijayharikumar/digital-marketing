import { motion } from "framer-motion";
import { useState } from "react";

const GetInTouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl p-10 text-center"
      >
        <h1 id="getintouch" className="text-4xl font-bold text-slate-900 mb-8">
          Let’s get talking!
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Our inbox is open for questions, ideas, or just a friendly hello.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 text-left"
          autoComplete="on"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 text-lg text-slate-800 placeholder-slate-400 border border-violet-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
          />

          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 text-lg text-slate-800 placeholder-slate-400 border border-violet-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+1 (000) 000-0000"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 text-lg text-slate-800 placeholder-slate-400 border border-violet-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Name of your company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-5 py-4 text-lg text-slate-800 placeholder-slate-400 border border-violet-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
          />

          <textarea
            name="message"
            placeholder="Type your message..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 text-lg text-slate-800 placeholder-slate-400 border border-violet-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:shadow-xl transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
