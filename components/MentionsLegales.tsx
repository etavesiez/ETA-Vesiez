import React from 'react';
import footerData from '../public/texte/footer.json';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Scrollbar } from 'react-scrollbars-custom';
import './FooterScrollbar.css';
import mentionsData from '../public/texte/mentions-legales.json';

const MentionsLegales: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="hover:text-white transition-colors text-sm opacity-80 underline focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
                type="button"
              >
                {footerData.mentions}
              </button>
            </DialogTrigger>
                <DialogContent className="w-full max-w-3xl max-h-[100vh] p-4 sm:p-10">
                  {/* Bouton de fermeture explicite */}
                  <DialogPrimitive.Close
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-3 sm:p-2 bg-gray-100 rounded-full hover:bg-brand-gold hover:text-brand-brown transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    aria-label="Fermer"
                  >
                    <X className="h-7 w-7 sm:h-6 sm:w-6" />
                  </DialogPrimitive.Close>
              <DialogHeader>
                <DialogTitle className="text-brand-green text-2xl sm:text-3xl mb-4 sm:mb-6 text-center tracking-tight font-block">{mentionsData.mentions_label}</DialogTitle>
              </DialogHeader>
                  <Scrollbar
                    style={{ maxHeight: '100vh', minHeight: 350 }}
                    trackYProps={{ style: { background: 'transparent', width: 10, right: 0 } }}
                    thumbYProps={{
                      style: { background: '#4D3529', borderRadius: 6, width: 8, minHeight: 40, transition: 'background 0.2s' },
                      className: 'custom-scrollbar-thumb',
                    }}
                    trackXProps={{ style: { display: 'none' } }}
                  >
                    <div className="prose prose-base sm:prose-lg max-w-none text-brand-brown leading-relaxed space-y-4 sm:space-y-6 pr-1 sm:pr-3">
                      {mentionsData.contenu.map((item: { titre?: string, texte: string }, idx: number) => {
                        if (item.titre === 'Adresse :') {
                          return (
                            <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                              <span className="font-bold text-brand-green">{item.titre} </span>
                              <a href="https://www.google.com/maps/search/?api=1&query=10+Rue+Wallon+80600+Lucheux" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gold">{item.texte}</a>
                            </p>
                          );
                        }
                        if (item.titre === 'Hébergeur :') {
                          return (
                            <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                              <span className="font-bold text-brand-green">{item.titre} </span>
                              <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gold">GitHub Pages</a>
                            </p>
                          );
                        }
                        if (item.titre === 'Téléphone :') {
                          return (
                            <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                              <span className="font-bold text-brand-green">{item.titre} </span>
                              <a href="tel:+33769651430" className="underline hover:text-brand-gold">{item.texte}</a>
                            </p>
                          );
                        }
                        if (item.titre === 'Email :') {
                          return (
                            <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                              <span className="font-bold text-brand-green">{item.titre} </span>
                              <a href="mailto:eta-vesiez@gmail.com" className="underline hover:text-brand-gold">{item.texte}</a>
                            </p>
                          );
                        }
                        return (
                          <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                            {item.titre && <span className="font-bold text-brand-green">{item.titre} </span>}
                            <span>{item.texte}</span>
                          </p>
                        );
                      })}
                    </div>
              </Scrollbar>
            </DialogContent>
          </Dialog>
        </div>
  );
};

export default MentionsLegales;
