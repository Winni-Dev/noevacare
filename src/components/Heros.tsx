// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, Shield, Truck, Leaf } from 'lucide-react';
// import bracelet from '../IMAGES/bracelet.jpeg'

// const Hero: React.FC = () => {
//   return (
//     <section  id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-beige-50 -z-10" />
      
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Text content */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               Votre <span className="text-primary-600">bien-être</span> naturel à portée de main
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//               Découvrez notre bracelet énergétique et notre pommade naturelle pour un équilibre parfait entre corps et esprit.
//             </p>
            
//             <div className="flex flex-wrap gap-4 mb-8">
//               <div className="flex items-center gap-2 text-gray-700">
//                 <Shield className="text-primary-500" size={20} />
//                 <span>Garantie qualité</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <Truck className="text-primary-500" size={20} />
//                 <span>Livraison rapide</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <Leaf className="text-primary-500" size={20} />
//                 <span>100% naturel</span>
//               </div>
//             </div>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 const productsSection = document.getElementById('produits');
//                 productsSection?.scrollIntoView({ behavior: 'smooth' });
//               }}
//               className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg"
//             >
//               Voir les produits
//             </motion.button>
//           </motion.div>
          
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
//               <img
//                 src={bracelet}
//                 alt="Bracelet et pommade"
//                 className="rounded-2xl w-full h-64 md:h-80 object-cover"
//               />
//             </div>
            
//             {/* Floating elements */}
//             <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
//               <div className="text-primary-600 font-bold text-2xl">29 900 FCFA</div>
//               <div className="text-sm text-gray-600">Bracelet</div>
//             </div>
            
//             <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
//               <div className="text-primary-600 font-bold text-2xl">14 900 FCFA</div>
//               <div className="text-sm text-gray-600">Pommade</div>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Scroll indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
//         >
//           <ChevronDown className="text-gray-400" size={24} />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from 'lucide-react';
// import bracelet from '../IMAGES/bracelet.jpeg';
// import pommade from '../IMAGES/pommade.png';

// const Hero: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const slides = [
//     {
//       id: 1,
//       image: bracelet,
//       title: 'Votre allié bien-être pour l\'hypertension et l\'équilibre glycémique.',
//       subtitle: 'Bracelet Noéva',
//       description: 'Un bracelet innovant qui accompagne votre quotidien et contribue à votre sérénité, sans effets secondaires.',
//       color: 'primary'
//     },
//     {
//       id: 2,
//       image: pommade,
//       title: 'Votre allié bien-être pour un confort optimal de votre corps.',
//       subtitle: 'Crème Articulations',
//       description: 'Elle assure un confort et une détente au quotidien.',
//       color: 'purple'
//     }
//   ];

//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   }, [slides.length]);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     if (!autoPlay) return;
//     const interval = setInterval(() => nextSlide(), 6000);
//     return () => clearInterval(interval);
//   }, [autoPlay, nextSlide]);

//   return (
//     <section id="hero" className="relative min-h-screen overflow-hidden">
//       <AnimatePresence mode="wait">
//         {slides.map((slide, index) => (
//           index === currentSlide && (
//             <motion.div
//               key={slide.id}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0"
//             >
//               {/* Image de fond */}
//               <div className="absolute inset-0">
//                 <motion.img
//                   src={slide.image}
//                   alt={slide.subtitle}
//                   initial={{ scale: 1.1 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 5 }}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
//               </div>

//               {/* Contenu principal */}
//               <div className="relative h-screen flex items-center justify-center px-4 md:px-8">
//                 <div className="text-center max-w-3xl w-full">
//                   {/* Titre principal */}
//                   <motion.h1
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4 md:mb-6 font-medium leading-relaxed"
//                   >
//                     {slide.title}
//                   </motion.h1>
                  
//                   {/* Sous-titre produit */}
//                   <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 }}
//                     className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4"
//                   >
//                     {slide.subtitle}
//                   </motion.h2>
                  
//                   {/* Description */}
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl mx-auto"
//                   >
//                     {slide.description}
//                   </motion.p>
//                 </div>
//               </div>

