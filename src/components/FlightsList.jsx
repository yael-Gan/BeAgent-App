// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function FlightsList() {
// //   const [flights, setFlights] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchFlights = async () => {
// //       try {
// //         const response = await axios.get("http://api.aviationstack.com/v1/flights", {
// //           params: {
// //             access_key: process.env.REACT_APP_AVIATION_KEY,
// //             limit: 5, // רק 5 טיסות לדוגמה
// //           },
// //         });
// //         setFlights(response.data.data);
// //       } catch (error) {
// //         console.error("שגיאה בשליפת נתונים מה־API:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchFlights();
// //   }, []);

// //   if (loading) return <p>טוען טיסות...</p>;

// //   return (
// //     <div className="p-6 max-w-3xl mx-auto">
// //       <h2 className="text-2xl font-bold mb-4">✈️ טיסות בזמן אמת</h2>
// //       <ul className="space-y-2">
// //         {flights.map((flight, index) => (
// //           <li key={index} className="border-b border-gray-300 pb-2">
// //             <p><strong>חברת תעופה:</strong> {flight.airline?.name || "לא ידוע"}</p>
// //             <p><strong>מספר טיסה:</strong> {flight.flight?.iata || "-"}</p>
// //             <p><strong>מוצא:</strong> {flight.departure?.airport || "-"}</p>
// //             <p><strong>יעד:</strong> {flight.arrival?.airport || "-"}</p>
// //             <p><strong>סטטוס:</strong> {flight.flight_status || "-"}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function FlightsList() {
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFlights = async () => {
//       try {
//         const response = await axios.get("http://api.aviationstack.com/v1/flights", {
//           params: {
//             access_key: "4454695cc540e8303139bd1a843eae90",
//             limit: 5,
//           },
//         });
//         console.log("🔍 Response:", response.data); // 👈 נבדוק מה חוזר
//         setFlights(response.data.data);
//       } catch (error) {
//         console.error("❌ שגיאה בשליפת נתונים מה־API:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlights();
//   }, []);

//   if (loading) return <p>טוען טיסות...</p>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">✈️ טיסות בזמן אמת</h2>
//       <ul className="space-y-2">
//         {flights.map((flight, index) => (
//           <li key={index} className="border-b border-gray-300 pb-2">
//             <p><strong>חברת תעופה:</strong> {flight.airline?.name || "לא ידוע"}</p>
//             <p><strong>מספר טיסה:</strong> {flight.flight?.iata || "-"}</p>
//             <p><strong>מוצא:</strong> {flight.departure?.airport || "-"}</p>
//             <p><strong>יעד:</strong> {flight.arrival?.airport || "-"}</p>
//             <p><strong>סטטוס:</strong> {flight.flight_status || "-"}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FlightsList() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://api.aviationstack.com/v1/flights", {
          params: {
            access_key: "4454695cc540e8303139bd1a843eae90",
            limit: 5,
          },
        });
        setFlights(response.data.data);
      } catch (error) {
        console.error("שגיאה בשליפת נתונים מה־API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">טוען טיסות...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        ✈️ טיסות בזמן אמת
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 border-t-2 border-blue-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {flight.airline?.name || "חברת תעופה לא ידועה"} 
              {" "}({flight.flight?.iata || "-"})
            </h3>

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

            <p className={`font-semibold mt-3 ${
              flight.flight_status === "active"
                ? "text-green-500"
                : flight.flight_status === "landed"
                ? "text-gray-500"
                : "text-yellow-500"
            }`}>
              סטטוס: {flight.flight_status || "-"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
