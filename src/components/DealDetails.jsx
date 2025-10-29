import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function DealDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const deal = location.state?.deal;

  if (!deal) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-gray-700">לא נמצא מבצע.</p>
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full shadow-lg transition-all"
        >
          חזרה
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 mt-16 bg-white rounded-3xl shadow-2xl text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* תמונה גדולה עם overlay עדין */}
      <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
        <img src={deal.img} alt={deal.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{deal.title}</h1>
      <p className="text-gray-600 mb-4">{deal.description}</p>
      <p className="text-green-600 font-bold text-2xl mb-8">{deal.price}</p>

      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
      >
        חזרה למבצעים
      </motion.button>
    </motion.div>
  );
}
