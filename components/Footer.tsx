import React from 'react';
import { SocialIcon } from 'react-social-icons';
import footerData from '../public/texte/footer.json';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';
import { Scrollbar } from 'react-scrollbars-custom';
import './FooterScrollbar.css';
import mentionsData from '../public/texte/mentions-legales.json';
import MentionsLegales from './MentionsLegales';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-cream pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <img
          src="./images/logo/carre_light.png"
          alt="Logo ETA Vesiez"
          className="h-14 w-auto mb-4"
          style={{ maxWidth: 180 }}
        />
        <div className="flex flex-col items-center mb-6">
          <span className="uppercase tracking-widest text-brand-gold font-block text-lg mb-2">Réseaux sociaux</span>
          <div className="flex flex-row items-center gap-6 font-sans">
            {footerData.instagram && (
              <SocialIcon
                url={footerData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="Instagram"
              />
            )}
            {footerData.facebook && (
              <SocialIcon
                url={footerData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="Facebook"
              />
            )}
            {footerData.tiktok && (
              <SocialIcon
                url={footerData.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="TikTok"
              />
            )}
            {footerData.linkedin && (
              <SocialIcon
                url={footerData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="LinkedIn"
              />
            )}
            {footerData.whatsapp && (
              <SocialIcon
                url={footerData.whatsapp}
                network="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="WhatsApp"
              />
            )}
          </div>
        </div>
        <MentionsLegales/>
        
        <div className="text-xs opacity-50 text-center">
          {footerData.texte}
        </div>
      </div>
    </footer>
  );
};

export default Footer;