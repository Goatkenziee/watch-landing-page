import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100`}>  
      <h1 className='text-4xl font-bold text-center'>Premium Watches</h1>
      <p className='mt-4 text-lg text-center'>Discover our exclusive collection of luxury watches that combine style and functionality.</p>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div className='border p-4 rounded-lg shadow-lg bg-white'>
          <Image src='/watch1.jpg' alt='Watch 1' width={300} height={300} className='w-full h-48 object-cover rounded-md'/>
          <h2 className='text-xl font-semibold'>Elegant Watch</h2>
          <p className='text-gray-700'>$299</p>
          <button className='mt-2 bg-blue-500 text-white p-2 rounded'>Buy Now</button>
        </div>
        <div className='border p-4 rounded-lg shadow-lg bg-white'>
          <Image src='/watch2.jpg' alt='Watch 2' width={300} height={300} className='w-full h-48 object-cover rounded-md'/>
          <h2 className='text-xl font-semibold'>Sporty Watch</h2>
          <p className='text-gray-700'>$199</p>
          <button className='mt-2 bg-blue-500 text-white p-2 rounded'>Buy Now</button>
        </div>
        <div className='border p-4 rounded-lg shadow-lg bg-white'>
          <Image src='/watch3.jpg' alt='Watch 3' width={300} height={300} className='w-full h-48 object-cover rounded-md'/>
          <h2 className='text-xl font-semibold'>Classic Watch</h2>
          <p className='text-gray-700'>$399</p>
          <button className='mt-2 bg-blue-500 text-white p-2 rounded'>Buy Now</button>
        </div>
      </div>
      <footer className='mt-8 text-center'>
        <p>&copy; 2026 Premium Watches. All rights reserved.</p>
      </footer>
    </main>
  );
}