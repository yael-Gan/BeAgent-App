// import React, { useState } from "react";
// import axios from "axios";

// export default function SearchFlights() {
//   const [departure, setDeparture] = useState("");
//   const [arrival, setArrival] = useState("");
//   const [dateFrom, setDateFrom] = useState("");
//   const [dateTo, setDateTo] = useState("");
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!departure || !arrival || !dateFrom) {
//       alert("אנא מלאי את כל השדות חובה");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.get("http://api.aviationstack.com/v1/flights", {
//         params: {
//           access_key: "4454695cc540e8303139bd1a843eae90",
//           dep_iata: departure,
//           arr_iata: arrival,
//           flight_date: dateFrom,
//           limit: 10,
//         },
//       });
//       setFlights(response.data.data);
//     } catch (error) {
//       console.error("שגיאה בשליפת נתונים:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       {/* תיבת החיפוש */}
//       <div className="bg-white shadow-lg rounded-xl p-6 mb-8 flex flex-col md:flex-row gap-4 items-end">
//         <div className="flex-1 flex flex-col">
//           <label className="text-gray-500 mb-1">מוצא (IATA)</label>
//           <input
//             type="text"
//             value={departure}
//             onChange={(e) => setDeparture(e.target.value.toUpperCase())}
//             placeholder="למשל TLV"
//             className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
//           />
//         </div>

//         <div className="flex-1 flex flex-col">
//           <label className="text-gray-500 mb-1">יעד (IATA)</label>
//           <input
//             type="text"
//             value={arrival}
//             onChange={(e) => setArrival(e.target.value.toUpperCase())}
//             placeholder="למשל JFK"
//             className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
//           />
//         </div>

//         <div className="flex-1 flex flex-col">
//           <label className="text-gray-500 mb-1">תאריך יציאה</label>
//           <input
//             type="date"
//             value={dateFrom}
//             onChange={(e) => setDateFrom(e.target.value)}
//             className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
//           />
//         </div>

//         <div className="flex-1 flex flex-col">
//           <label className="text-gray-500 mb-1">תאריך חזרה (לא חובה)</label>
//           <input
//             type="date"
//             value={dateTo}
//             onChange={(e) => setDateTo(e.target.value)}
//             className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
//           />
//         </div>

//         <button
//           onClick={handleSearch}
//           className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//         >
//           חפש טיסות
//         </button>
//       </div>

//       {/* הצגת התוצאות */}
//       {loading ? (
//         <p className="text-center text-gray-500">טוען טיסות...</p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {flights.map((flight, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-xl p-5 border-t-4 border-blue-300 hover:shadow-2xl transition-shadow duration-300"
//             >
//               <h3 className="text-xl font-semibold text-blue-800 mb-2">
//                 {flight.airline?.name || "חברת תעופה לא ידועה"} ({flight.flight?.iata})
//               </h3>
//               <p className="text-gray-500 text-sm">מוצא: {flight.departure?.airport || "-"}</p>
//               <p className="text-gray-500 text-sm">יעד: {flight.arrival?.airport || "-"}</p>
//               <p
//                 className={`font-semibold mt-2 ${
//                   flight.flight_status === "active"
//                     ? "text-green-500"
//                     : flight.flight_status === "landed"
//                     ? "text-gray-500"
//                     : "text-yellow-500"
//                 }`}
//               >
//                 סטטוס: {flight.flight_status || "-"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import FlightsList from "./FlightsList";

export default function SearchFlights() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!departure || !arrival || !dateFrom) {
      alert("אנא מלאי את כל השדות חובה");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("https://api.aviationstack.com/v1/flights", {
        params: {
          access_key: "4454695cc540e8303139bd1a843eae90",
          dep_iata: departure,
          arr_iata: arrival,
          flight_date: dateFrom,
          limit: 10,
        },
      });
      setFlights(response.data.data);
    } catch (error) {
      console.error("שגיאה בשליפת נתונים:", error);
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12  md:pt-32">
      {/* כותרת דינמית */}
   <motion.h1
  className="text-5xl md:text-6xl font-normal text-center mb-12 text-blue-700 drop-shadow-md"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <span className="text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
    חפש טיסות ✈️
  </span>

  {/* כוכבים זוהרים סביב הכותרת */}
  <motion.span
    className="absolute top-0 left-1/4 text-yellow-400 text-2xl"
    animate={{ rotate: [0, 360] }}
    transition={{ repeat: Infinity, duration: 4 }}
  >
    ⭐
  </motion.span>
  <motion.span
    className="absolute top-2 right-1/4 text-yellow-400 text-xl"
    animate={{ rotate: [0, -360] }}
    transition={{ repeat: Infinity, duration: 5 }}
  >
    ✨
  </motion.span>
</motion.h1>

      {/* תיבת חיפוש */}
      <motion.div
        className="bg-white shadow-2xl rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-4 items-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/** שדות חיפוש **/}
        <div className="flex-1 flex flex-col">
          <label className="text-gray-500 mb-1">מוצא (IATA)</label>
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value.toUpperCase())}
            placeholder="למשל TLV"
            className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 transition-all"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label className="text-gray-500 mb-1">יעד (IATA)</label>
          <input
            type="text"
            value={arrival}
            onChange={(e) => setArrival(e.target.value.toUpperCase())}
            placeholder="למשל JFK"
            className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 transition-all"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label className="text-gray-500 mb-1">תאריך יציאה</label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 transition-all"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label className="text-gray-500 mb-1">תאריך חזרה</label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 transition-all"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          חפש
        </button>
      </motion.div>

      {/* תוצאות */}
      {loading ? (
        <p className="text-center text-gray-500">טוען טיסות...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flights.map((flight, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white shadow-2xl rounded-3xl p-6 border-t-4 border-blue-300 hover:shadow-3xl transition-shadow duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 m-3 text-yellow-400 text-xl animate-pulse">✈️</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">{flight.airline?.name || "חברת תעופה"} ({flight.flight?.iata || "-"})</h3>
              <div className="flex justify-between mb-2">
                <div>
                  <p className="text-gray-500 text-sm">מוצא</p>
                  <p className="font-medium">{flight.departure?.airport || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">יעד</p>
                  <p className="font-medium">{flight.arrival?.airport || "-"}</p>
                </div>
              </div>
              <p className={`font-semibold mt-2 ${
                flight.flight_status === "active" ? "text-green-500" :
                flight.flight_status === "landed" ? "text-gray-500" :
                "text-yellow-500"
              }`}>
                סטטוס: {flight.flight_status || "-"}
              </p>
            </motion.div>
          ))}
        </div>
      )}
      <FlightsList />
    </div>
  );
}


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// export default function SearchFlights() {
//   const [departure, setDeparture] = useState("");
//   const [arrival, setArrival] = useState("");
//   const [dateFrom, setDateFrom] = useState("");
//   const [dateTo, setDateTo] = useState("");
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!departure || !arrival || !dateFrom) {
//       alert("אנא מלאי את כל השדות חובה");
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.get("http://api.aviationstack.com/v1/flights", {
//         params: {
//           access_key: "4454695cc540e8303139bd1a843eae90",
//           dep_iata: departure,
//           arr_iata: arrival,
//           flight_date: dateFrom,
//           limit: 10,
//         },
//       });
//       setFlights(response.data.data);
//     } catch (error) {
//       console.error("שגיאה בשליפת נתונים:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 60, scale: 0.95 },
//     visible: i => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12 md:pt-32">
//       {/* כותרת מטורפת */}
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold text-center mb-16 relative text-blue-700"
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 250, damping: 25 }}
//       >
//         <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//           ✈️ חפש טיסות בעולם שלך ✈️
//         </span>
//         <motion.span
//           className="absolute top-0 left-1/3 text-yellow-400 text-3xl"
//           animate={{ rotate: [0, 360] }}
//           transition={{ repeat: Infinity, duration: 5 }}
//         >⭐</motion.span>
//         <motion.span
//           className="absolute top-1/4 right-1/4 text-yellow-300 text-2xl"
//           animate={{ rotate: [0, -360] }}
//           transition={{ repeat: Infinity, duration: 6 }}
//         >✨</motion.span>
//       </motion.h1>

//       {/* תיבת חיפוש מושקעת */}
//       <motion.div
//         className="bg-gradient-to-r from-white/90 to-blue-50 backdrop-blur-lg shadow-2xl rounded-3xl p-8 mb-12 flex flex-col md:flex-row gap-6 items-end border-t-8 border-indigo-400"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {/** שדות חיפוש */}
//         <div className="flex-1 flex flex-col relative group">
//           <label className="text-gray-500 mb-1 font-semibold">מוצא (IATA)</label>
//           <input
//             type="text"
//             value={departure}
//             onChange={(e) => setDeparture(e.target.value.toUpperCase())}
//             placeholder="למשל TLV"
//             className="border-b-4 border-blue-200 focus:border-blue-500 outline-none py-3 px-2 transition-all rounded-lg shadow-sm group-focus-within:shadow-xl"
//           />
//         </div>
//         <div className="flex-1 flex flex-col relative group">
//           <label className="text-gray-500 mb-1 font-semibold">יעד (IATA)</label>
//           <input
//             type="text"
//             value={arrival}
//             onChange={(e) => setArrival(e.target.value.toUpperCase())}
//             placeholder="למשל JFK"
//             className="border-b-4 border-pink-200 focus:border-pink-400 outline-none py-3 px-2 transition-all rounded-lg shadow-sm group-focus-within:shadow-xl"
//           />
//         </div>
//         <div className="flex-1 flex flex-col relative group">
//           <label className="text-gray-500 mb-1 font-semibold">תאריך יציאה</label>
//           <input
//             type="date"
//             value={dateFrom}
//             onChange={(e) => setDateFrom(e.target.value)}
//             className="border-b-4 border-green-200 focus:border-green-400 outline-none py-3 px-2 transition-all rounded-lg shadow-sm group-focus-within:shadow-xl"
//           />
//         </div>
//         <div className="flex-1 flex flex-col relative group">
//           <label className="text-gray-500 mb-1 font-semibold">תאריך חזרה</label>
//           <input
//             type="date"
//             value={dateTo}
//             onChange={(e) => setDateTo(e.target.value)}
//             className="border-b-4 border-purple-200 focus:border-purple-400 outline-none py-3 px-2 transition-all rounded-lg shadow-sm group-focus-within:shadow-xl"
//           />
//         </div>
//         <motion.button
//           onClick={handleSearch}
//           className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-bold py-3 px-10 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transform transition-all duration-500"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           חפש
//         </motion.button>
//       </motion.div>

//       {/* תוצאות */}
//       {loading ? (
//         <p className="text-center text-gray-500 text-lg animate-pulse">טוען טיסות...</p>
//       ) : (
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {flights.map((flight, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial="hidden"
//               animate="visible"
//               variants={cardVariants}
//               className="bg-white shadow-2xl rounded-3xl p-6 border-t-4 border-gradient-to-r from-indigo-400 to-pink-400 hover:shadow-3xl transition-shadow duration-500 cursor-pointer relative overflow-hidden group"
//             >
//               <div className="absolute -top-4 -right-4 text-yellow-400 text-3xl animate-bounce group-hover:scale-125 transition-transform">✈️</div>
//               <h3 className="text-xl font-extrabold text-indigo-600 mb-3">
//                 {flight.airline?.name || "חברת תעופה"} ({flight.flight?.iata || "-"})
//               </h3>
//               <div className="flex justify-between mb-3 text-gray-600">
//                 <div>
//                   <p className="text-sm">מוצא</p>
//                   <p className="font-medium">{flight.departure?.airport || "-"}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm">יעד</p>
//                   <p className="font-medium">{flight.arrival?.airport || "-"}</p>
//                 </div>
//               </div>
//               <p className={`font-semibold mt-3 ${
//                 flight.flight_status === "active" ? "text-green-500" :
//                 flight.flight_status === "landed" ? "text-gray-500" :
//                 "text-yellow-500"
//               }`}>
//                 סטטוס: {flight.flight_status || "-"}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

