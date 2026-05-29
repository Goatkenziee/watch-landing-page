export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">WatchStore</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-4 text-center">
        <img
          src="https://via.placeholder.com/1500x600"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Timeless Elegance on Your Wrist</h2>
          <p className="text-xl mb-8">Discover our exquisite collection of watches, crafted for precision and style.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-4xl font-bold text-gray-800 text-center mb-12">Featured Watches</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Watch 1" className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Classic Chrono</h4>
              <p className="text-gray-600 mb-4">$499.00</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full text-sm">
                View Details
              </button>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Watch 2" className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Sport Elite</h4>
              <p className="text-gray-600 mb-4">$349.00</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full text-sm">
                View Details
              </button>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Watch 3" className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Luxury Automatic</h4>
              <p className="text-gray-600 mb-4">$799.00</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-4">Find Your Perfect Timepiece</h3>
          <p className="text-lg mb-8">Explore our full catalog and find the watch that defines your style.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            View All Products
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p>&copy; 2024 WatchStore. All rights reserved.</p>
      </footer>
    </div>
  );
}
