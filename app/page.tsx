import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to the Watch Landing Page</h1>
      <p className="mt-4 text-lg">Explore our exclusive collection of watches.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Luxury Watch</h2>
          <p className="mt-2">A perfect blend of style and functionality.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Sport Watch</h2>
          <p className="mt-2">Durable and designed for active lifestyles.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Casual Watch</h2>
          <p className="mt-2">Ideal for everyday wear.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg">Shop Now</button>
    </div>
  );
};

export default HomePage;