import MemberCard from "@/components/MemberCard";
import { members as mockMembers, members } from "@/constants";
import { MemberProps } from "@/interfaces";
import { useState } from "react";

export default function Dashboard() {
  const [members, setMembers] = useState<MemberProps[]>(mockMembers);

  const handleWithdraw = (id: string) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Savings Dashboard</h1>
      <div className="flex flex-wrap gap-6">
        {members.map((m) => (
          <MemberCard
            key={m.id}
            name={m.name}
            amountSaved={m.amount}
            interest={m.weeklyInterestRate}
            onWithdraw={() => handleWithdraw(m.id)}
          />
        ))}
      </div>

      {members.length === 0 && (
        <p className="mt-6 text-gray-600 font-medium">No members remaining.</p>
      )}
    </div>
  );
}
