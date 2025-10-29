import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DealLoader({ dealId, delay = 2000 }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/deal/${dealId}`);
    }, delay);
    return () => clearTimeout(timer);
  }, [dealId, delay, navigate]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-6xl mb-6"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          ✈️
        </motion.div>
        <motion.p
          className="text-xl text-gray-700 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          טוען את המבצע שלך...
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
