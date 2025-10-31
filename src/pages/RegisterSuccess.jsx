import { motion } from "framer-motion";
import { UserCheck2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RegisterSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 via-cyan-100 to-emerald-200 text-center">
      {/* קופסה מרכזית */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-11/12 border border-emerald-100"
      >
        {/* אייקון */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="flex justify-center mb-6"
        >
          <UserCheck2 className="text-emerald-500 w-20 h-20" />
        </motion.div>

        {/* טקסטים */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-800 mb-3"
        >
          נרשמת בהצלחה!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-lg mb-8"
        >
          החשבון שלך נוצר בהצלחה 🎉  
          ברוך/ה הבא/ה למערכת שלנו!
        </motion.p>

        {/* כפתור */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition"
        >
          עבור לדף הבית
        </motion.button>
      </motion.div>

      {/* פוטר */}
      <footer className="mt-10 text-gray-600 text-sm">
        © {new Date().getFullYear()} BeAgent — מערכת חכמה לניהול משתמשים 💎
      </footer>
    </div>
  );
}
