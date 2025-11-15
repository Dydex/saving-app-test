export interface DisplayCardProps {
  name: string;
  amountSaved: number;
  interest: number;
  onWithdraw: () => void;
}

export interface MemberProps {
  id: string;
  name: string;
  tier: "Tier1" | "Tier2" | "Tier3";
  amount: number;
  weeklyInterestRate: number;
}
