// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { products } from '../data/products';
// import ProductOrderForm from '../components/ProductOrderForm';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Import testimonial images
// import TE1 from '../IMAGES/TE1.jpg';
// import TE2 from '../IMAGES/TE2.jpg';
// import TE3 from '../IMAGES/TE3.jpg';
// import TE4 from '../IMAGES/TE4.jpg';
// import TE5 from '../IMAGES/TE5.jpg';
// import TE6 from '../IMAGES/TE6.jpg';
// import TE7 from '../IMAGES/TE7.jpg';

// // Import proof of shipping images
// import P1 from '../IMAGES/P1.jpeg';
// import P2 from '../IMAGES/P2.jpeg';
// import P3 from '../IMAGES/P3.jpeg';
// import P4 from '../IMAGES/P4.jpeg';
// import P5 from '../IMAGES/P5.jpeg';
// import P6 from '../IMAGES/P6.jpeg';
// import P7 from '../IMAGES/P7.jpeg';
// import P8 from '../IMAGES/P8.jpeg';
// import P9 from '../IMAGES/P9.jpeg';
// import P10 from '../IMAGES/P10.jpeg';

// const ProductDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === Number(id));
//   const [quantity, setQuantity] = useState(1);
//   const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
//   const [currentProofIndex, setCurrentProofIndex] = useState(0);

//   // Testimonial and proof images based on product
//   const testimonialImages = product?.id === 1 ? [TE1, TE2, TE3,TE4, TE5, TE6, TE7] : [TE4, TE5, TE6, TE7];
//   const proofImages = product?.id === 1 ? [P1, P2, P3, P4,P5, P6, P7, P8, P9, P10] : [P1, P2, P3, P4,P5, P6, P7, P8, P9, P10];

//   // Auto-rotate testimonial carousel
//   useEffect(() => {
//     if (product?.id !== 1) return; // Seulement pour le produit 1
//     const interval = setInterval(() => {
//       setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
//     }, 5000); // Rotate every 5 seconds
//     return () => clearInterval(interval);
//   }, [testimonialImages.length, product?.id]);

//   // Auto-rotate proof carousel for all products
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
//     }, 5000); // Rotate every 5 seconds
//     return () => clearInterval(interval);
//   }, [proofImages.length]);

//   const handleOpenOrder = () => {
//     // Open the order form
//     setIsOrderFormOpen(true);
//   };

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Produit introuvable</h2>
//           <button
//             onClick={() => navigate(-1)}
//             className="px-6 py-2 bg-primary-600 text-white rounded-lg mt-4"
//           >
//             Retour aux produits
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center py-8 px-2 bg-beige-50">
//       <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-lg p-3 sm:p-4 relative">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute left-4 top-4 sm:left-6 sm:top-6 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg font-semibold text-xs shadow hover:bg-primary-100 z-10"
//         >
//           ← Retour aux produits
//         </button>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl mb-3 mt-8"
//         />
//         <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">{product.name}</h1>
//         <p className="text-gray-700 mb-4 text-center text-sm sm:text-base">{product.description}</p>
//         <div className="flex items-center justify-center mb-4">
//           <span className="text-lg font-semibold text-primary-600 mr-2">{product.price.toLocaleString()} FCFA</span>
//         </div>
//         <div className="flex items-center justify-center mb-6">
//           <button
//             onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//             className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-lg"
//             aria-label="Diminuer la quantité"
//           >
//             -
//           </button>
//           <span className="mx-4 text-lg font-medium">{quantity}</span>
//           <button
//             onClick={() => setQuantity((q) => q + 1)}
//             className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-lg"
//             aria-label="Augmenter la quantité"
//           >
//             +
//           </button>
//         </div>
//         <div className="flex items-center justify-between mb-6 px-2">
//           <span className="text-gray-600 text-sm">Total :</span>
//           <span className="text-lg font-bold text-primary-600">{(product.price * quantity).toLocaleString()} FCFA</span>
//         </div>
//         <button
//           onClick={handleOpenOrder}
//           className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold text-base hover:bg-green-700 transition-colors"
//         >
//           Commander
//         </button>
//       </div>

//       {/* Product Description Section - Bracelet */}
//       {product && product.id === 1 && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="w-full max-w-4xl mt-12 mx-auto px-4"
//         >
//           <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//               {product.name}
//             </h2>
            
