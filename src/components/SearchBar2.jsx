import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <motion.section
      id="search-section"
      className="relative w-full max-w-5xl mx-auto mt-12 px-4"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 120 }}
    >
      <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4 items-end">
          
          {/* מוצא */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">מהיכן?</label>
            <input
              type="text"
              placeholder="מוצא"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* חץ / תמונה */}
          <div className="flex items-center justify-center md:mt-6">
            <img
              src="/public/travel.png"
              alt="Arrow"
              className="w-10 h-10 animate-bounce"
            />
          </div>

          {/* יעד */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">לאן?</label>
            <input
              type="text"
              placeholder="יעד"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* תאריך יציאה */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">יציאה</label>
            <input
              type="date"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* תאריך חזרה */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">חזרה</label>
            <input
              type="date"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* חדרים */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">חדרים</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* מבוגרים */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">מבוגרים</label>
            <input
              type="number"
              min="1"
              defaultValue="2"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* ילדים */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">ילדים</label>
            <input
              type="number"
              min="0"
              defaultValue="0"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-800 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* כפתור חיפוש */}
          <div className="flex items-center justify-center md:mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-primaryBlue hover:bg-blue-700 text-white text-lg font-semibold rounded-full py-3 px-6 shadow-lg transition-all"
            >
              <FiSearch className="text-xl" />
              חפש
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
