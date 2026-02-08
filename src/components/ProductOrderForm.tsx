// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, MapPin, Globe, Home } from 'lucide-react';
// import { Product, OrderFormData } from '../types';
// import toast from 'react-hot-toast';

// interface ProductOrderFormProps {
//   product: Product;
//   quantity: number;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ProductOrderForm: React.FC<ProductOrderFormProps> = ({ product, quantity, isOpen, onClose }) => {
//   const [formData, setFormData] = useState<OrderFormData>({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     location: 'abidjan',
//     country: '',
//     city: '',
//     notes: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const total = product.price * quantity;
    
//     // Format WhatsApp message
//     const message = `Nouvelle commande de produit !%0A%0A` +
//       `👤 Client: ${formData.firstName} ${formData.lastName}%0A` +
//       `📞 Téléphone: ${formData.phone}%0A` +
//       `📍 Localisation: ${getLocationText(formData.location)}%0A` +
//       (formData.city ? `🏙️ Ville: ${formData.city}%0A` : '') +
//       (formData.country ? `🌍 Pays: ${formData.country}%0A` : '') +
//       `%0A🛒 Commande:%0A` +
//       `- ${product.name} x${quantity}: ${formatPrice(total)}%0A` +
//       `%0A💰 Total: ${formatPrice(total)}%0A` +
//       `💳 Mode paiement: ${getPaymentMethod(formData.location)}%0A` +
//       (formData.notes ? `%0A📝 Notes: ${formData.notes}` : '');

//     // Redirect to WhatsApp
//     window.open(`https://wa.me/2250714113978?text=${message}`, '_blank');
    
//     // Show success message
//     toast.success('Commande envoyée sur WhatsApp !', {
//       position: 'top-center',
//       style: {
//         borderRadius: '12px',
//         background: '#10B981',
//         color: '#fff',
//       },
//     });
    
//     // Close form and reset
//     onClose();
//     setFormData({
//       firstName: '',
//       lastName: '',
//       phone: '',
//       location: 'abidjan',
//       country: '',
//       city: '',
//       notes: '',
//     });
//   };

//   const getLocationText = (location: string) => {
//     const locations: { [key: string]: string } = {
//       abidjan: 'Abidjan',
//       interior: 'Intérieur du pays',
//       exterior: 'Extérieur du pays',
//     };
//     return locations[location] || location;
//   };

//   const getPaymentMethod = (location: string) => {
//     const methods: { [key: string]: string } = {
//       abidjan: 'Paiement à la livraison',
//       interior: 'Virement ou paiement à la livraison',
//       exterior: 'Virement international',
//     };
//     return methods[location] || 'À confirmer';
//   };

//   const formatPrice = (price: number) => `${price.toLocaleString()} FCFA`;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/50 z-40"
//           />
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="fixed inset-0 flex items-end md:items-center justify-center z-50 p-4"
//           >
//             <div className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
//               {/* Header */}
//               <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between rounded-t-3xl md:rounded-t-3xl">
//                 <h2 className="text-lg font-bold text-gray-900">Confirmer votre commande</h2>
//                 <button
//                   onClick={onClose}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                   aria-label="Fermer"
//                 >
//                   <X size={20} className="text-gray-600" />
//                 </button>
//               </div>

//               {/* Product Summary */}
//               <div className="p-4 bg-gray-50 border-b border-gray-100">
//                 <div className="flex gap-3">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-900">{product.name}</h3>
//                     <p className="text-sm text-gray-600">Quantité: {quantity}</p>
//                     <p className="font-bold text-primary-600 mt-1">{formatPrice(product.price * quantity)}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="p-4 space-y-4">
//                 {/* Name fields */}
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Prénom *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.firstName}
//                       onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                       placeholder="Prénom"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Nom *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.lastName}
//                       onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                       placeholder="Nom"
//                     />
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Téléphone / WhatsApp *
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                     placeholder="+225 00 00 00 00"
//                   />
//                 </div>

