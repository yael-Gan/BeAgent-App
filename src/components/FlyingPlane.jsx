// import { motion } from "framer-motion";

// export default function FlyingPlane({ size = 50 }) {
//   return (
//     <motion.img
//       src="/public/images/airplane.png"
//       alt="plane"
//       className="absolute top-1/2 left-1/2"
//       style={{
//         width: size,
//         height: size,
//         transformOrigin: "center -150px", // רדיוס המעגל
//       }}
//       animate={{ rotate: 360 }}
//       transition={{
//         repeat: Infinity,
//         duration: 1.5, // קטן = מהיר יותר
//         ease: "linear",
//       }}
//     />
//   );
// }
import { motion } from "framer-motion";

export default function FlyingPlane({ size = 60 }) {
  return (
    <motion.img
      src="/images/airplane.png"
      alt="plane"
      className="absolute"
      style={{
        width: size,
        height: size,
      }}
      initial={{ 
        top: "35%",       // מעל אמצע הסליידר
        left: "40%",      // מתחיל מחוץ לצד שמאל
        rotate: 60        // זווית התחלתית
      }}
      animate={{ 
        top: 0,           // מגיע לפינה הימנית עליונה
        left: "100%", 
        rotate: -20 
      }}
      transition={{
        duration: 3.5,      // מהירות הטיסה
        repeat: Infinity,    // טיסה חוזרת
        ease: "linear",      // חלקה
      }}
    />
  );
}
