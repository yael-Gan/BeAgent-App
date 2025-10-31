import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";

export default function AccessibilityPortal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* אייקון הנגישות */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 
                   p-4 rounded-full text-white shadow-lg shadow-cyan-400/50 
                   transition-all duration-300"
      >
        <FaUniversalAccess size={28} />
      </motion.button>

      {/* האנימציה של הפורטל */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: -180 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-cyan-900/70 
                       via-blue-800/80 to-purple-900/70 backdrop-blur-md
                       flex flex-col items-center justify-center text-white"
          >
            {/* עיגול זוהר */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 1 }}
              className="w-64 h-64 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 
                         rounded-full shadow-2xl shadow-blue-500/40 flex items-center justify-center"
            >
              <h2 className="text-2xl font-bold tracking-wider">Accessible Mode</h2>
            </motion.div>

            {/* כפתורי הנגישות */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <button className="px-5 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition">🔍 הגדל טקסט</button>
              <button className="px-5 py-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition">🎨 ניגודיות</button>
              <button className="px-5 py-2 bg-purple-500 rounded-xl hover:bg-purple-600 transition">🗣️ קריאה קולית</button>
            </motion.div>

            {/* כפתור סגירה */}
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              className="absolute top-8 right-8 text-3xl font-bold"
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}





// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaUniversalAccess } from "react-icons/fa";

// export default function ZeroGravityAccessibility() {
//   const [isActive, setIsActive] = useState(false);

//   // לאחר כמה שניות סוגר את המצב אוטומטית
//   useEffect(() => {
//     if (isActive) {
//       const timer = setTimeout(() => setIsActive(false), 5000); // 5 שניות
//       return () => clearTimeout(timer);
//     }
//   }, [isActive]);

//   // אנימציה של “ריחוף” עבור כל האלמנטים
//   const floatAnimation = {
//     animate: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <>
//       {/* אייקון הנגישות */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <motion.button
//           whileHover={{ scale: 1.2, rotate: 5 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsActive(true)}
//           className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
//                      p-4 rounded-full text-white shadow-lg shadow-cyan-400/50
//                      transition-all duration-300"
//         >
//           <FaUniversalAccess size={28} />
//         </motion.button>
//       </div>

//       {/* Overlay של מצב נגישות */}
//       <AnimatePresence>
//         {isActive && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center"
//           >
//             {/* הודעה */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0 }}
//               transition={{ duration: 0.6 }}
//               className="bg-white rounded-xl p-6 shadow-2xl text-black text-center font-semibold"
//             >
//               מצב נגישות פעיל
//             </motion.div>

//             {/* כפתורי נגישות */}
//             <motion.div
//               className="mt-8 flex gap-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               <button className="px-5 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition">
//                 🔍 הגדל טקסט
//               </button>
//               <button className="px-5 py-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition">
//                 🎨 ניגודיות
//               </button>
//               <button className="px-5 py-2 bg-purple-500 rounded-xl hover:bg-purple-600 transition">
//                 🗣️ קריאה קולית
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* אפקט ריחוף על כל האלמנטים */}
//       {isActive && (
//         <motion.div {...floatAnimation} className="pointer-events-none fixed inset-0">
//           {/* כאן אפשר לשים את כל האלמנטים שאתה רוצה שיעופו, לדוגמה div שמכיל את הדף */}
//         </motion.div>
//       )}
//     </>
//   );
// }