//                 {/* Location */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Localisation *
//                   </label>
//                   <div className="space-y-2">
//                     {[
//                       { value: 'abidjan', label: 'Abidjan', icon: Home },
//                       { value: 'interior', label: 'Intérieur du pays', icon: MapPin },
//                       { value: 'exterior', label: 'Extérieur du pays', icon: Globe },
//                     ].map((option) => (
//                       <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" >
//                         <input
//                           type="radio"
//                           name="location"
//                           value={option.value}
//                           checked={formData.location === option.value}
//                           onChange={(e) => setFormData({ ...formData, location: e.target.value as any })}
//                           className="w-4 h-4 text-primary-600"
//                         />
//                         <option.icon size={18} className="text-gray-600 mx-3" />
//                         <span className="text-sm font-medium text-gray-700">{option.label}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* City (if interior) */}
//                 {formData.location === 'interior' && (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Ville
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.city}
//                       onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                       placeholder="Votre ville"
//                     />
//                   </div>
//                 )}

//                 {/* Country (if exterior) */}
//                 {formData.location === 'exterior' && (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Pays
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.country}
//                       onChange={(e) => setFormData({ ...formData, country: e.target.value })}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                       placeholder="Votre pays"
//                     />
//                   </div>
//                 )}

//                 {/* Notes */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Notes supplémentaires
//                   </label>
//                   <textarea
//                     value={formData.notes}
//                     onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                     rows={3}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none"
//                     placeholder="Ajouter une note pour votre commande..."
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors mt-6"
//                 >
//                   Envoyer la commande sur WhatsApp
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ProductOrderForm;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Globe, Home, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Product, OrderFormData } from '../types';
import toast from 'react-hot-toast';

interface ProductOrderFormProps {
  product: Product;
  quantity: number;
  isOpen: boolean;
  onClose: () => void;
}

