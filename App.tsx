import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';
import { SectionId } from './types';


import MentionsLegales from './components/MentionsLegales';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMentionsOpen, setIsMentionsOpen] = useState(false);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);
  const openMentionsModal = () => setIsMentionsOpen(true);
  const closeMentionsModal = () => setIsMentionsOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        scrollToSection={scrollToSection} 
        openQuoteModal={openQuoteModal}
      />
      
      <main className="flex-grow">
        <section id={SectionId.HOME}>
          <Hero 
            scrollToSection={scrollToSection} 
            openQuoteModal={openQuoteModal}
          />
        </section>
        
        <section id={SectionId.SERVICES}>
          <Services />
        </section>
        
        <section id={SectionId.ABOUT}>
          <About />
        </section>
        
        <section id={SectionId.PRICING}>
          <Pricing openQuoteModal={openQuoteModal} />
        </section>
        
        <section id={SectionId.CONTACT}>
          <Contact />
        </section>
      </main>

      <Footer openMentionsModal={openMentionsModal} />

      {/* Global Quote Modal */}
      <QuoteForm isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      {/* Global Mentions Modal */}
      <MentionsLegales isOpen={isMentionsOpen} onClose={closeMentionsModal} />
    </div>
  );
}

export default App;