

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Moon, 
//   Zap, 
//   Droplets, 
//   Activity, 
//   Leaf,
//   Sparkles,
//   Play,
//   CheckCircle,
//   ArrowRight,
//   TrendingUp,
//   Flame,
//   Thermometer,
//   Droplet,
//   Flower2,
//   ChevronLeft,
//   ChevronRight,
//   Bone,
//   HeartPulse
// } from 'lucide-react';
// import pommadeImage from '../IMAGES/CrmePNG.png';
// import video from '../IMAGES/Prsentationdubracelet.mp4';
// import mainVideo from '../IMAGES/main.mp4';

// const About: React.FC = () => {
//   const [, setShowVideo] = useState(false);
//   const [stats, setStats] = useState({
//     users: 0,
//     improvement: 0,
//     countries: 0,
//     support: 0
//   });
  
//   const [isStatsInView, setIsStatsInView] = useState(false);
//   const benefitsScrollRef = useRef<HTMLDivElement>(null);
//   const mechanismScrollRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) {
//       ref.current.scrollBy({ left: -300, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) {
//       ref.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   // Animation des statistiques
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsStatsInView(true);
          
//           // Animation des chiffres
//           const duration = 2000; // 2 secondes
//           const steps = 100;
//           const incrementUsers = 2500 / steps;
//           const incrementImprovement = 94 / steps;
//           const incrementCountries = 30 / steps;
          
//           let currentStep = 0;
          
//           const timer = setInterval(() => {
//             currentStep++;
            
//             setStats({
//               users: Math.min(2500, Math.floor(incrementUsers * currentStep)),
//               improvement: Math.min(94, Math.floor(incrementImprovement * currentStep)),
//               countries: Math.min(30, Math.floor(incrementCountries * currentStep)),
//               support: 24
//             });
            
//             if (currentStep >= steps) {
//               clearInterval(timer);
//               // S'assurer que les valeurs finales sont exactes
//               setStats({
//                 users: 2500,
//                 improvement: 94,
//                 countries: 30,
//                 support: 24
//               });
//             }
//           }, duration / steps);
          
//           return () => observer.disconnect();
//         }
//       },
//       { threshold: 0.5 }
//     );
    
//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }
    
//     return () => observer.disconnect();
//   }, []);

//   const benefitCards = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
//       title: 'Stabilise naturellement',
//       description: 'Aide à stabiliser la tension et la glycémie de façon naturelle.',
//       features: ['Tension équilibrée', 'Glycémie stable', 'Effet naturel'],
//       icon: <Droplets className="text-blue-500" size={20} />,
//       color: 'border-l-blue-500',
//       stats: '94% des utilisateurs'
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
//       title: 'Favorise la détente',
//       description: 'Apporte confort et relaxation au quotidien.',
//       features: ['Stress réduit', 'Sommeil amélioré', 'Détente profonde'],
//       icon: <Moon className="text-indigo-500" size={20} />,
//       color: 'border-l-indigo-500',
//       stats: '87% de relaxation'
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&auto=format&fit=crop&q=80",
//       title: 'Améliore la vitalité',
//       description: 'Contribue à une meilleure énergie et gestion du stress.',
//       features: ['Énergie accrue', 'Vitalité durable', 'Performance optimale'],
//       icon: <Zap className="text-yellow-500" size={20} />,
//       color: 'border-l-yellow-500',
//       stats: '92% plus d\'énergie'
//     }
//   ];

//   // Card avec vidéo en premier
//   const videoCard = {
//     id: 4,
//     title: 'Élégant & pratique',
//     description: 'Design raffiné adapté à tous les styles de vie.',
//     features: ['Design moderne', 'Pratique quotidien', 'Discret & élégant'],
//     icon: <Sparkles className="text-purple-500" size={20} />,
//     color: 'border-l-purple-500',
//     stats: '96% de satisfaction'
//   };

//   const mechanismCards = [
//     {
//       title: 'Amélioration circulatoire',
//       description: 'Favorise une meilleure circulation sanguine.',
//       icon: '💓',
//       details: ['Circulation optimisée', 'Oxygénation tissulaire']
//     },
//     {
//       title: 'Régulation métabolique',
//       description: 'Accompagne l\'équilibre glycémique naturel.',
//       icon: '⚖️',
//       details: ['Équilibre glycémique', 'Métabolisme actif']
//     },
//     {
//       title: 'Détente & vitalité',
//       description: 'Réduit la fatigue et apporte confort.',
//       icon: '😌',
//       details: ['Fatigue réduite', 'Récupération améliorée']
//     },
//     {
//       title: 'Harmonie énergétique',
//       description: 'Réduit le stress et améliore la qualité de vie.',
//       icon: '✨',
//       details: ['Stress diminué', 'Équilibre émotionnel']
//     }
//   ];

//   const creamFeatures = [
//     {
//       icon: <Flame className="text-red-500" size={20} />,
//       title: 'Effet chauffant',
//       description: 'Augmente la température locale et la circulation sanguine'
//     },
//     {
//       icon: <Thermometer className="text-blue-500" size={20} />,
//       title: 'Anti-inflammatoire',
//       description: 'Aide à bloquer les cytokines pro-inflammatoires'
//     },
//     {
//       icon: <Droplet className="text-green-500" size={20} />,
//       title: 'Soulagement rapide',
//       description: 'Réduit l\'ankylose et améliore la mobilité'
//     },
//     {
//       icon: <Flower2 className="text-purple-500" size={20} />,
//       title: 'Soins anti-âge',
//       description: 'Effets liftants et raffermissants pour la peau'
//     }
//   ];

