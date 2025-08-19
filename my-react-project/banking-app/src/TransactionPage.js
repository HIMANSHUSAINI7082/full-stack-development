import React from 'react';

function TransactionPage() {
  const transactions = [
    { date: '2025-08-01', description: 'Money Transfer', amount: '-500' },
    { date: '2025-08-03', description: 'Salary Credit', amount: '+2000' },
    { date: '2025-08-05', description: 'ATM Withdrawal', amount: '-1000' }
  ];

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-6">Your Last Transactions</h2>

      <table className="border border-gray-400 w-96 text-left bg-white shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-4 py-2">Date</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{txn.date}</td>
              <td className="border border-gray-400 px-4 py-2">{txn.description}</td>
              <td
                className={`border border-gray-400 px-4 py-2 font-semibold ${
                  txn.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {txn.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionPage;
