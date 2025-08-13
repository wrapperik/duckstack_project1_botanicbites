import React from 'react';

export default function Header() {
  return (
    <header
      className="w-full min-h-[24rem] sm:min-h-[28rem] md:min-h-[40rem] flex items-center justify-start bg-cover bg-center relative"
    style={{ backgroundImage: "url('/header.png')" }}
    >
      <div className="p-2 sm:p-10 md:p-12 max-w-full sm:max-w-lg ml-4 sm:ml-12">
        <h1 className="text-left text-2xl sm:text-4xl md:text-5xl font-medium text-white mb-2 sm:mb-4">Welcome to <strong>Botanic Bites</strong></h1>
        <p className="text-left text-base sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-6">Bite by Bite</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="px-6 py-2 text-base sm:text-lg bg-green-600 text-white rounded hover:bg-green-700 transition w-full sm:w-auto">Shop Now</button>
          <button className="px-6 py-2 text-base sm:text-lg bg-white text-green-700 rounded hover:bg-gray-100 transition w-full sm:w-auto">Learn More</button>
        </div>
      </div>
    </header>
  );
}
