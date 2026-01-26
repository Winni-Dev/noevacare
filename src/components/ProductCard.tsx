// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Plus, Minus, Check } from 'lucide-react';
// import { Product } from '../types';
// import { useCart } from '../hooks/useCart';
// import toast from 'react-hot-toast';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [adding, setAdding] = useState(false);
//   const { addItem } = useCart();

//   const handleAddToCart = () => {
//     setAdding(true);
//     addItem(product, quantity);
    
//     toast.success(`${quantity} ${product.name} ajouté au panier`, {
//       icon: <Check className="text-green-500" />,
//       position: 'bottom-right',
//     });
    
//     setTimeout(() => setAdding(false), 1000);
//     setQuantity(1);
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('fr-CI', {
//       style: 'currency',
//       currency: 'XOF',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//     >
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//         />
//         <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//           Best-seller
//         </div>
//       </div>
      
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
//         <p className="text-gray-600 mb-4">{product.description}</p>
        
//         <div className="mb-4">
//           <h4 className="font-semibold text-gray-900 mb-2">Bienfaits :</h4>
//           <ul className="space-y-1">
//             {product.benefits.map((benefit, index) => (
//               <li key={index} className="flex items-center text-gray-600">
//                 <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
//                 {benefit}
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         <div className="flex items-center justify-between">
//           <div>
//             <div className="text-2xl font-bold text-primary-600">
//               {formatPrice(product.price)}
//             </div>
//             <div className="text-sm text-gray-500">unité</div>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
//               >
//                 <Minus size={16} />
//               </button>
//               <span className="w-8 text-center font-semibold">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
//               >
//                 <Plus size={16} />
//               </button>
//             </div>
            
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={handleAddToCart}
//               disabled={adding}
//               className={`px-6 py-2 rounded-full font-semibold transition-colors ${
//                 adding
//                   ? 'bg-green-600 text-white'
//                   : 'bg-primary-600 text-white hover:bg-primary-700'
//               }`}
//             >
//               {adding ? (
//                 <div className="flex items-center">
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
//                   Ajouté
//                 </div>
//               ) : (
//                 'Ajouter au panier'
//               )}
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Check, Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    setAdding(true);
    addItem(product, quantity);
    
    toast.success(`Ajouté au panier`, {
      position: 'top-right',
      style: {
        borderRadius: '12px',
        background: '#10B981',
        color: '#fff',
      },
    });
    
    setTimeout(() => setAdding(false), 800);
    setQuantity(1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CI', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {/* Image container */}
        <div className="relative">
          <div className="relative h-56 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            
            {/* Badge */}
            <div className="absolute top-3 left-3">
              <div className="bg-primary-600 text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-md">
                NOÉVA™
              </div>
            </div>
            
            {/* Wishlist */}
            <button
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:shadow transition-all"
              aria-label={wishlist ? "Retirer des favoris" : "Ajouter aux favoris"}
            >
              <Heart 
                size={16} 
                className={wishlist ? "fill-red-500 text-red-500" : "text-gray-400"} 
              />
            </button>
            
            {/* Rating */}
            <div className="absolute bottom-3 left-3 flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
              <Star size={12} className="text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-semibold text-gray-900 text-xs">4.9</span>
            </div>
          </div>
          
          {/* Promo tag */}
          {product.price > 25000 && (
            <div className="absolute bottom-0 right-3 transform translate-y-1/2">
              <div className="bg-red-500 text-white px-2.5 py-1 rounded-lg shadow-md">
                <div className="text-xs font-bold">-20%</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title and description */}
          <div className="mb-3 flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1.5 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {product.description}
            </p>
          </div>
          
          {/* Price section */}
          <div className="mb-4 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                </div>
                {product.price > 25000 && (
                  <div className="flex items-center mt-0.5">
                    <span className="text-gray-400 text-xs line-through mr-1">
                      {formatPrice(product.price * 1.25)}
                    </span>
                    <span className="text-red-600 text-xs font-semibold">
                      Économie
                    </span>
                  </div>
                )}
              </div>
              
              {/* Quantity control */}
              <div className="flex items-center space-x-1.5 bg-gray-50 rounded-full p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xs"
                  aria-label="Réduire la quantité"
                >
                  <Minus size={14} className="text-gray-600" />
                </button>
                <span className="w-6 text-center font-bold text-gray-900 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xs"
                  aria-label="Augmenter la quantité"
                >
                  <Plus size={14} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Add to cart button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={adding}
            className={`w-full py-2.5 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm ${
              adding
                ? 'bg-green-600 text-white shadow'
                : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-md'
            }`}
          >
            {adding ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                <span>Ajouté</span>
              </>
            ) : (
              <>
                <span className="mr-2">Ajouter au panier</span>
                <Check size={16} />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;