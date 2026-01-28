import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produit introuvable</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg mt-4"
          >
            Retour aux produits
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success('Produit ajouté au panier !', {
      position: 'top-center',
      style: {
        borderRadius: '12px',
        background: '#10B981',
        color: '#fff',
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-2 bg-beige-50">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-lg p-3 sm:p-4 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 sm:left-6 sm:top-6 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg font-semibold text-xs shadow hover:bg-primary-100 z-10"
        >
          ← Retour aux produits
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl mb-3 mt-8"
        />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">{product.name}</h1>
        <p className="text-gray-700 mb-4 text-center text-sm sm:text-base">{product.description}</p>
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg font-semibold text-primary-600 mr-2">{product.price.toLocaleString()} FCFA</span>
        </div>
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-lg"
            aria-label="Diminuer la quantité"
          >
            -
          </button>
          <span className="mx-4 text-lg font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-lg"
            aria-label="Augmenter la quantité"
          >
            +
          </button>
        </div>
        <div className="flex items-center justify-between mb-6 px-2">
          <span className="text-gray-600 text-sm">Total :</span>
          <span className="text-lg font-bold text-primary-600">{(product.price * quantity).toLocaleString()} FCFA</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full py-3 rounded-lg bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition-colors"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
