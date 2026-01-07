import React from 'react';
import mentionsData from '../public/texte/mentions-legales.json';
import footerData from '../public/texte/footer.json';

const MentionsLegales: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-block font-bold text-brand-green mb-8 text-center">{footerData.mentions}</h1>
        <div className="space-y-6 text-brand-brown text-lg leading-relaxed">
          {mentionsData.contenu.map((paragraphe: string, idx: number) => (
            <p key={idx}>{paragraphe}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;
