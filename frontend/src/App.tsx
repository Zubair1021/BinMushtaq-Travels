import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import VisaServices from './pages/VisaServices';
import NotFound from './pages/NotFound';
import Loader from './components/shared/Loader';
import Whatsapp from './components/chat/WhatsappChat';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
      {/* Only show Whatsapp if not on /visa-services */}
      {location.pathname !== '/visa-services' &&location.pathname !== '/packages'   && <Whatsapp />}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <AppContent />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
