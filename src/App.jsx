import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AllVacations from './pages/AllVacations';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HotDeals from './components/HotDeals';
import DealDetails from './components/DealDetails';
import Contact from './pages/Contact';
import SearchFlights from './components/SearchFlights';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const deals = [
    {
      id: 1,
      title: "חופשה במלדיביים",
      description: "5 לילות במלון יוקרתי כולל טיסות",
      price: "₪6,990",
      img: "/images/maldives.jpg",
    },
    {
      id: 2,
      title: "חבילת סקי בשווייץ",
      description: "3 לילות כולל ציוד והעברות",
      price: "₪4,250",
      img: "/images/switzerland.jpg",
    },
  ];
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/all-vacations" element={<AllVacations />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<HotDeals deals={deals} />} />
        <Route path="/deal/:id" element={<DealDetails />} />
        <Route path="/concat-us" element={<Contact />} />
        <Route path="/search-flights" element={<SearchFlights />} />


        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
