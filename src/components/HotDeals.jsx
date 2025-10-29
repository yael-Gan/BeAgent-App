// // import React from "react";

// // function HotDeals({ deals }) {
// //   return (
// //     <section className="max-w-6xl mx-auto mb-12">
// //       <h2 className="text-3xl font-semibold mb-6 text-center">מבצעים חמים</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {deals.map((deal, index) => (
// //           <div
// //             key={index}
// //             className="bg-white rounded shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
// //           >
// //             <img src={deal.img} alt={deal.title} className="w-full h-48 object-cover"/>
// //             <div className="p-4">
// //               <h3 className="font-bold text-lg mb-2">{deal.title}</h3>
// //               <p className="text-gray-700 mb-2">{deal.description}</p>
// //               <p className="text-green-600 font-semibold mb-2">{deal.price}</p>
// //               <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-600 transition">
// //                 הזמן עכשיו
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default HotDeals;
// import React, { useRef } from "react";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// function HotDeals({ deals }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   // הפעלת האנימציה כשגלול מגיע לרכיב
//   React.useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const dealVariants = {
//     hidden: { opacity: 0, x: 100 },      // מתחיל מימין ומוסתר
//     visible: i => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" } // אנימציה עם תזמון לפי אינדקס
//     }),
//   };

//   return (
//     <section ref={ref} className="max-w-6xl mx-auto mb-12">
//       <motion.h2
//   className="text-3xl font-semibold mb-6 text-center"
//   initial={{ y: -50, opacity: 0 }}
//   whileInView={{ y: 0, opacity: 1 }}
//   viewport={{ once: true, amount: 0.5 }}
//   transition={{ type: "spring", stiffness: 300, damping: 10 }}
// >
//   מבצעים חמים
// </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {deals.map((deal, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             initial="hidden"
//             animate={controls}
//             variants={dealVariants}
//             className="bg-white rounded shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
//           >
//             <img src={deal.img} alt={deal.title} className="w-full h-48 object-cover"/>
//             <div className="p-4">
//               <h3 className="font-bold text-lg mb-2">{deal.title}</h3>
//               <p className="text-gray-700 mb-2">{deal.description}</p>
//               <p className="text-green-600 font-semibold mb-2">{deal.price}</p>
//               <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-600 transition">
//                 הזמן עכשיו
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HotDeals;
// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// function HotDeals({ deals }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   // אנימציה לכותרת
//   const titleVariants = {
//     hidden: { y: -50, opacity: 0, rotate: -10 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       rotate: 0,
//       transition: { type: "spring", stiffness: 400, damping: 12, mass: 0.7 },
//     },
//   };

//   // wiggle קטן אחרי ההגעה
//   const wiggle = {
//     rotate: [0, 5, -5, 3, -3, 0],
//     transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
//   };

//   const dealVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: i => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section ref={ref} className="max-w-6xl mx-auto mb-12">
//       <motion.h2
//         className="text-4xl md:text-4xl mb-8 text-center text-primaryBlue"
//         initial="hidden"
//         animate={controls}
//         variants={titleVariants}
//       >
//         מבצעים חמים !!
//         <motion.span animate={wiggle} />
//       </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {deals.map((deal, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             initial="hidden"
//             animate={controls}
//             variants={dealVariants}
//             className="bg-white rounded shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
//           >
//             <img src={deal.img} alt={deal.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="font-bold text-lg mb-2">{deal.title}</h3>
//               <p className="text-gray-700 mb-2">{deal.description}</p>
//               <p className="text-green-600 font-semibold mb-2">{deal.price}</p>
//               <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-600 transition">
//                 הזמן עכשיו
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HotDeals;






// אחד לפני החדש !!! עם קפיצות לצד של הכרטיסים 
// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useNavigate } from "react-router-dom";

// function HotDeals({ deals }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [controls, inView]);

//   const titleVariants = {
//     hidden: { y: -50, opacity: 0, rotate: -10 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       rotate: 0,
//       transition: { type: "spring", stiffness: 400, damping: 12 },
//     },
//   };

//   const wiggle = {
//     rotate: [0, 5, -5, 3, -3, 0],
//     transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
//   };

//   const dealVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
//     }),
//   };

//   const handleOrderClick = (deal) => {
//     navigate(`/deal/${deal.id}`, { state: { deal } });
//   };

