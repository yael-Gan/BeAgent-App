import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiHelpCircle } from "react-icons/fi";
import { FaUniversalAccess } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();

  const handleScrollToSearch = () => {
    const searchSection = document.getElementById("search-section");
    if (searchSection) {
      const yOffset = -100;
      const y =
        searchSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePlanClick = () => navigate("/all-vacations");
  const handleLoginClick = () => navigate("/login");
  const handleSignupClick = () => navigate("/signup");
  const handleAboutClick = () => navigate("/about-us");
  const handleConcatClick = () => navigate("/concat-us");
  const handleFlightsClick = () => navigate("/search-flights");



  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 bg-white shadow-md flex items-center px-8 font-extralight">
      {/* 🔹 לוגו בצד שמאל */}
      <h1
        className="text-2xl font-bold text-primaryBlue cursor-pointer w-1/3 flex justify-start"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        BeAgent
      </h1>

      {/* 🔹 ניווט במרכז */}
      <nav className="w-1/3 flex items-center justify-center space-x-2">
        <button
          className="text-primaryBlue font-normal px-2 py-1 border-b-2 border-transparent hover:border-blue-700 transition-all"
          onClick={handlePlanClick}
        >
          לתכנן
        </button>
        <span className="text-gray-400">|</span>

        <button
          className="text-primaryBlue font-normal px-2 py-1 border-b-2 border-transparent hover:border-blue-700 transition-all"
          onClick={handleFlightsClick}
        >
          טיסות
        </button>
        <span className="text-gray-400">|</span>

        <button
          className="text-primaryBlue font-normal px-2 py-1 border-b-2 border-transparent hover:border-blue-700 transition-all"
          onClick={handleAboutClick}
        >
          אודותינו
        </button>
        <span className="text-gray-400">|</span>

        <button className="text-primaryBlue font-normal px-2 py-1 border-b-2 border-transparent hover:border-blue-700 transition-all"
        onClick={handleConcatClick}>
          יצירת קשר
        </button>
      </nav>

      {/* 🔹 צד ימין - כפתורים ואייקונים */}
      <div className="w-1/3 flex items-center justify-end space-x-4">

<div className="flex items-center gap-2">
  {/* 🔍 חיפוש */}
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="cursor-pointer text-primaryBlue"
    onClick={handleScrollToSearch}
  >
    <FiSearch size={25} />
  </motion.div>

  {/* ❓ אודות */}
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    onClick={handleAboutClick}
    className="cursor-pointer text-primaryBlue"
  >
    <FiHelpCircle size={25} />
  </motion.div>

  {/* ♿ נגישות */}
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="cursor-pointer text-primaryBlue"
  >
    <FaUniversalAccess size={25} />
  </motion.div>
</div>

        <button
          onClick={handleSignupClick}
          className="text-primaryBlue font-semibold px-4 py-2 border-b-2 border-transparent hover:border-primaryBlue transition-all"
        >
          הרשמה
        </button>
        <button
          onClick={handleLoginClick}
          className="bg-white text-primaryBlue font-semibold px-6 py-2 rounded-lg border-2 border-primaryBlue shadow-md hover:border-[3px] transition-all"
        >
          התחברות
        </button>
      </div>
    </header>
  );
}
