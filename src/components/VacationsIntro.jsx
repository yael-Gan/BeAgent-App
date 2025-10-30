import { motion } from "framer-motion";
import SearchBar2 from "./SearchBar2";
import { FaPlane, FaUmbrellaBeach, FaMountain } from "react-icons/fa";

export default function VacationsIntro() {
  const floatingIcons = [
    { icon: <FaPlane />, top: "15%", left: "80%", size: 50, color: "rgba(255, 150, 150, 0.3)" },
    { icon: <FaUmbrellaBeach />, top: "60%", left: "10%", size: 60, color: "rgba(255, 220, 120, 0.3)" },
    { icon: <FaMountain />, top: "30%", left: "70%", size: 50, color: "rgba(100, 200, 255, 0.3)" },
  ];

  const bounceTransition = {
    y: { duration: 3, yoyo: Infinity, ease: "easeInOut" },
    x: { duration: 4, yoyo: Infinity, ease: "easeInOut" }
  };

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center py-32 md:py-44 px-4 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: item.top, left: item.left, fontSize: item.size, color: item.color }}
          animate={{ y: ["0%", "-15%", "0%", "15%", "0%"], x: ["0%", "5%", "0%", "-5%", "0%"] }}
          transition={{ ...bounceTransition, duration: 6 + index }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main title */}
      <motion.h1
        className="text-4xl md:text-6xl  font-normal text-center text-gradient bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-6"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        חופשות חלומיות לכל המשפחה
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-gray-700 text-lg md:text-xl  font-normal text-center max-w-3xl mb-12 leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        בחרו את החופשה המושלמת — חופים, טבע, סקי או ערים קסומות. הכל במקום אחד, עם חוויה אינטואיטיבית וחדשנית.
      </motion.p>

      {/* Glassmorphism Search Bar */}
      <motion.div
        className="w-full max-w-5xl p-6 md:p-8 rounded-3xl shadow-2xl bg-white/40 backdrop-blur-xl border border-white/30"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
      >
        <SearchBar2 />
      </motion.div>

      {/* Decorative Gradient Circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-300 to-teal-300 opacity-20 -top-32 -left-32"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 -bottom-28 -right-24"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.section>
  );
}
// import { motion } from "framer-motion";
// import SearchBar2 from "./SearchBar2";
// import { FaPlane, FaUmbrellaBeach, FaMountain } from "react-icons/fa";

// export default function VacationsIntro() {
//   const floatingIcons = [
//     { icon: <FaUmbrellaBeach />, top: "60%", left: "10%", size: 60, color: "rgba(255, 220, 120, 0.3)" },
//     { icon: <FaMountain />, top: "30%", left: "70%", size: 50, color: "rgba(100, 200, 255, 0.3)" },
//   ];

//   const bounceTransition = {
//     y: { duration: 3, yoyo: Infinity, ease: "easeInOut" },
//     x: { duration: 4, yoyo: Infinity, ease: "easeInOut" }
//   };

//   return (
//     <motion.section
//       className="relative flex flex-col items-center justify-center py-32 md:py-44 px-4 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Floating Icons */}
//       {floatingIcons.map((item, index) => (
//         <motion.div
//           key={index}
//           className="absolute"
//           style={{ top: item.top, left: item.left, fontSize: item.size, color: item.color }}
//           animate={{ y: ["0%", "-15%", "0%", "15%", "0%"], x: ["0%", "5%", "0%", "-5%", "0%"] }}
//           transition={{ ...bounceTransition, duration: 6 + index }}
//         >
//           {item.icon}
//         </motion.div>
//       ))}

//       {/* Animated Plane Trail */}
//       <motion.div
//         className="absolute text-red-400 text-4xl"
//         initial={{ x: "-10%", y: "20%" }}
//         animate={{ x: ["-10%", "110%"], y: ["20%", "15%", "25%", "20%"] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <FaPlane />
//       </motion.div>

//       {/* Main Title */}
//       <motion.h1
//         className="text-4xl md:text-6xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-6"
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 120, damping: 12 }}
//       >
//         חופשות חלומיות לכל המשפחה
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         className="text-gray-700 text-lg md:text-xl text-center max-w-3xl mb-12 leading-relaxed"
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 1 }}
//       >
//         בחרו את החופשה המושלמת — חופים, טבע, סקי או ערים קסומות. הכל במקום אחד, עם חוויה אינטואיטיבית וחדשנית.
//       </motion.p>

//       {/* Glassmorphism Search Bar */}
//       <motion.div
//         className="w-full max-w-5xl p-6 md:p-8 rounded-3xl shadow-2xl bg-white/40 backdrop-blur-xl border border-white/30"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
//       >
//         <SearchBar2 />
//       </motion.div>

//       {/* Decorative Gradient Circles */}
//       <motion.div
//         className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-300 to-teal-300 opacity-20 -top-32 -left-32"
//         animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 -bottom-28 -right-24"
//         animate={{ scale: [1, 1.15, 1], rotate: [0, -15, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </motion.section>
//   );
// }