//   return (
//     <section ref={ref} className="max-w-6xl mx-auto mb-12">
//       <motion.h2
//         className="text-4xl font-bold mb-8 text-center text-primaryBlue"
//         initial="hidden"
//         animate={controls}
//         variants={titleVariants}
//       >
//         מבצעים חמים !!
//         <motion.span animate={wiggle} />
//       </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {deals.map((deal, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             initial="hidden"
//             animate={controls}
//             variants={dealVariants}
//             className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
//           >
//             <img
//               src={deal.img}
//               alt={deal.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5 text-center">
//               <h3 className="font-bold text-xl mb-2 text-gray-800">{deal.title}</h3>
//               <p className="text-gray-600 mb-2">{deal.description}</p>
//               <p className="text-green-600 font-semibold mb-4 text-lg">
//                 {deal.price}
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleOrderClick(deal)}
//                 className="bg-primaryBlue text-white px-5 py-2 rounded-full shadow hover:bg-blue-600 transition"
//               >
//                 הזמן עכשיו ✈️
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HotDeals;



import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function HotDeals({ deals }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // ----------- כותרת -----------
  const titleVariants = {
    hidden: { y: -50, opacity: 0, rotate: -10 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 400, damping: 12 },
    },
  };

  const wiggle = {
    rotate: [0, 5, -5, 3, -3, 0],
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
  };

  // ----------- כרטיסי מבצע -----------
  const dealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const handleOrderClick = (deal) => {
    navigate(`/deal/${deal.id}`, { state: { deal } });
  };

  // ----------- כוכבים זוהרים -----------
  const stars = Array.from({ length: 20 });

  return (
    <section ref={ref} className="max-w-7xl mx-auto my-16 px-6">
      {/* כותרת עם Wiggle + כוכבים */}
      <motion.div className="relative inline-block w-full text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primaryBlue relative z-10 inline-block"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          מבצעים מותאמים למטיילים ברמה גבוהה
          <motion.span animate={wiggle} />
        </motion.h2>

        {/* כוכבים זוהרים מסביב לכותרת */}
        {stars.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full shadow-xl"
            style={{
              top: `${Math.random() * 120 - 10}%`,
              left: `${Math.random() * 120 - 10}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 2 + i * 0.3,
              duration: 2 + i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Grid כרטיסים */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {deals.map((deal, index) => (
          <motion.div
            key={deal.id}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={dealVariants}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-500"
          >
            {/* רקע קליט */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-blue-100 opacity-70"></div>

            {/* תמונה */}
            <img
              src={deal.img}
              alt={deal.title}
              className="relative w-full h-52 object-cover rounded-t-3xl"
            />

            {/* תוכן הכרטיס */}
            <div className="p-5 relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{deal.title}</h3>
              <p className="text-gray-600 mb-4">{deal.description}</p>
              <p className="text-green-600 font-semibold text-xl mb-6">{deal.price}</p>

              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOrderClick(deal)}
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                הזמן עכשיו ✈️
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HotDeals;



//מבצעים חמים נוחת באלכסון 

// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import DealLoader from "./DealLoader";

// function HotDeals({ deals }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [loadingDealId, setLoadingDealId] = useState(null);

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [controls, inView]);

//   const dealVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
//     }),
//   };

//   return (
//     <>
//       {loadingDealId && <DealLoader dealId={loadingDealId} />}
//       <section ref={ref} className="max-w-6xl mx-auto mb-12">
//         <motion.h2
//           className="text-4xl font-bold mb-8 text-center text-primaryBlue"
//           initial={{ y: -50, opacity: 0, rotate: -10 }}
//           animate={controls}
//           variants={{ hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
//         >
//           מבצעים חמים !!
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {deals.map((deal, index) => (
//             <motion.div
//               key={deal.id}
//               custom={index}
//               initial="hidden"
//               animate={controls}
//               variants={dealVariants}
//               className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={deal.img}
//                 alt={deal.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5 text-center">
//                 <h3 className="font-bold text-xl mb-2 text-gray-800">{deal.title}</h3>
//                 <p className="text-gray-600 mb-2">{deal.description}</p>
//                 <p className="text-green-600 font-semibold text-lg mb-4">{deal.price}</p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setLoadingDealId(deal.id)}
//                   className="bg-primaryBlue text-white px-5 py-2 rounded-full shadow hover:bg-blue-600 transition"
//                 >
//                   הזמן עכשיו ✈️
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default HotDeals;
