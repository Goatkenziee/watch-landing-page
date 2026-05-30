import React from 'react';
import Layout from './layout';

const Page: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Watch Landing Page</h1>
        <p className="text-lg">Discover our exclusive collection of watches.</p>
        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Shop Now</button>
        </div>
      </div>
    </Layout>
  );
};

export default Page;