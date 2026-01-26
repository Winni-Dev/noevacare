// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     message: '',
//   });

//   const [submitting, setSubmitting] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);
    
//     // Format WhatsApp message
//     const whatsappMessage = `Nouveau message de contact !%0A%0A` +
//       `👤 Nom: ${formData.name}%0A` +
//       `📞 Téléphone: ${formData.phone}%0A` +
//       `%0A📝 Message:%0A${formData.message}`;

//     // Redirect to WhatsApp
//     setTimeout(() => {
//       window.open(`https://wa.me/2250714113978?text=${whatsappMessage}`, '_blank');
//       setSubmitting(false);
//       setFormData({ name: '', phone: '', message: '' });
//     }, 1000);
//   };

//   const contactInfo = [
//     {
//       icon: <Phone className="text-primary-600" size={24} />,
//       title: 'Téléphone / WhatsApp',
//       value: '+2250714113978',
//       link: 'https://wa.me/2250714113978',
//       description: 'Disponible 7j/7 de 8h à 20h'
//     },
//     {
//       icon: <Mail className="text-primary-600" size={24} />,
//       title: 'Email',
//       value: 'contact@bienetreshop.ci',
//       link: 'mailto:contact@bienetreshop.ci',
//       description: 'Réponse sous 24 heures'
//     },
//     {
//       icon: <MapPin className="text-primary-600" size={24} />,
//       title: 'Localisation',
//       value: 'Abidjan, Côte d\'Ivoire',
//       description: 'Livraison partout dans le monde'
//     }
//   ];

//   return (
//     <div className="min-h-screen pt-32 pb-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-6xl mx-auto"
//         >
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Contactez-nous
//             </h1>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Une question ? Un projet ? Notre équipe est là pour vous répondre rapidement.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white rounded-3xl shadow-xl p-8"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Envoyez-nous un message
//               </h2>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Nom complet *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="Votre nom"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Téléphone / WhatsApp *
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="Ex: +225701234567 or +33XXXXXXXXX"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     required
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     rows={5}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="Décrivez votre demande..."
//                   />
//                 </div>
                