//             {/* Main benefits grid */}
//             <div className="grid md:grid-cols-2 gap-8 mb-12">
//               {/* Left column - Main benefits */}
//               <div className="space-y-6">
//                 <div className="border-l-4 border-primary-600 pl-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
//                     ❤️ Amélioration circulatoire
//                   </h3>
//                   <p className="text-gray-600 mb-2">Favorise une meilleure circulation sanguine.</p>
//                   <ul className="text-sm text-gray-500 space-y-1">
//                     <li>✓ Circulation optimisée</li>
//                     <li>✓ Oxygénation tissulaire</li>
//                   </ul>
//                 </div>

//                 <div className="border-l-4 border-primary-600 pl-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
//                     ⚖️ Régulation métabolique
//                   </h3>
//                   <p className="text-gray-600 mb-2">Accompagne l'équilibre glycémique naturel.</p>
//                   <ul className="text-sm text-gray-500 space-y-1">
//                     <li>✓ Équilibre glycémique</li>
//                     <li>✓ Métabolisme actif</li>
//                   </ul>
//                 </div>

//                 <div className="border-l-4 border-primary-600 pl-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
//                     😌 Détente & vitalité
//                   </h3>
//                   <p className="text-gray-600 mb-2">Réduit la fatigue et apporte confort.</p>
//                   <ul className="text-sm text-gray-500 space-y-1">
//                     <li>✓ Fatigue réduite</li>
//                     <li>✓ Récupération améliorée</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Right column - Additional benefits */}
//               <div className="space-y-6">
//                 <div className="border-l-4 border-primary-600 pl-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
//                     ✨ Harmonie énergétique
//                   </h3>
//                   <p className="text-gray-600 mb-2">Réduit le stress et améliore la qualité de vie.</p>
//                   <ul className="text-sm text-gray-500 space-y-1">
//                     <li>✓ Stress diminué</li>
//                     <li>✓ Équilibre émotionnel</li>
//                   </ul>
//                 </div>

//                 <div className="border-l-4 border-primary-600 pl-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
//                     🎨 Élégant & pratique
//                   </h3>
//                   <p className="text-gray-600 mb-2">Design raffiné adapté à tous les styles de vie.</p>
//                   <ul className="text-sm text-gray-500 space-y-1">
//                     <li>✓ Design moderne</li>
//                     <li>✓ Pratique quotidien</li>
//                     <li>✓ Discret & élégant</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Statistics */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 py-8 border-y border-gray-200">
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <div className="text-3xl font-bold text-primary-600 mb-2">2 500+</div>
//                 <p className="text-sm text-gray-600">Utilisateurs satisfaits</p>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="text-center"
//               >
//                 <div className="text-3xl font-bold text-primary-600 mb-2">94%</div>
//                 <p className="text-sm text-gray-600">Amélioration bien-être</p>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="text-center"
//               >
//                 <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
//                 <p className="text-sm text-gray-600">Pays de livraison</p>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="text-center"
//               >
//                 <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
//                 <p className="text-sm text-gray-600">Support disponible</p>
//               </motion.div>
//             </div>

//             {/* Trust badge */}
//             <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-6 text-center">
//               <p className="text-lg font-semibold text-gray-900 mb-2">Résultat moyen</p>
//               <p className="text-primary-600 font-bold">96% de satisfaction</p>
//             </div>
//           </div>
//         </motion.div>
//       )}

//       {/* Product Description Section - Pommade */}
//       {product && product.id === 2 && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="w-full max-w-4xl mt-12 mx-auto px-4"
//         >
//           <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
//               Crème Noéva™
//             </h2>
//             <p className="text-center text-gray-600 text-lg mb-8">
//               Pour articulations
//             </p>
            
//             {/* Tagline */}
//             <div className="bg-primary-50 rounded-xl p-6 mb-10 text-center">
//               <p className="text-lg font-semibold text-gray-900">
//                 Elle assure un confort et une détente au quotidien
//               </p>
//             </div>

