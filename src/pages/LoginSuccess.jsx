import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 via-teal-100 to-cyan-200 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-11/12"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <CheckCircle2 className="text-green-500 w-20 h-20 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            התחברת בהצלחה!
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            שמחים שחזרת אלינו 💙
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            עבור לדף הבית
          </motion.button>
        </motion.div>
      </motion.div>

      <footer className="mt-10 text-gray-600 text-sm">
        © {new Date().getFullYear()} BeAgent — מערכת ניהול נסיעות חכמה ✈️
      </footer>
    </div>
  );
}
