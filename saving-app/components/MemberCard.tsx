import { DisplayCardProps } from "@/interfaces";

const MemberCard: React.FC<DisplayCardProps> = ({
  name,
  amountSaved,
  interest,
  onWithdraw,
}) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-3 w-full max-w-sm">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>

        <p>
          <span className=" text-black font-medium">Amount Saved:</span>{" "}
          <span className="text-green-600">
            ₦{amountSaved.toLocaleString()}
          </span>
        </p>

        <p>
          <span className="font-medium">Weekly Interest:</span>{" "}
          <span className="text-blue-600">₦{interest.toLocaleString()}</span>
        </p>

        <button
          onClick={onWithdraw}
          className="mt-2 bg-blue-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Withdraw
        </button>
      </div>
    </>
  );
};
export default MemberCard;
