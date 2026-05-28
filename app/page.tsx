import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Watch"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 z-0 opacity-50"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Timeless Elegance for Your Wrist
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover our exquisite collection of luxury watches.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <Image
              src="https://images.unsplash.com/photo-1539874754762-5a969b6aba53?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Classic Watch"
              width={300}
              height={300}
              className="mx-auto mb-6 rounded-lg"
            />
            <h3 className="text-2xl font-semibold mb-4">Classic Designs</h3>
            <p className="text-gray-400">
              Embrace tradition with our timeless and elegant classic watch designs.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <Image
              src="https://images.unsplash.com/photo-1548170274-130386260170?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sport Watch"
              width={300}
              height={300}
              className="mx-auto mb-6 rounded-lg"
            />
            <h3 className="text-2xl font-semibold mb-4">Sporty & Durable</h3>
            <p className="text-gray-400">
              Engineered for performance and durability, perfect for the active lifestyle.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <Image
              src="https://images.unsplash.com/photo-1577749440700-47b856e9c606?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern Watch"
              width={300}
              height={300}
              className="mx-auto mb-6 rounded-lg"
            />
            <h3 className="text-2xl font-semibold mb-4">Modern Innovations</h3>
            <p className="text-gray-400">
              Cutting-edge design and technology for the contemporary connoisseur.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Find Your Perfect Timepiece</h2>
        <p className="text-xl mb-8">Explore our diverse range and elevate your style.</p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          View All Watches
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 text-center text-gray-500">
        <p>&copy; 2024 Luxury Watches. All rights reserved.</p>
      </footer>
    </div>
  );
}
