import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Globe, Home } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { OrderFormData } from '../types';

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderPopup: React.FC<OrderPopupProps> = ({ isOpen, onClose }) => {
  const { items, getTotal, clearCart } = useCart();
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
    
    // Format WhatsApp message
    const message = `Nouvelle commande !%0A%0A` +
      `👤 Client: ${formData.firstName} ${formData.lastName}%0A` +
      `📞 Téléphone: ${formData.phone}%0A` +
      `📍 Localisation: ${getLocationText(formData.location)}%0A` +
      (formData.city ? `🏙️ Ville: ${formData.city}%0A` : '') +
      (formData.country ? `🌍 Pays: ${formData.country}%0A` : '') +
      `%0A🛒 Commande:%0A` +
      items.map(item => `- ${item.name} x${item.quantity}: ${formatPrice(item.price * item.quantity)}`).join('%0A') +
      `%0A%0A💰 Total: ${formatPrice(getTotal())}%0A` +
      `💳 Mode paiement: ${getPaymentMethod(formData.location)}%0A` +
      (formData.notes ? `%0A📝 Notes: ${formData.notes}` : '');

    // Redirect to WhatsApp
    window.open(`https://wa.me/2250714113978?text=${message}`, '_blank');
    
    // Clear cart and close popup
    clearCart();
    onClose();
    
    // Reset form
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
    switch (location) {
      case 'abidjan': return 'Abidjan';
      case 'interior': return 'Intérieur du pays';
      case 'exterior': return 'Extérieur du pays';
      default: return '';
    }
  };

  const getPaymentMethod = (location: string) => {
    switch (location) {
      case 'abidjan': return 'Paiement à la livraison';
      case 'interior': return 'Acompte obligatoire (50%)';
      case 'exterior': return 'Acompte + frais d\'expédition';
      default: return '';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CI', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative z-50"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Finaliser la commande
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Order summary */}
              <div className="mb-6 bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Récapitulatif</h4>
                {items.map(item => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <span className="text-gray-600">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary-600">{formatPrice(getTotal())}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Mode de paiement: {getPaymentMethod(formData.location)}
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Ex: +225701234567 (ou +33XXXXXXXXX)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Localisation
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      location: e.target.value as OrderFormData['location'],
                      city: '',
                      country: ''
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="abidjan">Abidjan</option>
                    <option value="interior">Intérieur du pays</option>
                    <option value="exterior">Extérieur du pays</option>
                  </select>
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start">
                      <MapPin className="text-blue-500 mt-1 mr-2" size={16} />
                      <span className="text-sm text-blue-700">
                        {formData.location === 'abidjan' && 'Paiement à la livraison disponible'}
                        {formData.location === 'interior' && 'paiement 100% requis avant expédition'}
                        {formData.location === 'exterior' && 'paiement total + frais d\'expédition requis'}
                      </span>
                    </div>
                  </div>
                </div>

                {formData.location === 'exterior' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pays
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {(formData.location === 'abidjan' || formData.location === 'interior') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {formData.location === 'abidjan' ? 'Commune' : 'Ville'}
                    </label>
                    <div className="relative">
                      <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes supplémentaires (optionnel)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Précisions sur l'adresse, préférences de livraison..."
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start">
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">✅ Vos informations sont utilisées uniquement pour la commande</p>
                      <p>✅ Pas de stockage sensible côté serveur</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700"
                  >
                    Commander sur WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default OrderPopup;