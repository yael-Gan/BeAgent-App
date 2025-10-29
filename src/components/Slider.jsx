
// // // import React, { useEffect, useState } from "react";

// // // function Slider({ images }) {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// // //     }, 5000);
// // //     return () => clearInterval(interval);
// // //   }, [images.length]);

// // //   return (
// // //     <div className="relative w-full h-[75vh] overflow-hidden shadow-lg mb-12">
// // //       {images.map((img, index) => (
// // //         <img
// // //           key={index}
// // //           src={img}
// // //           alt={`slide-${index}`}
// // //           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
// // //         index === currentIndex ? "opacity-100" : "opacity-0"
// // //       }`}
// // //         />
// // //       ))}
// // //       {/* <div className="absolute bottom-6 right-6 text-white text-2xl font-semibold drop-shadow-lg">
// // //         ✈️ גלו את העולם איתנו
// // //       </div> */}
// // //     </div>
// // //   );
// // // }

// // // export default Slider;
// // // // import React, { useEffect, useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // function Slider({ images }) {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setCurrentIndex((prev) => (prev + 1) % images.length);
// // // //     }, 5000); // כל 5 שניות
// // // //     return () => clearInterval(interval);
// // // //   }, [images.length]);

// // // //   const variants = {
// // // //     enter: { x: 300, opacity: 0 },
// // // //     center: { x: 0, opacity: 1 },
// // // //     exit: { x: -300, opacity: 0 },
// // // //   };

// // // //   return (
// // // //     <div className="relative w-full h-[75vh] overflow-hidden shadow-lg mb-12">
// // // //       <AnimatePresence>
// // // //         <motion.img
// // // //           key={currentIndex}
// // // //           src={images[currentIndex]}
// // // //           alt={`slide-${currentIndex}`}
// // // //           variants={variants}
// // // //           initial="enter"
// // // //           animate="center"
// // // //           exit="exit"
// // // //           transition={{ duration: 1, ease: "easeInOut" }}
// // // //           className="absolute top-0 left-0 w-full h-full object-cover"
// // // //         />
// // // //       </AnimatePresence>

// // // //       <div className="absolute bottom-6 right-6 text-white text-2xl font-semibold drop-shadow-lg">
// // // //         ✈️ גלו את העולם איתנו
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Slider;
// // import React, { useEffect, useState } from "react";

// // function Slider({ images }) {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 5000); // כל 5 שניות
// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   return (
// //     <div className="relative w-full h-[75vh] overflow-hidden shadow-lg mb-12">
// //       {images.map((img, index) => (
// //         <img
// //           key={index}
// //           src={img}
// //           alt={`slide-${index}`}
// //           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
// //             index === currentIndex ? "opacity-100" : "opacity-0"
// //           }`}
// //         />
// //       ))}

// //       {/* נקודות ניווט */}
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
// //         {images.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentIndex(index)}
// //             className={`w-3 h-3 rounded-full ${
// //               index === currentIndex ? "bg-white" : "bg-gray-400"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Slider;
// // import React, { useEffect, useState } from "react";

// // function Slider({ images, captions }) {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   return (
// //     <div className="relative w-full h-[75vh] overflow-hidden shadow-lg mb-12">
// //       {images.map((img, index) => (
// //         <img
// //           key={index}
// //           src={img}
// //           alt={`slide-${index}`}
// //           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
// //             index === currentIndex ? "opacity-100" : "opacity-0"
// //           }`}
// //         />
// //       ))}

// //       {/* כיתוב */}
// //       <div 
// //       className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-3xl font-semibold drop-shadow-lg text-center px-4">
// //         {captions[currentIndex]}
// //       </div>

// //       {/* נקודות ניווט */}
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
// //         {images.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentIndex(index)}
// //             className={`w-3 h-3 rounded-full ${
// //               index === currentIndex ? "bg-white" : "bg-gray-400"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Slider;
// // SliderWithSearch.jsx
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import FlyingPlane from "./FlyingPlane";
// import SearchBar from "./SearchBar";

// export default function Slider({ images, captions }) {
//   const [current, setCurrent] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   const handleImageLoad = () => setIsLoaded(true);

//   return (
//     <div className="relative w-full h-[80vh] overflow-hidden bg-primaryBlue">
//       {/* אנימציית מטוס ותמונות */}
//       <AnimatePresence mode="wait">
//         <FlyingPlane size={60} duration={1.5} />

//         <motion.img
//           key={current}
//           src={images[current]}
//           alt="slide"
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             isLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           onLoad={handleImageLoad}
//         />
//       </AnimatePresence>

//       {/* טקסט מרכזי */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 translate-y-10">
//         <motion.h2
//           key={captions[current]}
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-white text-3xl md:text-4xl font-semibold
//                      drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)] max-w-3xl leading-snug"
//         >
//           {captions[current]}
//         </motion.h2>

//         <div className="mt-3 w-20 h-1 bg-white rounded-full"></div>
//       </div>

//       {/* נקודות ניווט */}
//       <div className="absolute bottom-8 w-full flex justify-center gap-3">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === current
//                 ? "bg-white scale-125"
//                 : "bg-white/40 hover:bg-white/70"
//             }`}
//           ></button>
//         ))}
//       </div>

//       {/* תיבת החיפוש צפה מעל הסליידר */}
//       {/* <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-full max-w-5xl z-10">
//         <SearchBar />
//       </div> */}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlyingPlane from "./FlyingPlane";
import SearchBar from "./SearchBar";

export default function Slider({ images, captions }) {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleImageLoad = () => setIsLoaded(true);

  // עיגולים שקופים ברקע
  const circles = [
    { top: "10%", left: "15%", size: 72, delay: 0 },
    { top: "30%", left: "70%", size: 100, delay: 1 },
    { top: "60%", left: "40%", size: 64, delay: 0.5 },
    { top: "20%", left: "50%", size: 80, delay: 1.5 },
    { top: "50%", left: "10%", size: 50, delay: 0.3 },
    { top: "15%", left: "80%", size: 90, delay: 0.8 },
    { top: "70%", left: "75%", size: 70, delay: 1.2 },
  ];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-primaryBlue">

      {/* רקע – עיגולים שקופים */}
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{ width: circle.size, height: circle.size, top: circle.top, left: circle.left }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: circle.delay }}
        />
      ))}

      {/* מטוס */}
      <FlyingPlane size={60} duration={1.5} />

      {/* תמונות סליידר */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="slide"
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onLoad={handleImageLoad}
        />
      </AnimatePresence>

      {/* טקסט מרכזי */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 translate-y-10">
        <motion.h2
          key={captions[current]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-3xl md:text-4xl font-semibold drop-shadow-lg max-w-3xl leading-snug"
        >
          {captions[current]}
        </motion.h2>

        <div className="mt-3 w-20 h-1 bg-white rounded-full"></div>
      </div>

      {/* נקודות ניווט */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* SearchBar צף מעל הסליידר */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-full max-w-5xl z-10">
        <SearchBar />
      </div> */}
    </div>
  );
}
