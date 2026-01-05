import React, { useState, useEffect } from 'react';
import { Sprout, Truck, Hammer, Tractor, ChevronLeft, ChevronRight } from 'lucide-react';

// Import automatique de toutes les images depuis public/images/**/
// Utiliser le chemin absolu depuis la racine du projet
const imageModules = import.meta.glob<{ default: string }>('../public/images/carrousel/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true
});

const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Générer automatiquement le carrousel depuis les dossiers
  const carouselImages = Object.entries(imageModules)
    .map(([path, module]) => {
      const url = module.default;
      
      // Extraire le nom du dossier (catégorie)
      const pathParts = path.split('/');
      const categoryFolder = pathParts[pathParts.length - 2]; // Dossier parent
      
      // Extraire le nom du fichier sans extension
      const fileName = pathParts[pathParts.length - 1]
        .replace(/\.(jpg|jpeg|png|webp)$/i, '');
      
      // Formater le titre : remplacer tirets par espaces et capitaliser
      const formattedTitle = fileName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Formater automatiquement le nom du dossier : tirets → espaces, capitaliser chaque mot
      const category = categoryFolder
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      console.log('Image loaded:', { path, url, category, title: formattedTitle });
      
      return {
        src: url,
        title: formattedTitle,
        category: category
      };
    })
    .sort((a, b) => {
      // Trier par catégorie puis par titre
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
      }
      return a.title.localeCompare(b.title);
    });

  console.log('Total images in carousel:', carouselImages.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const services = [
    {
      title: "Plantation de pommes de terre",
      desc: "Plantation mécanisée et précise des pommes de terre pour un démarrage optimal.",
      icon: Sprout
    },
    {
      title: "Arrachage de pommes de terre",
      desc: "Arrachage, tri et préparation à la livraison de vos pommes de terre.",
      icon: Tractor
    },
    {
      title: "Moisson",
      desc: "Moisson rapide et soignée de vos céréales avec matériel adapté.",
      icon: Tractor
    },
    {
      title: "Semis en ligne",
      desc: "Semis de précision en ligne pour une répartition homogène des cultures.",
      icon: Sprout
    },
    {
      title: "Débroussaillage",
      desc: "Entretien et nettoyage mécanique des parcelles (débroussaillage).",
      icon: Hammer
    },
    {
      title: "Travail du sol",
      desc: "Labour, hersage et préparation des parcelles avant semis.",
      icon: Tractor
    },
    {
      title: "Préparation du sol",
      desc: "Préparations fines du lit de semence pour assurer une bonne levée.",
      icon: Sprout
    },
    {
      title: "Tassage de silo",
      desc: "Tassage et compactage de silo pour optimiser le stockage et la conservation.",
      icon: Hammer
    },
    {
      title: "Pressage de balles rondes",
      desc: "Pressage et mise en balles rondes pour stockage et transport.",
      icon: Truck
    }
  ];

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-green mb-4">Les Prestations</h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        {/* Carrousel de photos */}
        <div className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <div className="relative h-[500px]">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-brand-gold text-brand-brown rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-3xl font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-green p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-green p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicateurs */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-brand-gold'
                    : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border-none transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center mb-6 text-brand-green">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3">{service.title}</h3>
              <p className="text-brand-brown/80 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;