//             {/* Main description */}
//             <div className="mb-10 p-6 border border-gray-200 rounded-xl">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Présentation de la crème Noéva™</h3>
//               <p className="text-gray-700 mb-4 leading-relaxed">
//                 La crème Noéva™ est un produit cosmétique et thérapeutique utilisé pour ses propriétés 
//                 <strong> anti-inflammatoires et raffermissantes</strong>, ciblant les douleurs articulaires 
//                 et musculaires (arthrose, tendinite) grâce à sa formule, et offrant des effets 
//                 <strong> anti-âge pour la peau</strong> (rides, éclat).
//               </p>
//               <p className="text-gray-700 leading-relaxed">
//                 La crème s'applique par massage sur les zones concernées et pénètre rapidement en apportant 
//                 un confort. Sa texture est légère, non collante et pénètre rapidement.
//               </p>
//             </div>

//             {/* Composition */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Composition naturelle</h3>
//               <div className="grid md:grid-cols-3 gap-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-100"
//                 >
//                   <h4 className="text-lg font-bold text-gray-900 mb-2">🌿 Arnica</h4>
//                   <p className="text-gray-600">Détente après effort</p>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 }}
//                   className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100"
//                 >
//                   <h4 className="text-lg font-bold text-gray-900 mb-2">💪 Glucosamine</h4>
//                   <p className="text-gray-600">Confort articulaire</p>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 }}
//                   className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100"
//                 >
//                   <h4 className="text-lg font-bold text-gray-900 mb-2">✨ Vitamine K2</h4>
//                   <p className="text-gray-600">Peau souple et nourrie</p>
//                 </motion.div>
//               </div>
//             </div>

//             {/* How it works */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Comment agit la crème Noéva™ ?</h3>
//               <p className="text-gray-600 mb-6 italic">
//                 La crème Noéva™ utilise des principes de stimulation naturelle qui favorisent 
//                 une sensation immédiate d'apaisement.
//               </p>
//               <div className="space-y-4">
//                 <motion.div
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="flex items-start space-x-4"
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
//                     1
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 mb-1">🔥 Effet chauffant</h4>
//                     <p className="text-gray-600">Augmente la température locale et la circulation sanguine</p>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 }}
//                   className="flex items-start space-x-4"
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
//                     2
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 mb-1">⚡ Anti-inflammatoire</h4>
//                     <p className="text-gray-600">Aide à bloquer les cytokines pro-inflammatoires</p>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 }}
//                   className="flex items-start space-x-4"
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
//                     3
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 mb-1">🎯 Soulagement rapide</h4>
//                     <p className="text-gray-600">Réduit l'ankylose et améliore la mobilité</p>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.3 }}
//                   className="flex items-start space-x-4"
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
//                     4
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 mb-1">🌟 Soins anti-âge</h4>
//                     <p className="text-gray-600">Effets liftants et raffermissants pour la peau</p>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Key benefits */}
//             <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Bénéfices principaux de la crème Noéva™</h3>
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="flex items-center space-x-3">
//                   <span className="text-2xl">✓</span>
//                   <span className="text-gray-700 font-medium">Cible arthrose et tendinite</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-2xl">✓</span>
//                   <span className="text-gray-700 font-medium">Effets anti-âge pour la peau</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-2xl">✓</span>
//                   <span className="text-gray-700 font-medium">Application par massage rapide</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-2xl">✓</span>
//                   <span className="text-gray-700 font-medium">Soulagement des douleurs articulaires</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-2xl">✓</span>
//                   <span className="text-gray-700 font-medium">Améliore l'éclat de la peau</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-2xl">✓</span>
//                   <span className="text-gray-700 font-medium">Texture non collante et pénétrante</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//       <ProductOrderForm 
//         product={product!} 
//         quantity={quantity} 
//         isOpen={isOrderFormOpen} 
//         onClose={() => setIsOrderFormOpen(false)} 
//       />

//       {/* Testimonials Section - Only for product 1 */}
//       {product && product.id === 1 && (
//         <div className="w-full max-w-lg mt-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-6"
//           >
//             <h3 className="text-lg font-bold text-gray-900 mb-2">Témoignages Clients</h3>
//             <p className="text-gray-600 text-sm">Ce que disent nos clients satisfaits</p>
//           </motion.div>
          
