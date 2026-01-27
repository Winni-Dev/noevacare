// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// import { testimonials } from '../data/products';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import TE1 from '../IMAGES/TE1.jpg';
// import TE2 from '../IMAGES/TE2.jpg';
// import TE3 from '../IMAGES/TE3.jpg';
// import TE4 from '../IMAGES/TE4.jpg';
// import TE5 from '../IMAGES/TE5.jpg';
// import TE6 from '../IMAGES/TE6.jpg';
// import TE7 from '../IMAGES/TE7.jpg';

// const Testimonials: React.FC = () => {
//   const navigationPrevRef = useRef<HTMLButtonElement>(null);
//   const navigationNextRef = useRef<HTMLButtonElement>(null);
//   const images = [TE1, TE2, TE3, TE4, TE5, TE6, TE7];

//   return (
//     <section id="avis" className="py-20 bg-beige-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Ce que disent nos clients
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Découvrez les témoignages de ceux qui ont déjà expérimenté nos produits
//           </p>
//         </motion.div>

//         <div className="relative max-w-4xl mx-auto">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation={{
//               prevEl: navigationPrevRef.current,
//               nextEl: navigationNextRef.current,
//             }}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             loop={true}
//             onSwiper={(swiper) => {
//               // @ts-ignore
//               swiper.params.navigation.prevEl = navigationPrevRef.current;
//               // @ts-ignore
//               swiper.params.navigation.nextEl = navigationNextRef.current;
//               swiper.navigation.init();
//               swiper.navigation.update();
//             }}
//             className="pb-12"
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={testimonial.id}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   className="bg-white rounded-3xl p-8 shadow-lg"
//                 >
//                   <img src={images[index]} alt={`Témoignage ${index + 1}`} className="w-full h-48 md:h-64 object-cover rounded-3xl" />
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation buttons */}
//           <div className="flex justify-center items-center space-x-4 mt-8">
//             <button
//               ref={navigationPrevRef}
//               className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft size={24} className="text-gray-700" />
//             </button>
//             <button
//               ref={navigationNextRef}
//               className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight size={24} className="text-gray-700" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import TE1 from '../IMAGES/TE1.jpg';
// import TE2 from '../IMAGES/TE2.jpg';
// import TE3 from '../IMAGES/TE3.jpg';
// import TE4 from '../IMAGES/TE4.jpg';
// import TE5 from '../IMAGES/TE5.jpg';
// import TE6 from '../IMAGES/TE6.jpg';
// import TE7 from '../IMAGES/TE7.jpg';

// import P1 from '../IMAGES/P1.jpg';
// import P2 from '../IMAGES/P2.jpg';
// import P3 from '../IMAGES/P3.jpg';
// import P4 from '../IMAGES/P4.jpg';
// import P5 from '../IMAGES/P5.jpg';
// import P6 from '../IMAGES/P6.jpg';
// import P7 from '../IMAGES/P7.jpg';
// import P8 from '../IMAGES/P8.jpg';
// import P9 from '../IMAGES/P9.jpg';
// import P10 from '../IMAGES/P10.jpg';

// const Testimonials: React.FC = () => {
//   const navigationPrevRef = useRef<HTMLButtonElement>(null);
//   const navigationNextRef = useRef<HTMLButtonElement>(null);
  
//   const images = [
//     { id: 1, src: TE1, alt: "Témoignage client 1" },
//     { id: 2, src: TE2, alt: "Témoignage client 2" },
//     { id: 3, src: TE3, alt: "Témoignage client 3" },
//     { id: 4, src: TE4, alt: "Témoignage client 4" },
//     { id: 5, src: TE5, alt: "Témoignage client 5" },
//     { id: 6, src: TE6, alt: "Témoignage client 6" },
//     { id: 7, src: TE7, alt: "Témoignage client 7" }
//   ];

