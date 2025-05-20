import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Loader />
      
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 ${contentLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920')", 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80 backdrop-blur-sm"></div>
      </div>
      
      <div className={`relative z-10 ${contentLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out delay-500`}>
        <Header />
        <ComingSoon />
        <Footer />
      </div>
    </div>
  );
}

export default App;