//               {/* Bouton CTA centré en bas */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}
//                   className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-medium text-white text-sm md:text-base ${
//                     slide.color === 'primary'
//                       ? 'bg-primary-600 hover:bg-primary-700'
//                       : 'bg-purple-600 hover:bg-purple-700'
//                   }`}
//                 >
//                   Découvrir
//                   <ArrowRight className="ml-2 md:ml-3 inline" size={16} />
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           )
//         ))}
//       </AnimatePresence>

//       {/* Boutons de navigation sur les côtés */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
//         aria-label="Précédent"
//       >
//         <ChevronLeft size={24} className="text-white" />
//       </button>
      
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
//         aria-label="Suivant"
//       >
//         <ChevronRight size={24} className="text-white" />
//       </button>

//       {/* Bouton play/pause en bas à droite */}
//       <div className="absolute bottom-6 md:bottom-8 right-4 md:right-8">
//         <button
//           onClick={() => setAutoPlay(!autoPlay)}
//           className="w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
//           aria-label={autoPlay ? "Mettre en pause" : "Lancer la lecture"}
//         >
//           {autoPlay ? (
//             <Pause size={20} className="text-white" />
//           ) : (
//             <Play size={20} className="text-white" />
//           )}
//         </button>
//       </div>

//       {/* Indicateur de slide en bas à gauche */}
//       <div className="absolute bottom-6 md:bottom-8 left-4 md:left-8">
//         <div className="text-white text-sm md:text-base">
//           <span className="font-bold">0{currentSlide + 1}</span>
//           <span className="mx-1 md:mx-2">/</span>
//           <span className="text-white/70">0{slides.length}</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from 'lucide-react';
import bracelet from '../IMAGES/bracelet.jpeg';
import pommade from '../IMAGES/pommade.png';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      image: bracelet,
      title: 'Votre allié bien-être pour l\'hypertension et l\'équilibre glycémique.',
      subtitle: 'Bracelet Noéva',
      description: 'Un bracelet innovant qui accompagne votre quotidien et contribue à votre sérénité, sans effets secondaires.',
      color: 'primary'
    },
    {
      id: 2,
      image: pommade,
      title: 'Votre allié bien-être pour un confort optimal de votre corps.',
      subtitle: 'Crème Articulations',
      description: 'Elle assure un confort et une détente au quotidien.',
      color: 'purple'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="popLayout">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut" 
              }}
              className="absolute inset-0"
            >
              {/* Image de fond */}
              <div className="absolute inset-0">
                <motion.img
                  src={slide.image}
                  alt={slide.subtitle}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 8,
                    ease: "easeOut"
                  }}
                  className="w-full h-full object-cover"
                />
                {/* Overlay progressif sans coupure */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"
                />
              </div>

              {/* Contenu principal */}
              <div className="relative h-screen flex items-center justify-center px-4 md:px-8">
                <div className="text-center max-w-3xl w-full">
                  {/* Titre principal */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4 md:mb-6 font-medium leading-relaxed"
                  >
                    {slide.title}
                  </motion.h1>
                  
                  {/* Sous-titre produit */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4"
                  >
                    {slide.subtitle}
                  </motion.h2>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl mx-auto"
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </div>

              {/* Bouton CTA centré en bas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-medium text-white text-sm md:text-base ${
                    slide.color === 'primary'
                      ? 'bg-primary-600 hover:bg-primary-700'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  Découvrir
                  <ArrowRight className="ml-2 md:ml-3 inline" size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Boutons de navigation sur les côtés */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
        aria-label="Précédent"
      >
        <ChevronLeft size={24} className="text-white" />
      </motion.button>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
        aria-label="Suivant"
      >
        <ChevronRight size={24} className="text-white" />
      </motion.button>

      {/* Bouton play/pause en bas à droite */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 md:bottom-8 right-4 md:right-8"
      >
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
          aria-label={autoPlay ? "Mettre en pause" : "Lancer la lecture"}
        >
          {autoPlay ? (
            <Pause size={20} className="text-white" />
          ) : (
            <Play size={20} className="text-white" />
          )}
        </button>
      </motion.div>

      {/* Indicateur de slide en bas à gauche */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 md:bottom-8 left-4 md:left-8"
      >
        <div className="text-white text-sm md:text-base">
          <span className="font-bold">0{currentSlide + 1}</span>
          <span className="mx-1 md:mx-2">/</span>
          <span className="text-white/70">0{slides.length}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;