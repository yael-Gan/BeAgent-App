// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white p-6 mt-12 text-center ">
//       <p>סוכנות הנסיעות שלנו © 2025</p>
//       <p>טלפון: 03-1234567 | אימייל: info@travelagency.com</p>
//           <h1
//         className="text-2xl font-bold text-primaryBlue cursor-pointer w-1/3 flex justify-start"
//       >
//         BeAgent
//       </h1>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-0 grid md:grid-cols-2 gap-10">
        
        {/* לוגו וטקסט */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold text-white  mb-4 cursor-pointer">
            BeAgent
          </h1>
          <p className="text-gray-300 mb-2">סוכנות הנסיעות שלנו © 2025</p>
          <p className="text-gray-400">חופשות חלומיות לכל העולם</p>
        </div>

        {/* מידע וקישורים */}
        <div className="flex flex-col md:items-end">
          <div className="flex items-center mb-2 text-gray-300 hover:text-white transition cursor-pointer">
            <FaPhoneAlt className="mr-2" /> 03-1234567
          </div>
          <div className="flex items-center mb-4 text-gray-300 hover:text-white transition cursor-pointer">
            <FaEnvelope className="mr-2" /> info@travelagency.com
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-primaryBlue transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-primaryBlue transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-primaryBlue transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* קו תחתון */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        Created with ❤️ by BeAgent Team
      </div>
    </footer>
  );
}

// import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-blue-50 text-gray-700 pt-16 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Grid עם קטגוריות וטופס */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
//           {/* קטגוריות */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4 text-blue-800">חופשות</h3>
//             <ul className="space-y-2">
//               <li><a href="/beach" className="hover:text-blue-500 transition">חופים</a></li>
//               <li><a href="/mountains" className="hover:text-blue-500 transition">הרים</a></li>
//               <li><a href="/cities" className="hover:text-blue-500 transition">ערים</a></li>
//               <li><a href="/ski" className="hover:text-blue-500 transition">סקי</a></li>
//               <li><a href="/nature" className="hover:text-blue-500 transition">טבע</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-4 text-blue-800">מידע</h3>
//             <ul className="space-y-2">
//               <li><a href="/about" className="hover:text-blue-500 transition">אודותינו</a></li>
//               <li><a href="/faq" className="hover:text-blue-500 transition">שאלות נפוצות</a></li>
//               <li><a href="/terms" className="hover:text-blue-500 transition">תנאי שימוש</a></li>
//               <li><a href="/privacy" className="hover:text-blue-500 transition">פרטיות</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-4 text-blue-800">תמיכה</h3>
//             <ul className="space-y-2">
//               <li><a href="/contact" className="hover:text-blue-500 transition flex items-center"><FaEnvelope className="mr-2"/>שלח לנו מייל</a></li>
//               <li><a href="tel:+972123456789" className="hover:text-blue-500 transition flex items-center"><FaPhone className="mr-2"/>התקשר אלינו</a></li>
//             </ul>
//           </div>

//           {/* טופס יצירת קשר */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4 text-blue-800">צור קשר</h3>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="שם מלא"
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <input
//                 type="email"
//                 placeholder="אימייל"
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <textarea
//                 placeholder="הודעה"
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 h-24"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 שלח הודעה
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* סושיאל מדיה */}
//         <div className="mt-12 flex justify-center space-x-6">
//           <a href="#" className="text-gray-500 hover:text-blue-600 transition"><FaFacebookF /></a>
//           <a href="#" className="text-gray-500 hover:text-pink-500 transition"><FaInstagram /></a>
//           <a href="#" className="text-gray-500 hover:text-blue-400 transition"><FaTwitter /></a>
//         </div>

//         <div className="mt-8 text-center text-gray-500 text-sm">
//           &copy; {new Date().getFullYear()} כל הזכויות שמורות
//         </div>
//       </div>
      
//     </footer>
//   );
// }