const ProductOrderForm: React.FC<ProductOrderFormProps> = ({ product, quantity, isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    location: 'abidjan',
    country: '',
    city: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const total = product.price * quantity;
    
    // Format WhatsApp message
    const message = `Nouvelle commande de produit !%0A%0A` +
      `👤 Client: ${formData.firstName} ${formData.lastName}%0A` +
      `📞 Téléphone: ${formData.phone}%0A` +
      `📍 Localisation: ${getLocationText(formData.location)}%0A` +
      (formData.city ? `🏙️ Ville: ${formData.city}%0A` : '') +
      (formData.country ? `🌍 Pays: ${formData.country}%0A` : '') +
      `%0A🛒 Commande:%0A` +
      `- ${product.name} x${quantity}: ${formatPrice(total)}%0A` +
      `%0A💰 Total: ${formatPrice(total)}%0A` +
      `💳 Mode paiement: ${getPaymentMethod(formData.location)}%0A` +
      (formData.notes ? `%0A📝 Notes: ${formData.notes}` : '');

    // Redirect to WhatsApp
    window.open(`https://wa.me/2250714113978?text=${message}`, '_blank');
    
    // Show success message
    toast.success('Commande envoyée sur WhatsApp !', {
      position: 'top-center',
      style: {
        borderRadius: '12px',
        background: '#10B981',
        color: '#fff',
      },
    });
    
    // Close form and reset
    onClose();
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      location: 'abidjan',
      country: '',
      city: '',
      notes: '',
    });
  };

  const getLocationText = (location: string) => {
    const locations: { [key: string]: string } = {
      abidjan: 'Abidjan',
      interior: 'Intérieur du pays',
      exterior: 'Extérieur du pays',
    };
    return locations[location] || location;
  };

  const getPaymentMethod = (location: string) => {
    switch (location) {
      case 'abidjan': return 'Paiement à la livraison';
      case 'interior': return 'paiement 100% requis avant expédition';
      case 'exterior': return 'paiement total + frais d\'expédition requis';
      default: return '';
    }
  };

  const getPaymentMessage = (location: string) => {
    switch (location) {
      case 'abidjan':
        return {
          title: 'Paiement à la livraison',
          description: 'Vous payez directement à la réception de votre commande',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          icon: CheckCircle
        };
      case 'interior':
        return {
          title: 'Paiement 100% requis avant expédition',
          description: 'Un paiement de 100% est requis avant l\'expédition',
          color: 'text-amber-600',
          bgColor: 'bg-amber-50',
          icon: AlertCircle
        };
      case 'exterior':
        return {
          title: 'Paiement total requis',
          description: 'Le paiement total + frais d\'expédition est requis avant l\'envoi',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          icon: Info
        };
      default:
        return {
          title: '',
          description: '',
          color: '',
          bgColor: '',
          icon: Info
        };
    }
  };

  const formatPrice = (price: number) => `${price.toLocaleString()} FCFA`;

  const paymentInfo = getPaymentMessage(formData.location);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-end md:items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-5 flex items-center justify-between rounded-t-3xl md:rounded-t-3xl z-10">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Confirmer votre commande</h2>
                  <p className="text-sm text-gray-500 mt-1">Remplissez vos informations de livraison</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Fermer"
                >
                  <X size={22} className="text-gray-600" />
                </button>
              </div>

              {/* Product Summary */}
              <div className="p-5 bg-gradient-to-r from-primary-50 to-beige-50 border-b border-gray-100">
                <div className="flex gap-4 items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-xl shadow-sm"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <p className="text-sm text-gray-600">Quantité: <span className="font-semibold">{quantity}</span></p>
                        <p className="text-sm text-gray-600">Prix unitaire: <span className="font-semibold">{formatPrice(product.price)}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary-600">{formatPrice(product.price * quantity)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-5">
                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+225 00 00 00 00 ou +33 0 00 00 00 00"
                  />
                </div>

                {/* Location */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Localisation de livraison *
                  </label>
                  
                  <div className="space-y-3">
                    {[
                      { value: 'abidjan', label: 'Abidjan', icon: Home, description: 'Livraison dans toute la ville' },
                      { value: 'interior', label: 'Intérieur du pays', icon: MapPin, description: 'Hors Abidjan (Côte d\'Ivoire)' },
                      { value: 'exterior', label: 'Extérieur du pays', icon: Globe, description: 'À l\'international' },
                    ].map((option) => {
                      const Icon = option.icon;
                      return (
                        <label 
                          key={option.value} 
                          className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            formData.location === option.value 
                              ? 'border-primary-500 bg-primary-50' 
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="location"
                            value={option.value}
                            checked={formData.location === option.value}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value as any })}
                            className="mt-1 w-4 h-4 text-primary-600"
                          />
                          <div className="ml-4 flex-1">
                            <div className="flex items-center">
                              <Icon size={20} className="text-gray-600 mr-3" />
                              <span className="font-semibold text-gray-900">{option.label}</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 ml-7">{option.description}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  {/* Payment Method Info */}
                  {paymentInfo.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${paymentInfo.bgColor} rounded-xl p-4 mt-3 border ${paymentInfo.color.replace('text-', 'border-')}/20`}
                    >
                      <div className="flex items-start">
                        <paymentInfo.icon className={`w-5 h-5 mt-0.5 mr-3 ${paymentInfo.color}`} />
                        <div>
                          <p className={`font-semibold ${paymentInfo.color}`}>{paymentInfo.title}</p>
                          <p className="text-sm text-gray-700 mt-1">{paymentInfo.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* City (if interior) */}
                {formData.location === 'interior' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ville de livraison *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Ex: Bouaké, Yamoussoukro, San Pedro..."
                    />
                    <p className="text-xs text-gray-500 mt-2">Précisez votre ville pour une meilleure organisation de la livraison</p>
                  </motion.div>
                )}

                {/* Country (if exterior) */}
                {formData.location === 'exterior' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pays de livraison *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Ex: France, Canada, Sénégal..."
                    />
                    <p className="text-xs text-gray-500 mt-2">Les frais d'expédition internationaux seront calculés après confirmation</p>
                  </motion.div>
                )}

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes supplémentaires (optionnel)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Instructions spéciales, préférences de livraison, questions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>📱</span>
                  <span>Envoyer la commande sur WhatsApp</span>
                </motion.button>

                {/* Info */}
                <p className="text-center text-xs text-gray-500">
                  Vous serez redirigé vers WhatsApp pour finaliser votre commande
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductOrderForm;