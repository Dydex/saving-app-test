import { useState } from "react";
import { useRouter } from "next/router";

export default function RegistrationForm() {
  const router = useRouter();
  const [tier, setTier] = useState("Tier1");
  const [amount, setAmount] = useState(10000);

  const handleTierChange = (value: string) => {
    setTier(value);

    if (value === "Tier1") setAmount(10000);
    if (value === "Tier2") setAmount(20000);
    if (value === "Tier3") setAmount(30000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Register Savings Group
        </h1>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="text-black border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="tier" className="mb-2 font-medium text-gray-700">
            Select Tier
          </label>
          <select
            id="tier"
            value={tier}
            onChange={(e) => handleTierChange(e.target.value)}
            className="text-black border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Tier1">Tier 1 – ₦10,000</option>
            <option value="Tier2">Tier 2 – ₦20,000</option>
            <option value="Tier3">Tier 3 – ₦30,000</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-2 font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            readOnly
            className=" text-black border border-gray-300 rounded-lg p-3 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}
