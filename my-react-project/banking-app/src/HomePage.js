import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-yellow-50 to-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-yellow-700 mb-4 drop-shadow-md">
        My Banking App
      </h1>
      <p className="text-lg text-gray-700 max-w-md text-center">
        Welcome to your personal banking dashboard. Manage your account, check balances,
        and transfer money securely.
      </p>
    </div>
  );
}

export default HomePage;
