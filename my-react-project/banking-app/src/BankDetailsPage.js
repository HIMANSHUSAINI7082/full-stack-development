import React from 'react';

function BankDetailsPage() {
  const account = {
    name: "Shyam Dev",
    number: "1234567890",
    branch: "HDFC Jaipur",
    balance: 100
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-6">Your Account Detail</h2>

      <table className="border border-gray-400 w-96 text-left">
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2 font-medium">Name</td>
            <td className="border border-gray-400 px-4 py-2">{account.name}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2 font-medium">Number</td>
            <td className="border border-gray-400 px-4 py-2">{account.number}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2 font-medium">Branch</td>
            <td className="border border-gray-400 px-4 py-2">{account.branch}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2 font-medium">Balance</td>
            <td className="border border-gray-400 px-4 py-2">{account.balance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BankDetailsPage;