//           <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
//             <div className="relative h-64 bg-gray-200">
//               <motion.img
//                 key={currentTestimonialIndex}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 src={testimonialImages[currentTestimonialIndex]}
//                 alt="Témoignage client"
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             {testimonialImages.length > 1 && (
//               <div className="absolute inset-0 flex items-center justify-between px-4">
//                 <button
//                   onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length)}
//                   className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
//                 >
//                   <ChevronLeft size={20} className="text-gray-900" />
//                 </button>
//                 <button
//                   onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length)}
//                   className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
//                 >
//                   <ChevronRight size={20} className="text-gray-900" />
//                 </button>
//               </div>
//             )}
            
//             <div className="p-4 text-center">
//               <p className="text-xs text-gray-500">Témoignage {currentTestimonialIndex + 1}/{testimonialImages.length}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Proof of Shipping Section - For all products */}
//       {product && (
//         <div className="w-full max-w-lg mt-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-6"
//           >
//             <h3 className="text-lg font-bold text-gray-900 mb-2">Preuves d'Expédition</h3>
//             <p className="text-gray-600 text-sm">Nos colis livrés avec succès</p>
//           </motion.div>
          
//           <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
//             <div className="relative h-64 bg-gray-200">
//               <motion.img
//                 key={currentProofIndex}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 src={proofImages[currentProofIndex]}
//                 alt="Preuve d'expédition"
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             {proofImages.length > 1 && (
//               <div className="absolute inset-0 flex items-center justify-between px-4">
//                 <button
//                   onClick={() => setCurrentProofIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length)}
//                   className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
//                 >
//                   <ChevronLeft size={20} className="text-gray-900" />
//                 </button>
//                 <button
//                   onClick={() => setCurrentProofIndex((prev) => (prev + 1) % proofImages.length)}
//                   className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
//                 >
//                   <ChevronRight size={20} className="text-gray-900" />
//                 </button>
//               </div>
//             )}
            
//             <div className="p-4 text-center">
//               <p className="text-xs text-gray-500">Expédition {currentProofIndex + 1}/{proofImages.length}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductOrderForm from '../components/ProductOrderForm';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  CheckCircle,
  Truck,
  Shield,
  Star,
  Heart,
  Zap,
  Leaf,
  Sparkles,
  ShoppingCart,
  Minus,
  Plus
} from 'lucide-react';

// Import testimonial images
import TE1 from '../IMAGES/TE1.jpg';
import TE2 from '../IMAGES/TE2.jpg';
import TE3 from '../IMAGES/TE3.jpg';
import TE4 from '../IMAGES/TE4.jpg';
import TE5 from '../IMAGES/TE5.jpg';
import TE6 from '../IMAGES/TE6.jpg';
import TE7 from '../IMAGES/TE7.jpg';

// Import proof of shipping images
import P1 from '../IMAGES/P1.jpeg';
import P2 from '../IMAGES/P2.jpeg';
import P3 from '../IMAGES/P3.jpeg';
import P4 from '../IMAGES/P4.jpeg';
import P5 from '../IMAGES/P5.jpeg';
import P6 from '../IMAGES/P6.jpeg';
import P7 from '../IMAGES/P7.jpeg';
import P8 from '../IMAGES/P8.jpeg';
import P9 from '../IMAGES/P9.jpeg';
import P10 from '../IMAGES/P10.jpeg';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentProofIndex, setCurrentProofIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Testimonial and proof images based on product
  const testimonialImages = product?.id === 1 ? [TE1, TE2, TE3, TE4, TE5, TE6, TE7] : [TE4, TE5, TE6, TE7];
  const proofImages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10];

  // Auto-rotate testimonial carousel
  useEffect(() => {
    if (product?.id !== 1) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialImages.length, product?.id]);

  // Auto-rotate proof carousel for all products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [proofImages.length]);

  const handleOpenOrder = () => {
    setIsOrderFormOpen(true);
  };

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
  }, [testimonialImages.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  }, [testimonialImages.length]);

  const nextProof = useCallback(() => {
    setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
  }, [proofImages.length]);

  const prevProof = useCallback(() => {
    setCurrentProofIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length);
  }, [proofImages.length]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Produit introuvable</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            ← Retour aux produits
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Retour</span>
          </button>
        </div>
      </div>

      {/* Main Product Card - Single card for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-4"
      >
        {/* Mobile: Single Card Layout */}
        <div className="lg:hidden bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Product Image */}
          <div className="relative">
            {isImageLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
            )}
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-[250px] object-cover transition-opacity duration-300 ${
                isImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setIsImageLoading(false)}
            />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
              <span className="text-xs font-semibold text-primary-600">Nouveau</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            
            {/* Ratings */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 text-xs">4.8 (2.5k+ avis)</span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Prix unitaire</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-xl font-bold text-primary-600">
                      {product.price.toLocaleString()} FCFA
                    </p>
                    <span className="text-xs text-gray-500 line-through">
                      {(product.price * 1.3).toLocaleString()} FCFA
                    </span>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-lg">
                  <p className="text-xs font-semibold">-30%</p>
                </div>
              </div>
            </div>

            {/* Quantity and Order Section - On same card */}
            <div className="space-y-4 border-t border-gray-100 pt-4">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">Quantité</p>
                <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-1.5">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
                    aria-label="Diminuer la quantité"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-lg font-bold text-gray-900 min-w-[30px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
                    aria-label="Augmenter la quantité"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Total :</span>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary-600">
                    {(product.price * quantity).toLocaleString()} FCFA
                  </p>
                  <p className="text-xs text-gray-500">Livraison incluse</p>
                </div>
              </div>

              {/* Order Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleOpenOrder}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Commander maintenant</span>
              </motion.button>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <Truck className="w-4 h-4 text-primary-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-700">2-5 jours</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <Shield className="w-4 h-4 text-primary-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-700">Sécurisé</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-700">Garanti</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Product Image */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative">
              {isImageLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
              )}
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-[400px] object-cover transition-opacity duration-300 ${
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setIsImageLoading(false)}
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-sm font-semibold text-primary-600">Nouveau</span>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 p-4">
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <Truck className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">Livraison rapide</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <Shield className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">Paiement sécurisé</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <CheckCircle className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-gray-700">Garantie satisfait</p>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info with Order */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6">
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                
                {/* Ratings */}
                <div className="flex items-center space-x-2 mt-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.8 (2.5k+ avis)</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Prix unitaire</p>
                    <div className="flex items-baseline gap-3">
                      <p className="text-2xl font-bold text-primary-600">
                        {product.price.toLocaleString()} FCFA
                      </p>
                      <span className="text-sm text-gray-500 line-through">
                        {(product.price * 1.3).toLocaleString()} FCFA
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg">
                    <p className="text-sm font-semibold">Économisez 30%</p>
                  </div>
                </div>
              </div>

              {/* Quantity and Order */}
              <div className="space-y-6">
                {/* Quantity Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">Quantité</p>
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-xl font-bold text-gray-900 min-w-[40px] text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total :</span>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary-600">
                          {(product.price * quantity).toLocaleString()} FCFA
                        </p>
                        <p className="text-sm text-gray-500">Livraison incluse</p>
                      </div>
                    </div>
                  </div>

                  {/* Order Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOpenOrder}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <ShoppingCart size={24} />
                    <span>Commander maintenant</span>
                  </motion.button>

                  {/* Safety Message */}
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Paiement 100% sécurisé • Livraison sous 2-5 jours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Description Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        {product.id === 1 ? (
          <BraceletDescription />
        ) : (
          <CreamDescription />
        )}

        {/* Testimonials Section - Only for product 1 */}
        {product.id === 1 && (
          <TestimonialsSection
            images={testimonialImages}
            currentIndex={currentTestimonialIndex}
            onNext={nextTestimonial}
            onPrev={prevTestimonial}
          />
        )}

        {/* Proof of Shipping Section */}
        <ProofSection
          images={proofImages}
          currentIndex={currentProofIndex}
          onNext={nextProof}
          onPrev={prevProof}
        />
      </div>

      {/* Order Form Modal */}
      <ProductOrderForm 
        product={product} 
        quantity={quantity} 
        isOpen={isOrderFormOpen} 
        onClose={() => setIsOrderFormOpen(false)} 
      />
    </div>
  );
};

