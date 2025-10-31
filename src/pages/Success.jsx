import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-white/30 max-w-lg"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-4">✅ קיבלנו את פנייתך!</h1>
        <p className="text-gray-600 text-lg mb-8">
          תודה שפנית אלינו. ניצור קשר בהקדם האפשרי.
        </p>

        <Link
          to="/"
          className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-xl transition"
        >
          חזרה לדף הבית
        </Link>
      </motion.div>
    </div>
  );
}
