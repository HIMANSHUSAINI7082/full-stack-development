import React, { useState } from 'react';

function TransferPage() {
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`₹${formData.amount} transferred from ${formData.fromAccount} to ${formData.toAccount}`);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-6">Transfer Money Between Account</h2>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-400 p-6 rounded-md w-96 bg-white shadow"
      >
        <label className="block mb-2 font-medium">From Account</label>
        <input
          type="text"
          name="fromAccount"
          value={formData.fromAccount}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your account"
        />

        <label className="block mb-2 font-medium">To Account</label>
        <input
          type="text"
          name="toAccount"
          value={formData.toAccount}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter receiver account"
        />

        <label className="block mb-2 font-medium">Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-6"
          placeholder="Enter amount you want to send"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TransferPage;