//   return (
//     <section id="avis" className="py-10 md:py-14 bg-beige-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-6"
//         >
//           <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
//             Témoignages Clients
//           </h2>
//           <p className="text-gray-500 text-xs max-w-sm mx-auto">
//             Avis de nos clients satisfaits
//           </p>
//         </motion.div>

//         <div className="relative max-w-sm md:max-w-md mx-auto">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={16}
//             slidesPerView={1}
//             navigation={{
//               prevEl: navigationPrevRef.current,
//               nextEl: navigationNextRef.current,
//             }}
//             pagination={{ 
//               clickable: true,
//               dynamicBullets: true
//             }}
//             autoplay={{ 
//               delay: 5000,
//               disableOnInteraction: false 
//             }}
//             loop={true}
//             onSwiper={(swiper) => {
//               setTimeout(() => {
//                 if (navigationPrevRef.current && navigationNextRef.current) {
//                   // @ts-ignore
//                   swiper.params.navigation.prevEl = navigationPrevRef.current;
//                   // @ts-ignore
//                   swiper.params.navigation.nextEl = navigationNextRef.current;
//                   swiper.navigation.init();
//                   swiper.navigation.update();
//                 }
//               }, 100);
//             }}
//             className="pb-6"
//           >
//             {images.map((image) => (
//               <SwiperSlide key={image.id}>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   className="rounded-lg overflow-hidden"
//                 >
//                   {/* Taille réduite et élégante */}
//                   <div className="w-full h-64 md:h-72">
//                     <img 
//                       src={image.src} 
//                       alt={image.alt} 
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation buttons */}
//           <div className="flex justify-center items-center gap-8 mt-6">
//             <button
//               ref={navigationPrevRef}
//               className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
//               aria-label="Précédent"
//             >
//               <ChevronLeft size={14} className="text-white" />
//             </button>
            
//             <div className="text-gray-600 text-xs">
//               <span className="font-medium">0{images.length}</span>
//               <span className="ml-1">témoignages</span>
//             </div>
            
//             <button
//               ref={navigationNextRef}
//               className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
//               aria-label="Suivant"
//             >
//               <ChevronRight size={14} className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Package, Truck, Globe, CheckCircle } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TE1 from '../IMAGES/TE1.jpg';
import TE2 from '../IMAGES/TE2.jpg';
import TE3 from '../IMAGES/TE3.jpg';
import TE4 from '../IMAGES/TE4.jpg';
import TE5 from '../IMAGES/TE5.jpg';
import TE6 from '../IMAGES/TE6.jpg';
import TE7 from '../IMAGES/TE7.jpg';

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

