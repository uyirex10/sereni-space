import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import StartRitual from "./pages/StartRitual";
import LearnMore from "./pages/LearnMore";
import ExploreSpaces from "./pages/ExploreSpaces";
import SpaceBooking from "./pages/SpaceBooking";
import { Toaster } from "react-hot-toast";
import Products from "./pages/Products";
import Journal from "./pages/Journal";
import About from "./pages/About";
import BookYourPeace from "./pages/BookYourPeace";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<StartRitual />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/spaces" element={<ExploreSpaces />} />
            <Route path="/spaces/:spaceId" element={<SpaceBooking />} />
            <Route path="/products" element={<Products />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/about" element={<About />} />
            <Route path="/peace" element={<BookYourPeace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
