import { Product } from '../types';
import bracelet from '../IMAGES/bracelet_blanc.jpeg'
import pomade from '../IMAGES/pommade.png'

export const products: Product[] = [
  {
    id: 1,
    name: 'Bracelet Énergétique',
    description: 'Bracelet en pierres naturelles pour équilibrer les énergies et réduire le stress.',
    price: 13000,
    benefits: [
      'Réduction du stress',
      'Équilibre énergétique',
      'Amélioration du sommeil',
      'Protection contre les ondes négatives'
    ],
    image: bracelet
  },
  {
    id: 2,
    name: 'Pommade Naturelle',
    description: 'Pommade 100% naturelle pour les douleurs musculaires et articulaires.',
    price: 6500,
    benefits: [
      'Soulagement des douleurs',
      'Anti-inflammatoire naturel',
      'Hydratation profonde',
      'Sans produits chimiques'
    ],
    image: pomade
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Marie K.',
    comment: 'Le bracelet m\'a vraiment aidé avec mon stress quotidien. Je le recommande !',
    rating: 5
  },
  {
    id: 2,
    name: 'Jean P.',
    comment: 'La pommade est magique pour mes douleurs articulaires. Naturelle et efficace.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sophie L.',
    comment: 'Livraison rapide et produits de qualité. Service client très réactif sur WhatsApp.',
    rating: 4
  }
];

export const advantages = [
  {
    id: 1,
    title: 'Livraison Rapide',
    description: 'Livraison sous 24h à Abidjan, 2-3 jours pour l\'intérieur du pays.',
    icon: '🚚'
  },
  {
    id: 2,
    title: 'Paiement Sécurisé',
    description: 'Paiement à la livraison ou acompte sécurisé selon votre localisation.',
    icon: '🔒'
  },
  {
    id: 3,
    title: 'Produits Naturels',
    description: 'Tous nos produits sont 100% naturels et fabriqués avec soin.',
    icon: '🌿'
  },
  {
    id: 4,
    title: 'Support Client',
    description: 'Disponible sur WhatsApp pour répondre à toutes vos questions.',
    icon: '💬'
  }
];