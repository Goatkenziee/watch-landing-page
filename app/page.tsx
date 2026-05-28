import Image from 'next/image';

const watches = [
  { id: 1, name: 'Chronos Elite', price: '$1200', imageUrl: '/images/watch1.jpg', description: 'Timeless elegance for the modern connoisseur.' },
  { id: 2, name: 'Aura Sport', price: '$750', imageUrl: '/images/watch2.jpg', description: 'Performance and style, built for adventure.' },
  { id: 3, name: 'Lunar Classic', price: '$950', imageUrl: '/images/watch3.jpg', description: 'A minimalist design with maximum impact.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-banner.jpg" 
            alt="Luxury Watch Hero Banner" 
            layout="fill" 
            objectFit="cover" 
            quality={100} 
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            Discover Timeless Precision
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the art of watchmaking. Explore our collection of exquisite timepieces.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Watches Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 tracking-wide">
          Featured Timepieces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {watches.map((watch) => (
            <div key={watch.id} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl border border-gray-700 transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src={watch.imageUrl} 
                  alt={watch.name} 
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
              <h3 className="text-3xl font-semibold mb-3">{watch.name}</h3>
              <p className="text-xl font-medium text-gray-300 mb-4">{watch.price}</p>
              <p className="text-base text-gray-400 leading-relaxed">
                {watch.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-900 py-20 px-4 flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 tracking-wide">
            Crafted with Passion, Built for Generations
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At [Your Brand Name], we believe a watch is more than just a timekeeper; it's a legacy.
            Each timepiece is meticulously crafted by master artisans, blending traditional techniques with modern innovation.
            We source only the finest materials to ensure enduring quality and unparalleled beauty.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
          <Image 
            src="/images/about-us.jpg" 
            alt="Watchmakers at work"
            layout="fill" 
            objectFit="cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center bg-black text-gray-500">
        <p>&copy; {new Date().getFullYear()} [Your Brand Name]. All rights reserved.</p>
        <p className="mt-2">A modern landing page for selling watches.</p>
      </footer>
    </main>
  );
}
