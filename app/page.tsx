import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Timeless Elegance <br /> for Your Wrist
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80">
          Discover our exquisite collection of watches, crafted with precision and designed to make a statement.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Shop Collection
        </button>
      </section>

      {/* Product Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 max-w-6xl w-full">
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <Image
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Classic Watch"
            width={500}
            height={500}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Classic Chrono</h3>
            <p className="text-gray-400 mb-4">A timeless piece with intricate detailing and robust functionality.</p>
            <span className="text-blue-400 font-bold text-xl">$499</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <Image
            src="https://images.unsplash.com/photo-1542840422-9097871b059e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern Smartwatch"
            width={500}
            height={500}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Urban Smart</h3>
            <p className="text-gray-400 mb-4">Smart features meet sophisticated design for the modern urbanite.</p>
            <span className="text-blue-400 font-bold text-xl">$799</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <Image
            src="https://images.unsplash.com/photo-1539874754761-5a96942b2067?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sport Watch"
            width={500}
            height={500}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Adventure Pro</h3>
            <p className="text-gray-400 mb-4">Built for the outdoors, with rugged durability and advanced tracking.</p>
            <span className="text-blue-400 font-bold text-xl">$599</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Perfect Timepiece
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-80">
          Browse our full catalog and discover the watch that truly reflects your style and ambition.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          View All Watches
        </button>
      </section>
    </main>
  );
}
