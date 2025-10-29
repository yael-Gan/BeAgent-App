import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-24">
        {/* כותרת */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-md"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
         <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">BeAgent</span>
        </motion.h1>

        {/* תיאור קצר */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-16 leading-relaxed text-center max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
        >
          נשמח לשמוע מכם! מלאו את הטופס למטה ונחזור אליכם במהירות האפשרית.
        </motion.p>

        {/* טופס יצירת קשר */}
        <motion.div
          className="bg-white/50 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-white/30 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.4 }}
        >
          <form className="grid grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-500 mb-2">שם מלא</label>
              <input
                type="text"
                placeholder="הכנס את שמך"
                className="border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none h-12 text-lg transition-colors"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 mb-2">אימייל</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none h-12 text-lg transition-colors"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 mb-2">נושא</label>
              <input
                type="text"
                placeholder="למה אתה פונה?"
                className="border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none h-12 text-lg transition-colors"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 mb-2">הודעה</label>
              <textarea
                rows="5"
                placeholder="כתוב כאן את ההודעה שלך..."
                className="border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-lg transition-colors p-2 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-transform font-semibold text-lg md:text-xl"
            >
              שלח הודעה
            </motion.button>
          </form>
        </motion.div>

        {/* מידע נוסף */}
        <motion.div
          className="mt-16 text-center text-gray-700 space-y-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p>📞 טלפון: 03-1234567</p>
          <p>✉️ אימייל: info@travelagency.com</p>
          <p>📍 כתובת: רחוב התיירות 12, תל אביב</p>
        </motion.div>
      </main>

    </div>
  );
}
