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


import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const Testimonials: React.FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  
  const images = [
    { id: 1, src: TE1, alt: "Témoignage client 1" },
    { id: 2, src: TE2, alt: "Témoignage client 2" },
    { id: 3, src: TE3, alt: "Témoignage client 3" },
    { id: 4, src: TE4, alt: "Témoignage client 4" },
    { id: 5, src: TE5, alt: "Témoignage client 5" },
    { id: 6, src: TE6, alt: "Témoignage client 6" },
    { id: 7, src: TE7, alt: "Témoignage client 7" }
  ];

  return (
    <section id="avis" className="py-10 md:py-14 bg-beige-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
            Témoignages Clients
          </h2>
          <p className="text-gray-500 text-xs max-w-sm mx-auto">
            Avis de nos clients satisfaits
          </p>
        </motion.div>

        <div className="relative max-w-sm md:max-w-md mx-auto">
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
                if (navigationPrevRef.current && navigationNextRef.current) {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  // @ts-ignore
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }, 100);
            }}
            className="pb-6"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden"
                >
                  {/* Taille réduite et élégante */}
                  <div className="w-full h-64 md:h-72">
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

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-8 mt-6">
            <button
              ref={navigationPrevRef}
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={14} className="text-white" />
            </button>
            
            <div className="text-gray-600 text-xs">
              <span className="font-medium">0{images.length}</span>
              <span className="ml-1">témoignages</span>
            </div>
            
            <button
              ref={navigationNextRef}
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;