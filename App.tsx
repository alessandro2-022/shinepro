
import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-shinepro-dark text-white font-sans">
      <Header 
        onToggleAbout={() => setIsAboutOpen(!isAboutOpen)} 
        onToggleBooking={() => setIsBookingOpen(!isBookingOpen)}
      />
      <main>
        <Banner />
        <Services />
      </main>
      <Footer />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default App;
