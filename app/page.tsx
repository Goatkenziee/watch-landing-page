import React from 'react';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800">Welcome to the Watch Store</h1>
      <p className="mt-4 text-lg text-gray-600">Discover our exclusive range of watches designed for every occasion.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
          <img src="/images/watch1.jpg" alt="Watch 1" className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">Luxury Watch</h2>
          <p className="text-gray-500">$299.99</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buy Now</button>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
          <img src="/images/watch2.jpg" alt="Watch 2" className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">Sport Watch</h2>
          <p className="text-gray-500">$199.99</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buy Now</button>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
          <img src="/images/watch3.jpg" alt="Watch 3" className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">Casual Watch</h2>
          <p className="text-gray-500">$149.99</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buy Now</button>
        </div>
      </div>
    </main>
  );
};

export default Page;