const Testimonials: React.FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const proofNavigationPrevRef = useRef<HTMLButtonElement>(null);
  const proofNavigationNextRef = useRef<HTMLButtonElement>(null);
  
  const testimonialImages = [
    { id: 1, src: TE1, alt: "Témoignage client 1" },
    { id: 2, src: TE2, alt: "Témoignage client 2" },
    { id: 3, src: TE3, alt: "Témoignage client 3" },
    { id: 4, src: TE4, alt: "Témoignage client 4" },
    { id: 5, src: TE5, alt: "Témoignage client 5" },
    { id: 6, src: TE6, alt: "Témoignage client 6" },
    { id: 7, src: TE7, alt: "Témoignage client 7" }
  ];

  const proofImages = [
    { id: 1, src: P1, alt: "Preuve d'expédition 1" },
    { id: 2, src: P2, alt: "Preuve d'expédition 2" },
    { id: 3, src: P3, alt: "Preuve d'expédition 3" },
    { id: 4, src: P4, alt: "Preuve d'expédition 4" },
    { id: 5, src: P5, alt: "Preuve d'expédition 5" },
    { id: 6, src: P6, alt: "Preuve d'expédition 6" },
    { id: 7, src: P7, alt: "Preuve d'expédition 7" },
    { id: 8, src: P8, alt: "Preuve d'expédition 8" },
    { id: 9, src: P9, alt: "Preuve d'expédition 9" },
    { id: 10, src: P10, alt: "Preuve d'expédition 10" }
  ];

  return (
    <section id="avis" className="py-10 md:py-14 bg-beige-50">
      <div className="container mx-auto px-4">
        
        {/* Section Témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full mb-2 shadow-sm">
            <CheckCircle size={12} className="text-green-500" />
            <h2 className="text-sm font-medium text-gray-900">
              Témoignages Clients
            </h2>
          </div>
          <p className="text-gray-500 text-xs max-w-sm mx-auto">
            Découvrez ce que disent nos clients satisfaits
          </p>
        </motion.div>

        <div className="relative max-w-sm md:max-w-md mx-auto mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false 
            }}
            loop={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (navigationPrevRef.current && navigationNextRef.current && swiper.params.navigation) {
                  (swiper.params.navigation as any).prevEl = navigationPrevRef.current;
                  (swiper.params.navigation as any).nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }, 100);
            }}
            className="pb-6"
          >
            {testimonialImages.map((image) => (
              <SwiperSlide key={image.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden"
                >
                  <div className="w-full h-64 md:h-72 bg-white p-2 rounded-lg shadow-sm">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center gap-8 mt-6">
            <button
              ref={navigationPrevRef}
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={14} className="text-white" />
            </button>
            
            <div className="text-gray-600 text-xs">
              <span className="font-medium">{testimonialImages.length}</span>
              <span className="ml-1">témoignages</span>
            </div>
            
            <button
              ref={navigationNextRef}
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={14} className="text-white" />
            </button>
          </div>
        </div>

        {/* Section Preuves d'Expédition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 rounded-full mb-2 shadow-sm">
              <Package size={12} className="text-blue-500" />
              <h2 className="text-sm font-medium text-gray-900">
                Preuves d'Expédition
              </h2>
            </div>
            <p className="text-gray-500 text-xs max-w-sm mx-auto mb-4">
              Nos colis livrés dans toute la Côte d'Ivoire
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Truck size={12} className="text-green-500" />
                  <div className="text-lg font-bold text-gray-900">5+</div>
                </div>
                <div className="text-xs text-gray-500">Pays</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Package size={12} className="text-blue-500" />
                  <div className="text-lg font-bold text-gray-900">{proofImages.length}+</div>
                </div>
                <div className="text-xs text-gray-500">Expéditions</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Globe size={12} className="text-purple-500" />
                  <div className="text-lg font-bold text-gray-900">24/7</div>
                </div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24
                }
              }}
              navigation={{
                prevEl: proofNavigationPrevRef.current,
                nextEl: proofNavigationNextRef.current,
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true
              }}
              loop={true}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (proofNavigationPrevRef.current && proofNavigationNextRef.current && swiper.params.navigation) {
                    (swiper.params.navigation as any).prevEl = proofNavigationPrevRef.current;
                    (swiper.params.navigation as any).nextEl = proofNavigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                }, 100);
              }}
              className="pb-8"
            >
              {proofImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-2">
                      <div className="relative aspect-square">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover rounded"
                        />
                        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          #{image.id}
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <div className="text-xs text-gray-500 font-medium">
                          Expédition confirmée
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation pour preuves */}
            <button
              ref={proofNavigationPrevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Précédent"
            >
              <ChevronLeft size={16} className="text-gray-700" />
            </button>
            
            <button
              ref={proofNavigationNextRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Suivant"
            >
              <ChevronRight size={16} className="text-gray-700" />
            </button>
          </div>

          {/* Indicateur */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
              <Package size={14} className="text-gray-400" />
              <div className="text-sm text-gray-600">
                <span className="font-medium">{proofImages.length}</span>
                <span className="ml-1">preuves d'expédition</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Commandez en toute confiance
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              Livraison rapide • Suivi en temps réel • Support 7j/7
            </p>
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
              className="bg-gray-900 text-white text-xs px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Commander maintenant
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;