
const Dashboard = () => {
  // This would typically come from your state management or API
  const mockUser = {
    name: "John Doe",
    directReferrals: 5,
    indirectReferralsL2: 10,
    indirectReferralsL3: 20,
    earningsL1: 500, // 5 * 1000 * 0.10
    earningsL2: 800, // 10 * 1000 * 0.08
    earningsL3: 1000, // 20 * 1000 * 0.05
    totalEarnings: 2300, // 500 + 800 + 1000
  };

  const getRewardTier = (earnings) => {
    if (earnings >= 1000) return "Diamond";
    if (earnings >= 700) return "Gold";
    if (earnings >= 500) return "Silver";
    return "No reward yet";
  };

  const user = mockUser; // Replace this with actual user data in a real application

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center ">
      <h1 className="text-3xl font-bold mb-8">Welcome, {user.name}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  w-1/2">
        {/* Referral Stats */}
        <div className="border bg-white rounded-lg shadow-md p-6 ">
          <h2 className="text-xl font-semibold mb-4">Referral Statistics</h2>
          <div className="space-y-2">
            <p>Direct Referrals: {user.directReferrals}</p>
            <p>Indirect Referrals (Level 2): {user.indirectReferralsL2}</p>
            <p>Indirect Referrals (Level 3): {user.indirectReferralsL3}</p>
          </div>
        </div>

        {/* Earnings */}
        <div className="border bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Earnings</h2>
          <div className="space-y-2">
            <p>Level 1 (10%): ${user.earningsL1}</p>
            <p>Level 2 (8%): ${user.earningsL2}</p>
            <p>Level 3 (5%): ${user.earningsL3}</p>
            <p className="font-bold">Total Earnings: ${user.totalEarnings}</p>
          </div>
        </div>


      </div>

      {/* Reward Tier */}
      <div className="border bg-white rounded-lg shadow-md p-6 mt-20  w-1/2 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Reward Tier</h2>
        <p className="text-2xl font-bold text-purple-600">
          {getRewardTier(user.totalEarnings)}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;