"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User logged in:", formData);
  };
  const handleLogin = (e) => {
  e.preventDefault();
  // כאן בדיקת שם משתמש וסיסמה
  // אם תקין:
  navigate("/login-success");
};


  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 via-white to-blue-100 px-4">
      {/* כרטיס ההתחברות */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md text-center"
      >
        {/* כותרת */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-blue-700 mb-6"
        >
          התחברות לחשבון
        </motion.h2>

        {/* טופס */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* אימייל */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <FiMail className="absolute right-3 top-3 text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="אימייל"
              required
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent py-2 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
            />
          </motion.div>

          {/* סיסמה */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <FiLock className="absolute right-3 top-3 text-gray-400 text-xl" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="סיסמה"
              required
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent py-2 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
            />
          </motion.div>

          {/* כפתור התחברות */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
             onClick={handleLogin}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-full shadow-md hover:shadow-lg transition-all font-semibold text-lg"
          >
            <FiLogIn className="text-xl" />
            התחברות
          </motion.button>
        </form>

        {/* טקסט תחתון */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm text-gray-500 mt-6"
        >
          אין לך עדיין חשבון?{" "}
          <a href="/signup" className="text-blue-600 hover:underline font-medium">
            הירשמי עכשיו
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
