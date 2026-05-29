'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-400">TimeKeepers</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-yellow-400 transition duration-300">Features</a></li>
            <li><a href="#products" className="hover:text-yellow-400 transition duration-300">Products</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition duration-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Watch"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-50"
        />
        <div className="relative z-10 p-8 bg-gray-900 bg-opacity-70 rounded-lg">
          <h2 className="text-6xl font-extrabold mb-4 text-yellow-400 animate-fade-in-up">Timeless Elegance for Your Wrist</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">Discover exquisite craftsmanship and unparalleled precision. A watch for every moment.</p>
          <a href="#products" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">Explore Collections</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-yellow-400">Why Choose TimeKeepers?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-yellow-400">Precision Engineering</h4>
              <p className="text-gray-300">Each timepiece is a masterpiece of accuracy and reliability.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-yellow-400">Exquisite Design</h4>
              <p className="text-gray-300">Crafted with attention to detail, blending classic and modern aesthetics.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-yellow-400">Durable Materials</h4>
              <p className="text-gray-300">Built to last, using only the finest materials for enduring quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-yellow-400">Our Collections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="https://images.unsplash.com/photo-1532672322588-a7343e06a77d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Classic Watch"
                width={500}
                height={400}
                objectFit="cover"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2 text-yellow-400">The Classic Automatic</h4>
                <p className="text-gray-300 mb-4">Elegant and sophisticated, a timeless piece for any occasion.</p>
                <span className="text-3xl font-bold text-yellow-500">$899</span>
                <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 rounded-full transition duration-300">Add to Cart</button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="https://images.unsplash.com/photo-1547924089-f54291c78477?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sport Watch"
                width={500}
                height={400}
                objectFit="cover"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2 text-yellow-400">The Adventurer Chronograph</h4>
                <p className="text-gray-300 mb-4">Robust and functional, perfect for the active lifestyle.</p>
                <span className="text-3xl font-bold text-yellow-500">$1299</span>
                <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 rounded-full transition duration-300">Add to Cart</button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="https://images.unsplash.com/photo-1617043781358-f46393b48450?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern Watch"
                width={500}
                height={400}
                objectFit="cover"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2 text-yellow-400">The Modern Minimalist</h4>
                <p className="text-gray-300 mb-4">Sleek and understated, a statement of contemporary style.</p>
                <span className="text-3xl font-bold text-yellow-500">$699</span>
                <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 rounded-full transition duration-300">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Newsletter Signup */}
      <section id="contact" className="py-20 bg-gray-800 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8 text-yellow-400">Stay Updated</h3>
          <p className="text-xl mb-8 max-w-xl mx-auto">Join our newsletter for exclusive offers and new collection announcements.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-4 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} TimeKeepers. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-yellow-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