//   const creamIngredients = [
//     // {
//     //   name: 'Venin d\'abeille',
//     //   benefit: 'Effet chauffant naturel',
//     //   color: 'from-yellow-50 to-yellow-100',
//     //   icon: <ThermometerSun className="text-yellow-600" size={16} />
//     // },
//     {
//       name: 'Arnica',
//       benefit: 'Détente après effort',
//       color: 'from-green-50 to-green-100',
//       icon: <Leaf className="text-green-600" size={16} />
//     },
//     {
//       name: 'Glucosamine',
//       benefit: 'Confort articulaire',
//       color: 'from-blue-50 to-blue-100',
//       icon: <Bone className="text-blue-600" size={16} />
//     },
//     {
//       name: 'Vitamine K2',
//       benefit: 'Peau souple et nourrie',
//       color: 'from-purple-50 to-purple-100',
//       icon: <HeartPulse className="text-purple-600" size={16} />
//     }
//   ];

//   return (
//     <section id="apropos" className="py-12 md:py-20 bg-gradient-to-b from-white to-beige-50">
//       <div className="container px-4 mx-auto">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center md:mb-16"
//         >
//           <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 rounded-full mb-4 md:mb-6">
//             <Leaf className="mr-2 text-primary-600" size={16} />
//             <span className="text-sm font-medium text-primary-700 md:text-base">Naturel & Équilibré</span>
//           </div>
//           <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl md:mb-6">
//             Découvrez <span className="text-primary-600">Noéva™</span>
//           </h1>
//           <p className="max-w-3xl px-2 mx-auto text-lg text-gray-600 md:text-xl">
//             Votre allié naturel pour retrouver équilibre, vitalité et sérénité au quotidien
//           </p>
//         </motion.div>

//         {/* Benefits Cards avec défilement horizontal sur mobile - VIDÉO EN PREMIER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="mb-8 text-center md:mb-12">
//             <div className="inline-flex items-center px-3 py-1.5 bg-primary-50 rounded-full mb-3 md:mb-4">
//               <Sparkles className="mr-2 text-primary-600" size={16} />
//               <span className="text-sm font-medium text-primary-700">Bienfaits Principaux</span>
//             </div>
//             <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
//               Transformez votre quotidien avec Noéva™
//             </h2>
//             <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
//               4 piliers fondamentaux pour votre bien-être global
//             </p>
//           </div>

//           {/* Contrôles de défilement mobile */}
//           <div className="relative">
//             <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
//               {/* Carte vidéo en premier */}
//               <motion.div
//                 key={videoCard.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
//               >
//                 <div className="relative h-40 overflow-hidden md:h-48">
//                   {/* Vidéo au lieu d'image */}
//                   <video
//                     src={mainVideo}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="object-cover w-full h-full"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
//                   <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
//                     {videoCard.icon}
//                   </div>
                  
//                   <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm top-3 right-3 bg-white/90 backdrop-blur-sm">
//                     <span className="text-sm font-bold text-gray-900">01</span>
//                   </div>
//                 </div>
                
//                 <div className="p-4 md:p-6">
//                   <div className={`border-l-4 ${videoCard.color} pl-3 mb-3`}>
//                     <h3 className="text-base font-bold text-gray-900 md:text-lg">
//                       {videoCard.title}
//                     </h3>
//                   </div>
                  
//                   <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
//                     {videoCard.description}
//                   </p>
                  
//                   <div className="mb-4 space-y-2">
//                     {videoCard.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center text-xs md:text-sm">
//                         <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
//                         <span className="text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="pt-3 border-t border-gray-100">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs text-gray-500">Résultat moyen</span>
//                       <span className="text-sm font-bold text-primary-600">{videoCard.stats}</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Les 3 autres cartes */}
//               {benefitCards.map((card, index) => (
//                 <motion.div
//                   key={card.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: (index + 1) * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
//                 >
//                   <div className="relative h-40 overflow-hidden md:h-48">
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
//                     <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
//                       {card.icon}
//                     </div>
                    
//                     <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm top-3 right-3 bg-white/90 backdrop-blur-sm">
//                       <span className="text-sm font-bold text-gray-900">0{card.id + 1}</span>
//                     </div>
//                   </div>
                  
//                   <div className="p-4 md:p-6">
//                     <div className={`border-l-4 ${card.color} pl-3 mb-3`}>
//                       <h3 className="text-base font-bold text-gray-900 md:text-lg">
//                         {card.title}
//                       </h3>
//                     </div>
                    
//                     <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
//                       {card.description}
//                     </p>
                    
//                     <div className="mb-4 space-y-2">
//                       {card.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center text-xs md:text-sm">
//                           <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
//                           <span className="text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="pt-3 border-t border-gray-100">
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-gray-500">Résultat moyen</span>
//                         <span className="text-sm font-bold text-primary-600">{card.stats}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Version mobile avec défilement horizontal */}
//             <div className="relative md:hidden">
//               <button
//                 onClick={() => scrollLeft(benefitsScrollRef)}
//                 className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/90 backdrop-blur-sm"
//               >
//                 <ChevronLeft size={20} className="text-gray-700" />
//               </button>
              
//               <div 
//                 ref={benefitsScrollRef}
//                 className="flex pb-4 pl-2 pr-2 space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//               >
//                 {/* Carte vidéo en premier sur mobile aussi */}
//                 <div className="flex-shrink-0 w-80 snap-center">
//                   <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl">
//                     <div className="relative h-48 overflow-hidden">
//                       <video
//                         src={mainVideo}
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="object-cover w-full h-full"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
//                       <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
//                         {videoCard.icon}
//                       </div>
//                     </div>
                    
//                     <div className="p-4">
//                       <div className={`border-l-4 ${videoCard.color} pl-3 mb-3`}>
//                         <h3 className="text-lg font-bold text-gray-900">
//                           {videoCard.title}
//                         </h3>
//                       </div>
                      
//                       <p className="mb-4 text-sm leading-relaxed text-gray-600">
//                         {videoCard.description}
//                       </p>
                      
//                       <div className="mb-4 space-y-2">
//                         {videoCard.features.slice(0, 2).map((feature, idx) => (
//                           <div key={idx} className="flex items-center text-sm">
//                             <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
//                             <span className="text-gray-700">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {benefitCards.map((card) => (
//                   <div
//                     key={card.id}
//                     className="flex-shrink-0 w-80 snap-center"
//                   >
//                     <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl">
//                       <div className="relative h-48 overflow-hidden">
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="object-cover w-full h-full"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
//                         <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
//                           {card.icon}
//                         </div>
//                       </div>
                      
