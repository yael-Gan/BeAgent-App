// import React from "react";
// import { motion } from "framer-motion";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// export default function About() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   };
//     const navigate = useNavigate();

//   const handlePlanClick = () => {
//     navigate("/all-vacations");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
//       <Header />

//       <main className="flex-grow container mx-auto px-6 py-20">
//         {/* כותרת */}
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-10 text-center drop-shadow-sm"
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 1 }}
//         >
//           אודות מערכת <span className="text-blue-500">BeAgent</span>
//         </motion.h1>

//         {/* פסקת פתיחה */}
//         <motion.p
//           className="text-lg text-gray-700 mb-16 leading-relaxed text-center max-w-3xl mx-auto"
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           BeAgent היא פלטפורמה חדשנית לתכנון חופשות וחוויות טיול חכמות — 
//           כאן תמצאו השראה, הצעות בלעדיות וכלים מתקדמים שיאפשרו לכם לבנות את החופשה המושלמת בלחיצה אחת.
//         </motion.p>

//         {/* שני בלוקים – עם אפקט הופעה והזזה קלה */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <motion.div
//             className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
//               🌍 החזון שלנו
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               להפוך את תכנון החופשה שלכם לחוויה פשוטה, מהנה ומלאת השראה —  
//               בלי שעות של חיפושים ובלי בלבול, אלא במסע נעים ומדויק אל היעד הבא שלכם.
//             </p>
//           </motion.div>

//           <motion.div
//             className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
//               ✈️ מה אנחנו מציעים
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               מערכת חכמה להתאמה אישית של חופשות, 
//               סינון קל ונוח, הצעות ממוקדות וטיפים ישירות ממומחים בתחום התיירות.  
//               BeAgent – כי מגיע לכם לתכנן חופשה בראש שקט.
//             </p>
//           </motion.div>
//         </div>

//         {/* קריאה לפעולה */}
//         <motion.div
//           className="mt-20 text-center"
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 1, delay: 0.7 }}
//         >
//           <p className="text-gray-700 text-lg mb-6">
//             מוכנים לצאת לדרך? מצאו את היעד הבא שלכם כבר עכשיו 🌞
//           </p>
//           <button onClick={handlePlanClick}
//             className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
//           >
//             גלו חופשות
//           </button>
//         </motion.div>
//       </main>

//     </div>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  
  const navigate = useNavigate();
  const handlePlanClick = () => navigate("/all-vacations");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-24">
        {/* כותרת */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-12 text-center drop-shadow-md"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
           <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">BeAgent</span>
        </motion.h1>

        {/* פסקת פתיחה */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-20 leading-relaxed text-center max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
        >
          BeAgent היא פלטפורמה חדשנית לתכנון חופשות וחוויות טיול חכמות — 
          כאן תמצאו השראה, הצעות בלעדיות וכלים מתקדמים שיאפשרו לכם לבנות את החופשה המושלמת בלחיצה אחת.
        </motion.p>

        {/* שני בלוקים */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-700 flex items-center gap-3">
              🌍 החזון שלנו
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              להפוך את תכנון החופשה שלכם לחוויה פשוטה, מהנה ומלאת השראה —  
              בלי שעות של חיפושים ובלי בלבול, אלא במסע נעים ומדויק אל היעד הבא שלכם.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-700 flex items-center gap-3">
              ✈️ מה אנחנו מציעים
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              מערכת חכמה להתאמה אישית של חופשות, 
              סינון קל ונוח, הצעות ממוקדות וטיפים ישירות ממומחים בתחום התיירות.  
              BeAgent – כי מגיע לכם לתכנן חופשה בראש שקט.
            </p>
          </motion.div>
        </div>

        {/* קריאה לפעולה */}
        <motion.div
          className="mt-24 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            מוכנים לצאת לדרך? מצאו את היעד הבא שלכם כבר עכשיו 🌞
          </p>
          <button 
            onClick={handlePlanClick}
            className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 font-semibold text-lg md:text-xl"
          >
            גלו חופשות
          </button>
        </motion.div>
      </main>

    </div>
  );
}
