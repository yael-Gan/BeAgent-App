import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Header from "../components/Header";
import Slider from "../components/Slider";
import HeroSection from "../components/HeroSection";
import HotDeals from "../components/HotDeals";
import PopularCategories from "../components/PopularCategories";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import FlightsList from "../components/FlightsList";
import SearchFlights from "../components/SearchFlights";
import PathMorphing from "../components/PathMorphing";

// Image paths (mocked via public folder)
const sliderImages = [
  "/images/Tailand/beach-exotic-holiday-248797-1.jpg",
  "images/Brazil/9124_brazil.jpg",
  "images/Europa/salzburg1.jpg",
  "/images/Yavan/yavan.png",
  "/images/Swaitz/swiss.jpg",
  // "/images/Swaitz/shwaich.jpg",
  "/images/teva.jpg",
  "/images/Iceland/0b8a4933_1.jpg",
];
// const captions = [
//   "תאילנד הקסומה – חופים לבנים, תרבות עשירה ואוכל מדהים",
//     "סלצבורג, אוסטריה – עיר קסומה של תרבות ומוזיקה",
//   "יוון – חופים כחולים, היסטוריה מרתקת ואווירה ים-תיכונית",
//   "שוויץ – הרים מושלגים ונופים מרהיבים",
//   "ישראל – חופשה בלתי נשכחת בארץ הקודש עם טבע ותרבות"
// ];
const captions = [
  "תאילנד – חופים לבנים, תרבות צבעונית ואוכל שממלא את החושים בחוויה מדהימה ",
  "ברזיל — כשכל יום מרגיש כמו חג.",
  "סלצבורג, אוסטריה – גלו את קסם המוזיקה וההרים המושלגים בחופשה בלתי נשכחת ",
  "יוון – הרפתקאות בין ים כחול ושמש חמה, עם היסטוריה שמספרת סיפור בלתי נשכח ",
  "שוויץ –  הרים מושלגים ונופים עוצרי נשימה לחופשה חלומית ",

];

const deals = [
  { img: "/images/Yavan/yavan.png", title: "חופשה ביוון", description: "5 לילות, טיסה ומלון", price: "₪2,500 בלבד!" },
  { img: "/images/Swaitz/shwaich.jpg", title: "טיול סקי בשוויץ", description: "7 ימים כולל ציוד", price: "₪4,200 בלבד!" },
  { img: "/images/Tailand/tailand.jpg", title: "חופשה בתאילנד", description: "10 לילות כולל טיסה", price: "₪5,300 בלבד!" },
];

const categories = [
  { img: "/images/bench.jpg", name: "חופים" },
  { img: "/images/ski.webp", name: "סקי" },
  { img: "/images/Europa/salzburg2.jpg", name: "ערים אירופאיות" },
  { img: "/images/teva.jpg", name: "טבע וטיולים" },
];

// Mock vacations data
const vacationsData = [
  {
    id: 1,
    title: "חופשה באילת",
    images: [
      "https://source.unsplash.com/random/800x600/?eilat,beach",
      "https://source.unsplash.com/random/800x600/?hotel"
    ],
    meta: { beds: 2, airline: "אל על" },
    destination: "Eilat",
    tags: ["beach", "family"]
  },
  {
    id: 2,
    title: "חופשה בצפון",
    images: [
      "https://source.unsplash.com/random/800x600/?north,landscape",
      "https://source.unsplash.com/random/800x600/?hotel"
    ],
    meta: { beds: 3, airline: "ישראייר" },
    destination: "North",
    tags: ["nature", "mountains"]
  }
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(vacationsData);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // נווט לדף התחברות
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const result = vacationsData.filter((v) =>
      v.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(result);
    navigate("/search-results", { state: { results: result } });
  };

  return (
    <>
      <Header />

      <div className="min-h-screen m-0 p-0 pt-20 w-full" dir="rtl">
        {/* Slider Section */}
     <div  className="relative">
       <Slider images={sliderImages} captions={captions} />
        {/* Search Bars */}
        {/* <div className="p-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        </div> */}
        {/* Hero Section */}
  <div className="w-full max-w-5xl mx-auto mb-16 -mt-16 relative z-20">
        <SearchBar />
      </div>
     </div>
        <HeroSection/>



        {/* Hot Deals */}
        <HotDeals deals={deals} />
        {/* Popular Categories */}
        <PopularCategories categories={categories} />
        {/* <FlightsList /> */}
        {/* <SearchFlights /> */}
        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