//                       <div className="p-4">
//                         <div className={`border-l-4 ${card.color} pl-3 mb-3`}>
//                           <h3 className="text-lg font-bold text-gray-900">
//                             {card.title}
//                           </h3>
//                         </div>
                        
//                         <p className="mb-4 text-sm leading-relaxed text-gray-600">
//                           {card.description}
//                         </p>
                        
//                         <div className="mb-4 space-y-2">
//                           {card.features.slice(0, 2).map((feature, idx) => (
//                             <div key={idx} className="flex items-center text-sm">
//                               <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
//                               <span className="text-gray-700">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <button
//                 onClick={() => scrollRight(benefitsScrollRef)}
//                 className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/90 backdrop-blur-sm"
//               >
//                 <ChevronRight size={20} className="text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Video Section - Version simplifiée */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="p-6 bg-gradient-to-r from-primary-50 to-beige-50 rounded-2xl md:rounded-3xl md:p-8 lg:p-12">
//             <div className="grid items-center gap-8 lg:grid-cols-2 md:gap-12">
//               <div>
//                 <div className="inline-flex items-center px-3 py-1.5 bg-white rounded-full mb-4 md:mb-6 shadow-sm">
//                   <Play className="mr-2 text-primary-600" size={16} />
//                   <span className="text-sm font-medium text-primary-700">Vidéo Explicative</span>
//                 </div>
//                 <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
//                   Comment agit le bracelet Noéva™ ?
//                 </h2>
                
//                 <div className="space-y-3 md:space-y-4">
//                   {[
//                     'Améliore la circulation sanguine',
//                     'Soutient la régulation métabolique',
//                     'Favorise la détente et réduit la fatigue',
//                     'Contribue à l\'harmonie énergétique'
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-start">
//                       <CheckCircle className="text-green-500 mt-0.5 md:mt-1 mr-3 flex-shrink-0" size={18} />
//                       <span className="text-sm text-gray-700 md:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="overflow-hidden border-4 border-white shadow-xl aspect-video rounded-xl md:rounded-2xl md:shadow-2xl">
//                   <video
//                     src={video}
//                     controls
//                     autoPlay
//                     muted
//                     playsInline
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
                
//                 <div className="absolute hidden p-4 bg-white border border-gray-100 shadow-lg -bottom-4 -right-4 rounded-xl md:rounded-2xl lg:block">
//                   <div className="flex items-center text-xl font-bold md:text-2xl text-primary-600">
//                     <TrendingUp className="mr-2" size={16} />
//                     98%
//                   </div>
//                   <div className="text-xs text-gray-600 md:text-sm">de satisfaction</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Section Crème Noéva */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="overflow-hidden shadow-xl bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl md:rounded-3xl">
//             {/* En-tête section */}
//             <div className="p-6 md:p-8 lg:p-12">
//               <div className="mb-8 text-center md:mb-12">
//                 <div className="inline-flex items-center px-3 py-1.5 bg-white/80 rounded-full mb-3 md:mb-4">
//                   <Droplet className="mr-2 text-indigo-600" size={16} />
//                   <span className="text-sm font-medium text-indigo-700">Notre gamme complète</span>
//                 </div>
//                 <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
//                   Crème Noéva™ : Votre allié bien-être pour un confort optimal
//                 </h2>
//                 <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
//                   Elle assure un confort et une détente au quotidien
//                 </p>
//               </div>

//               <div className="grid gap-8 mb-8 lg:grid-cols-2 md:gap-12 md:mb-12">
//                 {/* Colonne gauche - Image et description */}
//                 <div className="order-2 lg:order-1">
//                   {/* Image de la pommade avec effet */}
//                   <div className="relative mb-6 md:mb-8">
//                     <div className="p-6 shadow-lg bg-gradient-to-br from-white to-indigo-50 rounded-xl md:rounded-2xl md:p-8">
//                       <div className="relative w-full h-64 overflow-hidden rounded-lg md:h-72 md:rounded-xl">
//                         <img
//                           src={pommadeImage}
//                           alt="Crème Noéva™ pour articulations"
//                           className="object-contain w-full h-full transition-transform duration-500 transform hover:scale-105"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/30 to-transparent" />
//                       </div>
                      
//                       {/* Badge produit */}
//                       <div className="absolute top-4 right-4">
//                         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
//                           CRÈME ARTICULATIONS
//                         </div>
//                       </div>
                      
//                       {/* Étiquette texture */}
//                       <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
//                         <div className="text-xs font-medium text-gray-700">Texture légère • Pénétration rapide</div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
//                     Présentation de la crème Noéva™
//                   </h3>
//                   <p className="mb-4 text-sm leading-relaxed text-gray-700 md:mb-6 md:text-base">
//                     La crème Noéva™ est un produit cosmétique et thérapeutique utilisé pour ses propriétés 
//                     anti-inflammatoires et raffermissantes, ciblant les douleurs articulaires et musculaires 
//                     (arthrose, tendinite) grâce à sa formule, et offrant des effets anti-âge pour la peau 
//                     (rides, éclat).
//                   </p>
//                   <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
//                     La crème s'applique par massage sur les zones concernées et pénètre rapidement en apportant 
//                     un confort. Sa texture est légère, non collante et pénètre rapidement.
//                   </p>
//                 </div>
                