//                 <div className="bg-gray-50 rounded-xl p-4">
//                   <p className="text-sm text-gray-600">
//                     💡 <strong>Conseil :</strong> Pour une réponse immédiate, contactez-nous directement 
//                     sur WhatsApp. Le formulaire est idéal pour les demandes détaillées.
//                   </p>
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center ${
//                     submitting
//                       ? 'bg-green-600 text-white'
//                       : 'bg-primary-600 text-white hover:bg-primary-700'
//                   }`}
//                 >
//                   {submitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
//                       Envoi en cours...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="mr-2" size={20} />
//                       Envoyer via WhatsApp
//                     </>
//                   )}
//                 </button>
//               </form>
//             </motion.div>

//             {/* Contact info */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-8"
//             >
//               {contactInfo.map((info, index) => (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-lg mb-1">
//                         {info.title}
//                       </h3>
//                       {info.link ? (
//                         <a
//                           href={info.link}
//                           target={info.link.startsWith('http') ? '_blank' : undefined}
//                           rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
//                           className="text-primary-600 font-medium text-lg hover:text-primary-700"
//                         >
//                           {info.value}
//                         </a>
//                       ) : (
//                         <p className="text-gray-900 font-medium text-lg">{info.value}</p>
//                       )}
//                       <p className="text-gray-600 mt-1">{info.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* WhatsApp CTA */}
//               <div className="bg-gradient-to-r from-green-50 to-primary-50 rounded-2xl p-8 text-center">
//                 <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <MessageCircle className="text-white" size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   Réponse immédiate sur WhatsApp
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   Cliquez ci-dessous pour nous contacter directement. Notre équipe répond en quelques minutes.
//                 </p>
//                 <a
//                   href="https://wa.me/2250714113978"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
//                 >
//                   <MessageCircle className="mr-2" size={20} />
//                   Ouvrir WhatsApp
//                 </a>
//               </div>

//               {/* Hours */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h3 className="font-bold text-gray-900 text-lg mb-4">
//                   Horaires d'ouverture
//                 </h3>
//                 <div className="space-y-2">
//                   {[
//                     { day: 'Lundi - Vendredi', hours: '8h00 - 20h00' },
//                     { day: 'Samedi', hours: '9h00 - 18h00' },
//                     { day: 'Dimanche', hours: '10h00 - 16h00' }
//                   ].map((schedule, index) => (
//                     <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
//                       <span className="text-gray-700">{schedule.day}</span>
//                       <span className="font-medium text-gray-900">{schedule.hours}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* FAQ Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="mt-16 bg-gradient-to-r from-primary-50 to-beige-50 rounded-3xl p-8"
//           >
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//               Questions fréquentes
//             </h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {[
//                 {
//                   question: 'Comment suivre ma commande ?',
//                   answer: 'Nous vous enverrons un numéro de suivi par WhatsApp dès l\'expédition.'
//                 },
//                 {
//                   question: 'Puis-je modifier ma commande ?',
//                   answer: 'Oui, tant que la commande n\'est pas expédiée. Contactez-nous rapidement sur WhatsApp.'
//                 },
//                 {
//                   question: 'Quelle est la politique de retour ?',
//                   answer: 'Vous disposez de 14 jours pour retourner un produit non utilisé et dans son emballage d\'origine.'
//                 },
//                 {
//                   question: 'Les produits sont-ils authentiques ?',
//                   answer: 'Absolument. Tous nos produits sont authentiques et garantis.'
//                 }
//               ].map((faq, index) => (
//                 <div key={index} className="bg-white rounded-xl p-6">
//                   <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Nouveau message de contact !%0A%0A` +
      `👤 Nom: ${formData.name}%0A` +
      `📞 Téléphone: ${formData.phone}%0A` +
      `%0A📝 Message:%0A${formData.message}`;

    window.open(`https://wa.me/2250714113978?text=${whatsappMessage}`, '_blank');
    setFormData({ name: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: 'Téléphone / WhatsApp',
      value: '+225 07 14 11 39 78',
      link: 'https://wa.me/2250714113978',
      description: '7j/7 • 8h-20h'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'noevacar@gmail.com',
      link: 'mailto:noevacar@gmail.com',
      description: 'Réponse sous 24h'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Localisation',
      value: 'Abidjan, Côte d\'Ivoire',
      description: 'Livraison internationale'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-lg mx-auto mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">
            Nous contacter
          </h1>
          <p className="text-gray-500 text-sm">
            Une question ? Notre équipe vous répond rapidement
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 border border-gray-100"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Téléphone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm"
                  placeholder="+225 00 00 00 00 ou +33 0 00 00 00 00"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-sm flex items-center justify-center bg-gray-900 text-white hover:bg-gray-800"
              >
                <Send size={16} className="mr-2" />
                Envoyer via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      index === 0 ? 'bg-green-50' : 
                      index === 1 ? 'bg-blue-50' : 
                      'bg-gray-50'
                    }`}>
                      <div className={
                        index === 0 ? 'text-green-600' : 
                        index === 1 ? 'text-blue-600' : 
                        'text-gray-600'
                      }>
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-600 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-700 font-medium text-base block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium text-base">{info.value}</p>
                      )}
                      <p className="text-gray-400 text-xs mt-1">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Quick Action */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Réponse immédiate</h3>
                  <p className="text-gray-300 text-sm">Cliquez pour discuter en direct</p>
                </div>
              </div>
              <a
                href="https://wa.me/2250714113978"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm"
              >
                Ouvrir WhatsApp
              </a>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-5 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock size={16} className="text-gray-600" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Horaires</h3>
              </div>
              <div className="space-y-2">
                {[
                  { day: 'Lun - Dim', hours: '24H/24' },
                  // { day: 'Samedi', hours: '9h - 18h' },
                  // { day: 'Dimanche', hours: '10h - 16h' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-6 text-center">
            Questions fréquentes
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                question: 'Comment suivre ma commande ?',
                answer: 'Numéro de suivi envoyé par WhatsApp après expédition.'
              },
              {
                question: 'Délai de livraison ?',
                answer: '24-48h à Abidjan, 3-5 jours ailleurs en Côte d\'Ivoire.'
              },
              {
                question: 'Politique de retour ?',
                answer: '14 jours pour retourner un produit non utilisé.'
              },
              {
                question: 'Modes de paiement ?',
                answer: 'Wave, Mobile Money, cash à la livraison.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2 text-sm">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;