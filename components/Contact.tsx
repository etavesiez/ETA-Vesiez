import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">Me Contacter</h2>
          <p className="text-brand-brown/70 text-lg max-w-2xl mx-auto">
            Besoin d'un renseignement direct ? Je suis à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
            <div className="bg-brand-cream p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 h-full">
                <div className="bg-brand-green p-4 rounded-full text-brand-cream mb-2">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-green mb-2">Adresse</h3>
                  <p className="text-brand-brown">10 Rue Wallon<br/>80600 Lucheux</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=10+Rue+Wallon+80600+Lucheux" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-bold text-brand-gold hover:underline"
                  >
                    Voir sur la carte
                  </a>
                </div>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 h-full">
                <div className="bg-brand-green p-4 rounded-full text-brand-cream mb-2">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-green mb-2">Téléphone</h3>
                  <p className="text-brand-brown font-lg font-bold">+33 7 69 65 14 30</p>
                </div>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 h-full">
                <div className="bg-brand-green p-4 rounded-full text-brand-cream mb-2">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-green mb-2">Email</h3>
                  <a href="mailto:eta-vesiez@gmail.com" className="text-brand-brown hover:text-brand-gold transition-colors break-all">
                    eta-vesiez@gmail.com
                  </a>
                </div>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 h-full">
                <div className="bg-brand-green p-4 rounded-full text-brand-cream mb-2">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-green mb-2">Horaires</h3>
                  <p className="text-brand-brown">Lundi - Samedi</p>
                  <p className="text-brand-brown font-bold">8h00 - 19h00</p>
                </div>
            </div>

        </div>

        <div className="text-center pt-16">
            <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-green font-bold border-b-2 border-brand-green hover:text-brand-gold hover:border-brand-gold transition-colors pb-1 text-lg"
            >
                Laisser un avis sur Google
            </a>
        </div>

        <div className="text-center pt-8">
          <h3 className="text-lg font-bold text-brand-green mb-4">Réseaux sociaux</h3>
          <div className="flex items-center justify-center gap-4">
            <SocialIcon
              url="https://www.instagram.com/eta_vesiez"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 36, width: 36 }}
              className="hover:opacity-80"
              aria-label="Instagram"
            />

            <SocialIcon
              url="https://www.facebook.com/eta.vesiez"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 36, width: 36 }}
              className="hover:opacity-80"
              aria-label="Facebook"
            />

            <SocialIcon
              url="https://www.tiktok.com/@eta_vesiez"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 36, width: 36 }}
              className="hover:opacity-80"
              aria-label="TikTok"
            />

            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-500 bg-white/50">
              🔜 Page Google (bientôt)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;