//                 {/* Colonne droite - Composition et fonctionnement */}
//                 <div className="order-1 lg:order-2">
//                   {/* Composition */}
//                   <div className="mb-8 md:mb-12">
//                     <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
//                       Composition naturelle
//                     </h3>
//                     <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2 md:gap-4">
//                       {creamIngredients.map((ingredient, index) => (
//                         <div
//                           key={index}
//                           className={`bg-gradient-to-br ${ingredient.color} rounded-lg md:rounded-xl p-4 md:p-5 border border-white/50`}
//                         >
//                           <div className="flex items-center mb-2">
//                             <div className="flex items-center justify-center w-8 h-8 mr-3 bg-white rounded-lg shadow-sm">
//                               {ingredient.icon}
//                             </div>
//                             <div className="text-sm font-bold text-gray-900 md:text-base">
//                               {ingredient.name}
//                             </div>
//                           </div>
//                           <div className="text-xs text-gray-600 md:text-sm pl-11">
//                             {ingredient.benefit}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Fonctionnement */}
//                   <div>
//                     <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
//                       Comment agit la crème Noéva™ ?
//                     </h3>
//                     <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
//                       La crème Noéva™ utilise des principes de stimulation naturelle qui favorisent 
//                       une sensation immédiate d'apaisement.
//                     </p>
                    
//                     <div className="grid grid-cols-2 gap-4 md:gap-6">
//                       {creamFeatures.map((feature, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, y: 20 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.1 }}
//                           whileHover={{ y: -3 }}
//                           className="p-4 transition-all bg-white border border-gray-100 rounded-lg shadow-sm md:rounded-xl hover:shadow-md"
//                         >
//                           <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
//                             {feature.icon}
//                           </div>
//                           <h4 className="mb-1 text-sm font-bold text-gray-900 md:text-base">
//                             {feature.title}
//                           </h4>
//                           <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
//                             {feature.description}
//                           </p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Bénéfices clés */}
//               <div className="p-6 border border-white shadow-sm bg-white/80 rounded-xl md:rounded-2xl md:p-8">
//                 <h4 className="mb-4 text-lg font-bold text-center text-gray-900 md:text-xl md:mb-6">
//                   Bénéfices principaux de la crème Noéva™
//                 </h4>
//                 <div className="grid gap-4 md:grid-cols-3 md:gap-6">
//                   {[
//                     'Cible arthrose et tendinite',
//                     'Effets anti-âge pour la peau',
//                     'Application par massage rapide',
//                     'Soulagement des douleurs articulaires',
//                     'Améliore l\'éclat de la peau',
//                     'Texture non collante et pénétrante'
//                   ].map((benefit, index) => (
//                     <div key={index} className="flex items-start">
//                       <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
//                       <span className="text-sm text-gray-700 md:text-base">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Mechanism Section avec défilement horizontal sur mobile */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="mb-8 text-center md:mb-12">
//             <div className="inline-flex items-center px-3 py-1.5 bg-green-50 rounded-full mb-3 md:mb-4">
//               <Activity className="mr-2 text-green-600" size={16} />
//               <span className="text-sm font-medium text-green-700">Mécanisme d'Action</span>
//             </div>
//             <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl md:mb-4">
//               Comment Noéva™ agit sur votre organisme
//             </h2>
//             <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
//               Un soutien naturel pour retrouver un équilibre durable
//             </p>
//           </div>