// Sub-components for better organization
const BraceletDescription: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 lg:mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
  >
    <div className="p-5 lg:p-8">
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">Un équilibre retrouvé</h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Découvrez comment notre bracelet harmonise votre bien-être au quotidien
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
        {[
          { icon: Heart, title: "Circulation", benefits: ["Optimisation sanguine", "Oxygénation tissulaire"] },
          { icon: Zap, title: "Énergie", benefits: ["Fatigue réduite", "Récupération améliorée"] },
          { icon: Leaf, title: "Équilibre", benefits: ["Stress diminué", "Harmonie émotionnelle"] },
          { icon: Sparkles, title: "Design", benefits: ["Élégant et discret", "Adapté au quotidien"] },
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-4 shadow-sm"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
              <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary-600" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
            <ul className="space-y-1">
              {benefit.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-5 lg:p-6 text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {[
            { value: "2.5k+", label: "Clients satisfaits" },
            { value: "94%", label: "Amélioration" },
            { value: "30+", label: "Pays desservis" },
            { value: "24/7", label: "Support client" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl lg:text-2xl font-bold mb-1">{stat.value}</div>
              <p className="text-primary-100 text-xs lg:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const CreamDescription: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 lg:mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
  >
    <div className="p-5 lg:p-8">
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">Crème Noéva™</h2>
        <p className="text-gray-600 text-sm lg:text-base">Soulagement articulaire & rajeunissement cutané</p>
      </div>

      {/* Hero Statement */}
      <div className="bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8">
        <p className="text-base lg:text-lg font-semibold text-center text-gray-900">
          "Un confort retrouvé au quotidien"
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-4 mb-6 lg:mb-8">
        {[
          {
            icon: "🌿",
            title: "Arnica",
            description: "Détente musculaire après l'effort",
            color: "from-green-50 to-white"
          },
          {
            icon: "💪",
            title: "Glucosamine",
            description: "Confort articulaire optimal",
            color: "from-blue-50 to-white"
          },
          {
            icon: "✨",
            title: "Vitamine K2",
            description: "Peau nourrie et souple",
            color: "from-purple-50 to-white"
          }
        ].map((feature) => (
          <div
            key={feature.title}
            className={`bg-gradient-to-br ${feature.color} rounded-xl p-4 shadow-sm border border-gray-100`}
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm lg:text-base">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="space-y-4">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Mode d'action</h3>
        {[
          { step: "01", title: "Effet chauffant", description: "Augmente la circulation sanguine locale" },
          { step: "02", title: "Anti-inflammatoire", description: "Réduit les cytokines pro-inflammatoires" },
          { step: "03", title: "Soulagement rapide", description: "Diminue l'ankylose et améliore la mobilité" },
          { step: "04", title: "Soins anti-âge", description: "Effets liftants et raffermissants" },
        ].map((step) => (
          <div
            key={step.step}
            className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">{step.step}</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-1">{step.title}</h4>
              <p className="text-gray-600 text-sm lg:text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection: React.FC<{
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, onNext, onPrev }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 lg:mt-8"
  >
    <div className="text-center mb-4 lg:mb-6">
      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">Témoignages clients</h3>
      <p className="text-gray-600 text-sm lg:text-base">Découvrez les retours de nos clients satisfaits</p>
    </div>
    
    <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          src={images[currentIndex]}
          alt="Témoignage client"
          className="w-full h-[250px] lg:h-[300px] object-cover"
        />
      </AnimatePresence>
      
      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-3 lg:px-4">
        <button
          onClick={onPrev}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
        >
          <ChevronLeft size={18} className="text-gray-900" />
        </button>
        <button
          onClick={onNext}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
        >
          <ChevronRight size={18} className="text-gray-900" />
        </button>
      </div>
      
      {/* Counter */}
      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
        <p className="text-xs font-medium text-gray-900">
          {currentIndex + 1}/{images.length}
        </p>
      </div>
    </div>
  </motion.div>
);

const ProofSection: React.FC<{
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, onNext, onPrev }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 lg:mt-8"
  >
    <div className="text-center mb-4 lg:mb-6">
      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">Livraisons confirmées</h3>
      <p className="text-gray-600 text-sm lg:text-base">Preuves d'expédition à travers le monde</p>
    </div>
    
    <div className="relative bg-gradient-to-br from-beige-50 to-white rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          src={images[currentIndex]}
          alt="Preuve d'expédition"
          className="w-full h-[200px] lg:h-[250px] object-cover"
        />
      </AnimatePresence>
      
      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-3 lg:px-4">
        <button
          onClick={onPrev}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
        >
          <ChevronLeft size={18} className="text-gray-900" />
        </button>
        <button
          onClick={onNext}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
        >
          <ChevronRight size={18} className="text-gray-900" />
        </button>
      </div>
      
      {/* Footer */}
      <div className="bg-white p-3 lg:p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900 text-sm">Suivi en temps réel</p>
            <p className="text-xs text-gray-600">Colis {currentIndex + 1}/{images.length}</p>
          </div>
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle size={16} />
            <span className="font-medium text-sm">Livré</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProductDetail;