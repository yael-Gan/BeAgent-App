// // // export default function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
// // //   return (
// // //     <form onSubmit={handleSearch} className="mb-6 flex gap-2">
// // //       <input
// // //         type="text"
// // //         placeholder="חפש יעד..."
// // //         value={searchTerm}
// // //         onChange={(e) => setSearchTerm(e.target.value)}
// // //         className="flex-1 p-2 border rounded"
// // //       />
// // //       <button type="submit" className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
// // //         חפש
// // //       </button>
// // //     </form>
// // //   );
// // // }
// // import React, { useState } from "react";

// // function SearchBar() {
// //   const [from, setFrom] = useState("");
// //   const [to, setTo] = useState("");
// //   const [departureDate, setDepartureDate] = useState("");
// //   const [returnDate, setReturnDate] = useState("");

// //   const handleSearch = () => {
// //     console.log("Searching flights:", { from, to, departureDate, returnDate });
// //   };

// //   return (
// //     <div  id="search-section" className="max-w-6xl mx-auto p-6 bg-white rounded-xl -mt-20 relative z-10 shadow-lg">
// //       <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
// //         {/* שדה מוצא */}
// //         <div className="flex flex-col">
// //           <label className="text-gray-600 font-medium mb-1">מוצא</label>
// //           <input
// //             type="text"
// //             value={from}
// //             onChange={(e) => setFrom(e.target.value)}
// //             placeholder="הזן עיר או נמל תעופה"
// //             className="p-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* שדה יעד */}
// //         <div className="flex flex-col">
// //           <label className="text-gray-600 font-medium mb-1">יעד</label>
// //           <input
// //             type="text"
// //             value={to}
// //             onChange={(e) => setTo(e.target.value)}
// //             placeholder="הזן עיר או נמל תעופה"
// //             className="p-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* תאריך יציאה */}
// //         <div className="flex flex-col">
// //           <label className="text-gray-600 font-medium mb-1">תאריך יציאה</label>
// //           <input
// //             type="date"
// //             value={departureDate}
// //             onChange={(e) => setDepartureDate(e.target.value)}
// //             className="p-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* תאריך חזרה */}
// //         <div className="flex flex-col">
// //           <label className="text-gray-600 font-medium mb-1">תאריך חזרה</label>
// //           <input
// //             type="date"
// //             value={returnDate}
// //             onChange={(e) => setReturnDate(e.target.value)}
// //             className="p-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* כפתור חיפוש */}
// //         <div className="flex flex-col">
// //           <button
// //             onClick={handleSearch}
// //             className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
// //           >
// //             חפש טיסות
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SearchBar;
// import { FiSearch } from "react-icons/fi";

// export default function SearchBar() {
//   return (
//     <section
//       id="search-section"
//       className="flex flex-col items-center justify-center mt-32 mb-20"
//     >
//       <h2 className="text-3xl font-semibold text-primaryBlue mb-8">
//         מצאו את החופשה המושלמת
//       </h2>

//       <div className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl px-8 py-6 w-full max-w-5xl">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* מוצא */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="מוצא"
//               className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none pb-1 text-lg transition-colors"
//             />
//           </div>

//           {/* יעד */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="יעד"
//               className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none pb-1 text-lg transition-colors"
//             />
//           </div>

//           {/* תאריך */}
//           <div className="relative">
//             <input
//               type="date"
//               className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none pb-1 text-lg transition-colors"
//             />
//           </div>

//           {/* כפתור חיפוש */}
//           <button className="flex items-center justify-center gap-2 bg-primaryBlue hover:bg-blue-800 text-white text-lg font-semibold rounded-full py-2.5 transition-all shadow-md">
//             <FiSearch className="text-xl" />
//             חיפוש
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
// SearchBar.jsx
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <section
      id="search-section"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl px-8 py-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4 items-center">
          {/* מוצא */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">מהיכן?</label>
            <input
              type="text"
              placeholder="מוצא"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* חץ / תמונה
          <div className="flex items-center justify-center">
            <img
              src="/public/travel.png"
              alt="Arrow"
              className="w-12 h-12"
            />
          </div> */}
          <div className="flex items-center justify-center md:mt-6">
            <motion.img
              src="/public/travel.png"
              alt="Arrow"
              className="w-10 h-10"
              animate={{ y: ["0%", "-15%", "0%"] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </div>

          {/* יעד */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">לאן?</label>
            <input
              type="text"
              placeholder="יעד"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* תאריך יציאה */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">יציאה</label>
            <input
              type="date"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* תאריך חזרה */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">חזרה</label>
            <input
              type="date"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* חדרים */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">חדרים</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* מבוגרים */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">מבוגרים</label>
            <input
              type="number"
              min="1"
              defaultValue="2"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* ילדים */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">ילדים</label>
            <input
              type="number"
              min="0"
              defaultValue="0"
              className="w-full border-b-2 border-blue-200 focus:border-primaryBlue bg-transparent text-gray-700 focus:outline-none h-12 text-lg transition-colors"
            />
          </div>

          {/* כפתור חיפוש */}
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center gap-2 bg-primaryBlue hover:bg-blue-800 text-white text-lg font-semibold rounded-full py-2.5 px-6 h-12 transition-all shadow-md">
              <FiSearch className="text-xl" />
              חפש  
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