//           <div className="relative">
//             <div className="hidden max-w-6xl gap-6 mx-auto md:grid md:grid-cols-2">
//               {mechanismCards.map((card, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0 text-3xl md:text-4xl">{card.icon}</div>
//                     <div className="flex-1">
//                       <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl md:mb-3">
//                         {card.title}
//                       </h3>
//                       <p className="mb-3 text-sm leading-relaxed text-gray-600 md:mb-4 md:text-base">
//                         {card.description}
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         {card.details.map((detail, idx) => (
//                           <span
//                             key={idx}
//                             className="px-2 py-1 text-xs text-gray-700 border border-gray-200 rounded-lg bg-gray-50 md:text-sm"
//                           >
//                             {detail}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Version mobile avec défilement horizontal */}
//             <div className="relative md:hidden">
//               <button
//                 onClick={() => scrollLeft(mechanismScrollRef)}
//                 className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/90 backdrop-blur-sm"
//               >
//                 <ChevronLeft size={20} className="text-gray-700" />
//               </button>
              
//               <div 
//                 ref={mechanismScrollRef}
//                 className="flex pb-4 pl-2 pr-2 space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//               >
//                 {mechanismCards.map((card, index) => (
//                   <div
//                     key={index}
//                     className="flex-shrink-0 w-80 snap-center"
//                   >
//                     <div className="h-full p-6 bg-white border border-gray-100 shadow-lg rounded-xl">
//                       <div className="mb-4 text-4xl">{card.icon}</div>
//                       <h3 className="mb-3 text-xl font-bold text-gray-900">
//                         {card.title}
//                       </h3>
//                       <p className="mb-4 leading-relaxed text-gray-600">
//                         {card.description}
//                       </p>
//                       <div className="space-y-2">
//                         {card.details.map((detail, idx) => (
//                           <div key={idx} className="flex items-center">
//                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
//                             <span className="text-sm text-gray-700">{detail}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <button
//                 onClick={() => scrollRight(mechanismScrollRef)}
//                 className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/90 backdrop-blur-sm"
//               >
//                 <ChevronRight size={20} className="text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Stats section avec animation */}
//         <motion.div
//           ref={statsRef}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="mb-12 md:mb-20"
//         >
//           <div className="p-6 text-white shadow-xl bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl md:rounded-3xl md:p-8">
//             <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
//               {[
//                 { 
//                   number: isStatsInView ? `${stats.users.toLocaleString()}+` : '0+', 
//                   label: 'Utilisateurs satisfaits' 
//                 },
//                 { 
//                   number: isStatsInView ? `${stats.improvement}%` : '0%', 
//                   label: 'Amélioration bien-être' 
//                 },
//                 { 
//                   number: isStatsInView ? `${stats.countries}+` : '0+', 
//                   label: 'Pays de livraison' 
//                 },
//                 { 
//                   number: '24/7', 
//                   label: 'Support disponible' 
//                 }
//               ].map((stat, index) => (
//                 <div key={index}>
//                   <div className="mb-1 text-2xl font-bold md:text-3xl lg:text-4xl md:mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-xs text-white/90 md:text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <div className="p-6 bg-white border border-gray-200 shadow-lg rounded-2xl md:rounded-3xl md:p-8">
//             <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
//               Prêt à retrouver votre équilibre ?
//             </h2>
//             <p className="max-w-2xl mx-auto mb-6 text-sm text-gray-600 md:mb-8 md:text-base">
//               Rejoignez les milliers de personnes qui ont déjà choisi Noéva™
//             </p>
            
//             <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
//               <button
//                 onClick={() => {
//                   const productsSection = document.getElementById('produits');
//                   if (productsSection) {
//                     const headerHeight = 80;
//                     const elementPosition = productsSection.getBoundingClientRect().top;
//                     const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
//                     window.scrollTo({
//                       top: offsetPosition,
//                       behavior: 'smooth'
//                     });
//                   }
//                 }}
//                 className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-600 md:px-8 hover:bg-primary-700 hover:shadow-xl md:text-base"
//               >
//                 <span>Découvrir les produits</span>
//                 <ArrowRight className="ml-2" size={18} />
//               </button>
              
//               <button
//                 onClick={() => setShowVideo(true)}
//                 className="flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 rounded-full border-primary-600 text-primary-600 md:px-8 hover:bg-primary-50 md:text-base"
//               >
//                 <Play className="mr-2" size={18} />
//                 <span>Voir la vidéo</span>
//               </button>
//             </div>
            
//             <p className="mt-6 text-xs text-gray-500 md:text-sm md:mt-8">
//               Livraison gratuite • Garantie 30 jours • Support 7j/7
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // CSS inline pour éviter les problèmes de SSR
// const styles = `
//   .scrollbar-hide {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
  
//   .scrollbar-hide::-webkit-scrollbar {
//     display: none;
//   }
  
//   .snap-x {
//     scroll-snap-type: x mandatory;
//   }
  
//   .snap-center {
//     scroll-snap-align: center;
//   }
  
//   .snap-mandatory {
//     scroll-snap-stop: always;
//   }
// `;

// // Ajoute le style si on est côté client
// if (typeof window !== 'undefined') {
//   const styleSheet = document.createElement('style');
//   styleSheet.textContent = styles;
//   document.head.appendChild(styleSheet);
// }

// export default About;


import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, 
  Zap, 
  Droplets, 
  Activity, 
  Leaf,
  Sparkles,
  Play,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Flame,
  Thermometer,
  Droplet,
  Flower2,
  ChevronLeft,
  ChevronRight,
  Bone,
  HeartPulse,
  X
} from 'lucide-react';
import pommadeImage from '../IMAGES/pommade.webp';
// On importe toujours les vidéos mais on ne les charge pas automatiquement
import video from '../IMAGES/Prsentationdubracelet.mp4';
import mainVideo from '../IMAGES/main.mp4';

const About: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [stats, setStats] = useState({
    users: 0,
    improvement: 0,
    countries: 0,
    support: 0
  });
  
  const [isStatsInView, setIsStatsInView] = useState(false);
  const benefitsScrollRef = useRef<HTMLDivElement>(null);
  const mechanismScrollRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // États pour contrôler l'affichage des vidéos
  const [showMainVideo, setShowMainVideo] = useState(false);
  
  // Références pour les vidéos
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Fonction pour afficher la vidéo principale
  const handleMainVideoClick = () => {
    setShowMainVideo(true);
    // Petit délai pour permettre au DOM de se mettre à jour
    setTimeout(() => {
      if (mainVideoRef.current) {
        mainVideoRef.current.play().catch(error => {
          console.log("Erreur de lecture:", error);
        });
      }
    }, 100);
  };

  // Fonction pour ouvrir la vidéo en modal
  const openVideoModal = () => {
    setShowVideoModal(true);
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.play().catch(error => {
          console.log("Erreur de lecture:", error);
        });
      }
    }, 100);
  };

  // Fonction pour fermer la modal
  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setShowVideoModal(false);
  };

  // Animation des statistiques
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsInView(true);
          
          // Animation des chiffres
          const duration = 2000;
          const steps = 100;
          const incrementUsers = 2500 / steps;
          const incrementImprovement = 94 / steps;
          const incrementCountries = 30 / steps;
          
          let currentStep = 0;
          
          const timer = setInterval(() => {
            currentStep++;
            
            setStats({
              users: Math.min(2500, Math.floor(incrementUsers * currentStep)),
              improvement: Math.min(94, Math.floor(incrementImprovement * currentStep)),
              countries: Math.min(30, Math.floor(incrementCountries * currentStep)),
              support: 24
            });
            
            if (currentStep >= steps) {
              clearInterval(timer);
              setStats({
                users: 2500,
                improvement: 94,
                countries: 30,
                support: 24
              });
            }
          }, duration / steps);
          
          return () => observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const benefitCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      title: 'Stabilise naturellement',
      description: 'Aide à stabiliser la tension et la glycémie de façon naturelle.',
      features: ['Tension équilibrée', 'Glycémie stable', 'Effet naturel'],
      icon: <Droplets className="text-blue-500" size={20} />,
      color: 'border-l-blue-500',
      stats: '94% des utilisateurs'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
      title: 'Favorise la détente',
      description: 'Apporte confort et relaxation au quotidien.',
      features: ['Stress réduit', 'Sommeil amélioré', 'Détente profonde'],
      icon: <Moon className="text-indigo-500" size={20} />,
      color: 'border-l-indigo-500',
      stats: '87% de relaxation'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&auto=format&fit=crop&q=80",
      title: 'Améliore la vitalité',
      description: 'Contribue à une meilleure énergie et gestion du stress.',
      features: ['Énergie accrue', 'Vitalité durable', 'Performance optimale'],
      icon: <Zap className="text-yellow-500" size={20} />,
      color: 'border-l-yellow-500',
      stats: '92% plus d\'énergie'
    }
  ];

  const videoCard = {
    id: 4,
    title: 'Élégant & pratique',
    description: 'Design raffiné adapté à tous les styles de vie.',
    features: ['Design moderne', 'Pratique quotidien', 'Discret & élégant'],
    icon: <Sparkles className="text-purple-500" size={20} />,
    color: 'border-l-purple-500',
    stats: '96% de satisfaction'
  };

  const mechanismCards = [
    {
      title: 'Amélioration circulatoire',
      description: 'Favorise une meilleure circulation sanguine.',
      icon: '💓',
      details: ['Circulation optimisée', 'Oxygénation tissulaire']
    },
    {
      title: 'Régulation métabolique',
      description: 'Accompagne l\'équilibre glycémique naturel.',
      icon: '⚖️',
      details: ['Équilibre glycémique', 'Métabolisme actif']
    },
    {
      title: 'Détente & vitalité',
      description: 'Réduit la fatigue et apporte confort.',
      icon: '😌',
      details: ['Fatigue réduite', 'Récupération améliorée']
    },
    {
      title: 'Harmonie énergétique',
      description: 'Réduit le stress et améliore la qualité de vie.',
      icon: '✨',
      details: ['Stress diminué', 'Équilibre émotionnel']
    }
  ];

  const creamFeatures = [
    {
      icon: <Flame className="text-red-500" size={20} />,
      title: 'Effet chauffant',
      description: 'Augmente la température locale et la circulation sanguine'
    },
    {
      icon: <Thermometer className="text-blue-500" size={20} />,
      title: 'Anti-inflammatoire',
      description: 'Aide à bloquer les cytokines pro-inflammatoires'
    },
    {
      icon: <Droplet className="text-green-500" size={20} />,
      title: 'Soulagement rapide',
      description: 'Réduit l\'ankylose et améliore la mobilité'
    },
    {
      icon: <Flower2 className="text-purple-500" size={20} />,
      title: 'Soins anti-âge',
      description: 'Effets liftants et raffermissants pour la peau'
    }
  ];

  const creamIngredients = [
    {
      name: 'Arnica',
      benefit: 'Détente après effort',
      color: 'from-green-50 to-green-100',
      icon: <Leaf className="text-green-600" size={16} />
    },
    {
      name: 'Glucosamine',
      benefit: 'Confort articulaire',
      color: 'from-blue-50 to-blue-100',
      icon: <Bone className="text-blue-600" size={16} />
    },
    {
      name: 'Vitamine K2',
      benefit: 'Peau souple et nourrie',
      color: 'from-purple-50 to-purple-100',
      icon: <HeartPulse className="text-purple-600" size={16} />
    }
  ];

  return (
    <section id="apropos" className="py-12 md:py-20 bg-gradient-to-b from-white to-beige-50">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 rounded-full mb-4 md:mb-6">
            <Leaf className="mr-2 text-primary-600" size={16} />
            <span className="text-sm font-medium text-primary-700 md:text-base">Naturel & Équilibré</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl md:mb-6">
            Découvrez <span className="text-primary-600">Noéva™</span>
          </h1>
          <p className="max-w-3xl px-2 mx-auto text-lg text-gray-600 md:text-xl">
            Votre allié naturel pour retrouver équilibre, vitalité et sérénité au quotidien
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="mb-8 text-center md:mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary-50 rounded-full mb-3 md:mb-4">
              <Sparkles className="mr-2 text-primary-600" size={16} />
              <span className="text-sm font-medium text-primary-700">Bienfaits Principaux</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
              Transformez votre quotidien avec Noéva™
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
              4 piliers fondamentaux pour votre bien-être global
            </p>
          </div>

          <div className="relative">
            <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {/* Carte vidéo */}
              <motion.div
                key={videoCard.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
              >
                <div 
                  className="relative h-40 overflow-hidden cursor-pointer md:h-48 group"
                  onClick={handleMainVideoClick}
                >
                  {!showMainVideo ? (
                    <>
                      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100">
                        <div className="text-center">
                          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 transition-transform rounded-full shadow-lg md:w-16 md:h-16 bg-white/90 backdrop-blur-sm group-hover:scale-110">
                            <Play className="w-6 h-6 ml-1 text-primary-600 md:w-8 md:h-8" />
                          </div>
                          <span className="px-2 py-1 text-xs font-medium text-gray-700 rounded-full md:text-sm bg-white/80">
                            Cliquez pour lire
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 transition-all bg-black/20 group-hover:bg-black/10" />
                    </>
                  ) : (
                    <video
                      ref={mainVideoRef}
                      src={mainVideo}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="object-cover w-full h-full"
                    />
                  )}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                  
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md pointer-events-none top-3 left-3 bg-white/90 backdrop-blur-sm">
                    {videoCard.icon}
                  </div>
                  
                  <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm pointer-events-none top-3 right-3 bg-white/90 backdrop-blur-sm">
                    <span className="text-sm font-bold text-gray-900">01</span>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className={`border-l-4 ${videoCard.color} pl-3 mb-3`}>
                    <h3 className="text-base font-bold text-gray-900 md:text-lg">
                      {videoCard.title}
                    </h3>
                  </div>
                  
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                    {videoCard.description}
                  </p>
                  
                  <div className="mb-4 space-y-2">
                    {videoCard.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Résultat moyen</span>
                      <span className="text-sm font-bold text-primary-600">{videoCard.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Les 3 autres cartes */}
              {benefitCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 1) * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden md:h-48">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
                      {card.icon}
                    </div>
                    
                    <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm top-3 right-3 bg-white/90 backdrop-blur-sm">
                      <span className="text-sm font-bold text-gray-900">0{card.id + 1}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <div className={`border-l-4 ${card.color} pl-3 mb-3`}>
                      <h3 className="text-base font-bold text-gray-900 md:text-lg">
                        {card.title}
                      </h3>
                    </div>
                    
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                      {card.description}
                    </p>
                    
                    <div className="mb-4 space-y-2">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs md:text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Résultat moyen</span>
                        <span className="text-sm font-bold text-primary-600">{card.stats}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Version mobile */}
            <div className="relative md:hidden">
              <button
                onClick={() => scrollLeft(benefitsScrollRef)}
                className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/90 backdrop-blur-sm"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              
              <div 
                ref={benefitsScrollRef}
                className="flex pb-4 pl-2 pr-2 space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Carte vidéo mobile */}
                <div className="flex-shrink-0 w-80 snap-center">
                  <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl">
                    <div 
                      className="relative h-48 overflow-hidden cursor-pointer group"
                      onClick={handleMainVideoClick}
                    >
                      {!showMainVideo ? (
                        <>
                          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100">
                            <div className="text-center">
                              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 transition-transform rounded-full shadow-lg bg-white/90 backdrop-blur-sm group-hover:scale-110">
                                <Play className="w-6 h-6 ml-1 text-primary-600" />
                              </div>
                              <span className="px-2 py-1 text-xs font-medium text-gray-700 rounded-full bg-white/80">
                                Cliquez pour lire
                              </span>
                            </div>
                          </div>
                          <div className="absolute inset-0 transition-all bg-black/20 group-hover:bg-black/10" />
                        </>
                      ) : (
                        <video
                          ref={mainVideoRef}
                          src={mainVideo}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="object-cover w-full h-full"
                        />
                      )}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                      
                      <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md pointer-events-none top-3 left-3 bg-white/90 backdrop-blur-sm">
                        {videoCard.icon}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className={`border-l-4 ${videoCard.color} pl-3 mb-3`}>
                        <h3 className="text-lg font-bold text-gray-900">
                          {videoCard.title}
                        </h3>
                      </div>
                      
                      <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        {videoCard.description}
                      </p>
                      
                      <div className="mb-4 space-y-2">
                        {videoCard.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {benefitCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 w-80 snap-center"
                  >
                    <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                        <div className="absolute flex items-center justify-center w-10 h-10 rounded-lg shadow-md top-3 left-3 bg-white/90 backdrop-blur-sm">
                          {card.icon}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className={`border-l-4 ${card.color} pl-3 mb-3`}>
                          <h3 className="text-lg font-bold text-gray-900">
                            {card.title}
                          </h3>
                        </div>
                        
                        <p className="mb-4 text-sm leading-relaxed text-gray-600">
                          {card.description}
                        </p>
                        
                        <div className="mb-4 space-y-2">
                          {card.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => scrollRight(benefitsScrollRef)}
                className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/90 backdrop-blur-sm"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Video Section - Modal au clic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="p-6 bg-gradient-to-r from-primary-50 to-beige-50 rounded-2xl md:rounded-3xl md:p-8 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2 md:gap-12">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 bg-white rounded-full mb-4 md:mb-6 shadow-sm">
                  <Play className="mr-2 text-primary-600" size={16} />
                  <span className="text-sm font-medium text-primary-700">Vidéo Explicative</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
                  Comment agit le bracelet Noéva™ ?
                </h2>
                
                <div className="space-y-3 md:space-y-4">
                  {[
                    'Améliore la circulation sanguine',
                    'Soutient la régulation métabolique',
                    'Favorise la détente et réduit la fatigue',
                    'Contribue à l\'harmonie énergétique'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-0.5 md:mt-1 mr-3 flex-shrink-0" size={18} />
                      <span className="text-sm text-gray-700 md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div 
                  className="relative overflow-hidden border-4 border-white shadow-xl cursor-pointer aspect-video rounded-xl md:rounded-2xl md:shadow-2xl group bg-gradient-to-br from-primary-900 to-primary-700"
                  onClick={openVideoModal}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 transition-transform transform bg-white rounded-full shadow-xl md:w-20 md:h-20 group-hover:scale-110">
                        <Play className="w-8 h-8 ml-1 text-primary-600 md:w-10 md:h-10" />
                      </div>
                      <p className="text-sm font-medium text-white md:text-base">
                        Cliquez pour voir la vidéo
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute hidden p-4 bg-white border border-gray-100 shadow-lg -bottom-4 -right-4 rounded-xl md:rounded-2xl lg:block">
                  <div className="flex items-center text-xl font-bold md:text-2xl text-primary-600">
                    <TrendingUp className="mr-2" size={16} />
                    98%
                  </div>
                  <div className="text-xs text-gray-600 md:text-sm">de satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal Vidéo */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={closeVideoModal}>
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeVideoModal}
                className="absolute right-0 text-white transition-colors -top-12 hover:text-gray-300"
              >
                <X size={32} />
              </button>
              <div className="overflow-hidden bg-black aspect-video rounded-xl">
                <video
                  ref={modalVideoRef}
                  src={video}
                  controls
                  playsInline
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Section Crème Noéva */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="overflow-hidden shadow-xl bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl md:rounded-3xl">
            <div className="p-6 md:p-8 lg:p-12">
              <div className="mb-8 text-center md:mb-12">
                <div className="inline-flex items-center px-3 py-1.5 bg-white/80 rounded-full mb-3 md:mb-4">
                  <Droplet className="mr-2 text-indigo-600" size={16} />
                  <span className="text-sm font-medium text-indigo-700">Notre gamme complète</span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl md:mb-4">
                  Crème Noéva™ : Votre allié bien-être pour un confort optimal
                </h2>
                <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
                  Elle assure un confort et une détente au quotidien
                </p>
              </div>

              <div className="grid gap-8 mb-8 lg:grid-cols-2 md:gap-12 md:mb-12">
                <div className="order-2 lg:order-1">
                  <div className="relative mb-6 md:mb-8">
                    <div className="p-6 shadow-lg bg-gradient-to-br from-white to-indigo-50 rounded-xl md:rounded-2xl md:p-8">
                      <div className="relative w-full h-64 overflow-hidden rounded-lg md:h-72 md:rounded-xl">
                        <img
                          src={pommadeImage}
                          alt="Crème Noéva™ pour articulations"
                          className="object-contain w-full h-full transition-transform duration-500 transform hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/30 to-transparent" />
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                          CRÈME ARTICULATIONS
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                        <div className="text-xs font-medium text-gray-700">Texture légère • Pénétration rapide</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                    Présentation de la crème Noéva™
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700 md:mb-6 md:text-base">
                    La crème Noéva™ est un produit cosmétique et thérapeutique utilisé pour ses propriétés 
                    anti-inflammatoires et raffermissantes, ciblant les douleurs articulaires et musculaires 
                    (arthrose, tendinite) grâce à sa formule, et offrant des effets anti-âge pour la peau 
                    (rides, éclat).
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
                    La crème s'applique par massage sur les zones concernées et pénètre rapidement en apportant 
                    un confort. Sa texture est légère, non collante et pénètre rapidement.
                  </p>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="mb-8 md:mb-12">
                    <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                      Composition naturelle
                    </h3>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2 md:gap-4">
                      {creamIngredients.map((ingredient, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-br ${ingredient.color} rounded-lg md:rounded-xl p-4 md:p-5 border border-white/50`}
                        >
                          <div className="flex items-center mb-2">
                            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-white rounded-lg shadow-sm">
                              {ingredient.icon}
                            </div>
                            <div className="text-sm font-bold text-gray-900 md:text-base">
                              {ingredient.name}
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 md:text-sm pl-11">
                            {ingredient.benefit}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl md:mb-6">
                      Comment agit la crème Noéva™ ?
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
                      La crème Noéva™ utilise des principes de stimulation naturelle qui favorisent 
                      une sensation immédiate d'apaisement.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      {creamFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -3 }}
                          className="p-4 transition-all bg-white border border-gray-100 rounded-lg shadow-sm md:rounded-xl hover:shadow-md"
                        >
                          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
                            {feature.icon}
                          </div>
                          <h4 className="mb-1 text-sm font-bold text-gray-900 md:text-base">
                            {feature.title}
                          </h4>
                          <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-white shadow-sm bg-white/80 rounded-xl md:rounded-2xl md:p-8">
                <h4 className="mb-4 text-lg font-bold text-center text-gray-900 md:text-xl md:mb-6">
                  Bénéfices principaux de la crème Noéva™
                </h4>
                <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                  {[
                    'Cible arthrose et tendinite',
                    'Effets anti-âge pour la peau',
                    'Application par massage rapide',
                    'Soulagement des douleurs articulaires',
                    'Améliore l\'éclat de la peau',
                    'Texture non collante et pénétrante'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-700 md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mechanism Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="mb-8 text-center md:mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-green-50 rounded-full mb-3 md:mb-4">
              <Activity className="mr-2 text-green-600" size={16} />
              <span className="text-sm font-medium text-green-700">Mécanisme d'Action</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl md:mb-4">
              Comment Noéva™ agit sur votre organisme
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
              Un soutien naturel pour retrouver un équilibre durable
            </p>
          </div>

          <div className="relative">
            <div className="hidden max-w-6xl gap-6 mx-auto md:grid md:grid-cols-2">
              {mechanismCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:rounded-2xl hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-3xl md:text-4xl">{card.icon}</div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl md:mb-3">
                        {card.title}
                      </h3>
                      <p className="mb-3 text-sm leading-relaxed text-gray-600 md:mb-4 md:text-base">
                        {card.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs text-gray-700 border border-gray-200 rounded-lg bg-gray-50 md:text-sm"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative md:hidden">
              <button
                onClick={() => scrollLeft(mechanismScrollRef)}
                className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/90 backdrop-blur-sm"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              
              <div 
                ref={mechanismScrollRef}
                className="flex pb-4 pl-2 pr-2 space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {mechanismCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 snap-center"
                  >
                    <div className="h-full p-6 bg-white border border-gray-100 shadow-lg rounded-xl">
                      <div className="mb-4 text-4xl">{card.icon}</div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900">
                        {card.title}
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-600">
                        {card.description}
                      </p>
                      <div className="space-y-2">
                        {card.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => scrollRight(mechanismScrollRef)}
                className="absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/90 backdrop-blur-sm"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="p-6 text-white shadow-xl bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl md:rounded-3xl md:p-8">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
              {[
                { 
                  number: isStatsInView ? `${stats.users.toLocaleString()}+` : '0+', 
                  label: 'Utilisateurs satisfaits' 
                },
                { 
                  number: isStatsInView ? `${stats.improvement}%` : '0%', 
                  label: 'Amélioration bien-être' 
                },
                { 
                  number: isStatsInView ? `${stats.countries}+` : '0+', 
                  label: 'Pays de livraison' 
                },
                { 
                  number: '24/7', 
                  label: 'Support disponible' 
                }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="mb-1 text-2xl font-bold md:text-3xl lg:text-4xl md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/90 md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-6 bg-white border border-gray-200 shadow-lg rounded-2xl md:rounded-3xl md:p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
              Prêt à retrouver votre équilibre ?
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-sm text-gray-600 md:mb-8 md:text-base">
              Rejoignez les milliers de personnes qui ont déjà choisi Noéva™
            </p>
            
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
              <button
                onClick={() => {
                  const productsSection = document.getElementById('produits');
                  if (productsSection) {
                    const headerHeight = 80;
                    const elementPosition = productsSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-600 md:px-8 hover:bg-primary-700 hover:shadow-xl md:text-base"
              >
                <span>Découvrir les produits</span>
                <ArrowRight className="ml-2" size={18} />
              </button>
              
              <button
                onClick={openVideoModal}
                className="flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 rounded-full border-primary-600 text-primary-600 md:px-8 hover:bg-primary-50 md:text-base"
              >
                <Play className="mr-2" size={18} />
                <span>Voir la vidéo</span>
              </button>
            </div>
            
            <p className="mt-6 text-xs text-gray-500 md:text-sm md:mt-8">
              Livraison gratuite • Garantie 30 jours • Support 7j/7
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .snap-x {
    scroll-snap-type: x mandatory;
  }
  
  .snap-center {
    scroll-snap-align: center;
  }
  
  .snap-mandatory {
    scroll-snap-stop: always;
  }
`;

if (typeof window !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default About;