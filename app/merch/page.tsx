'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductCard = ({ 
  name, 
  price, 
  imageUrl, 
  rating 
}: { 
  name: string; 
  price: number; 
  imageUrl: string; 
  rating: number;
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">
        {rating.toFixed(1)} ★
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900">${price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default function MerchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Our Merchandise</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Discover our exclusive collection of high-quality merchandise
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <ProductCard
                  key={i}
                  name={`Product ${i}`}
                  price={29.99 + i * 10}
                  imageUrl={`https://via.placeholder.com/400x400?text=Product+${i}`}
                  rating={4.5 - (i * 0.1)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <ProductCard
                  key={`featured-${i}`}
                  name={`Featured Product ${i}`}
                  price={49.99 + i * 20}
                  imageUrl={`https://via.placeholder.com/400x400?text=Featured+Product+${i}`}
                  rating={4.8}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
} 