import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VacationsIntro from "../components/VacationsIntro";

// דוגמת נתוני חופשות
const vacationsData = [
  {
    id: 1,
    title: "חופשה בתאילנד",
    image: "/images/Tailand/tailand.jpg",
    description: "10 לילות כולל טיסה ומלון מפנק",
    price: "₪5,300 בלבד!",
  },
  {
    id: 2,
    title: "טיול סקי בשוויץ",
    image: "/images/Swaitz/shwaich.jpg",
    description: "7 ימים כולל ציוד סקי מלא",
    price: "₪4,200 בלבד!",
  },
  {
    id: 3,
    title: "חופשה ביוון",
    image: "/images/Yavan/yavan.png",
    description: "5 לילות, טיסה ומלון",
    price: "₪2,500 בלבד!",
  },
  {
    id: 4,
    title: "חופשה באילת",
    image: "/images/Eilat/667x418 Eilat hotels_0002_DAN_3854.jpg",
    description: "חופשה קייצית עם פעילויות לכל המשפחה",
    price: "₪3,000 בלבד!",
  },
    {
    id: 5,
    title: "חופשה באיטליה",
    image: "/images/Italy/italy_p-scaled.jpg",
    description: "סיור בערים האמנותיות ואוכל מקומי",
    price: "₪4,800 בלבד!",
  },{
    id: 6,
    title: "חופשה בצרפת",
    image: "/images/France/Seine_2_Paris.jpg",
    description: "פריז, חופים וקולינריה צרפתית",
    price: "₪5,100 בלבד!",
  },
  {
    id: 7,
    title: "חופשה ביפן",
    image: "/images/Japan/יפן-בתקופת-הדובדבן.jpg",
    description: "תרבות יפנית, מסעדות וטבע קסום",
    price: "₪6,000 בלבד!",
  },
  {
    id: 8,
    title: "חופשה בקפריסין",
    image: "/images/Cyprus/333c78d41886d474e7eb10c6d054766b.jpg",
    description: "חופים זהובים ומלונות יוקרה",
    price: "₪3,500 בלבד!",
  },
  {
    id: 9,
    title: "חופשה באיסלנד",
    image: "/images/Iceland/an-evening-of-northern-lights-at-laugarvatn-fontana-4.jpg",
    description: "נופים פראיים, מעיינות חמים והרפתקאות",
    price: "₪6,500 בלבד!",
  },
  {
    id: 10,
    title: "חופשה בברזיל",
    image: "/images/Brazil/brazil-with-children-1.webp",
    description: "חופים טרופיים, קרנבל ואטרקציות טבע",
    price: "₪5,700 בלבד!",
  },

];

export default function AllVacations() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen p-8" dir="rtl">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        כל החופשות שלנו
      </h1>
{/* <div className="text-center my-6 px-4">
  <h2 className="text-2xl font-semibold mb-2">חופשות חלומיות לכל המשפחה</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    כאן תוכלו למצוא חופשות מגוונות – חופים, ערים אירופאיות, סקי, טבע ועוד. בחרו את החופשה שמתאימה לכם ותתחילו לתכנן!
  </p>
</div> */}
<VacationsIntro/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vacationsData.map((vacation) => (
          <motion.div
            key={vacation.id}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => setHovered(vacation.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* תמונה */}
            <motion.img
              src={vacation.image}
              alt={vacation.title}
              className="w-full h-64 object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: hovered === vacation.id ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* שכבת טקסט מעל התמונה */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered === vacation.id ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-white text-xl font-semibold">
                {vacation.title}
              </h2>
              <p className="text-gray-200 mt-1">{vacation.description}</p>
              <p className="text-yellow-300 font-bold mt-2">{vacation.price}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
