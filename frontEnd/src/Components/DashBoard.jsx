
import {  useSelector } from "react-redux";

const Dashboard = () => {
  const userData = useSelector(state => state.user.user)
  

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center ">
      <h1 className="text-3xl font-bold mb-8">Welcome, {userData?.name}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  w-1/2">
        {/* Referral Stats */}
        <div className="border bg-white rounded-lg shadow-md p-6 ">
          <h2 className="text-xl font-semibold mb-4">Referral Statistics</h2>
          <div className="space-y-2">
            <p>Direct Referrals: </p>
            <p>Indirect Referrals (Level 2): </p>
            <p>Indirect Referrals (Level 3): </p>
          </div>
        </div>

        {/* Earnings */}
        <div className="border bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Earnings</h2>
          <div className="space-y-2">
            <p>Level 1 (10%)</p>
            <p>Level 2 (8%)</p>
            <p>Level 3 (5%)</p>
            <p className="font-bold">Total Earnings: ${userData?.earnings}</p>
          </div>
        </div>


      </div>

      {/* Reward Tier */}
      <div className="border bg-white rounded-lg shadow-md p-6 mt-20  w-1/2 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Reward Tier</h2>
        {(userData?.earnings >=500 && userData?.earnings <700 )?(
          <p className="text-2xl font-bold text-gray-300">
          SILVER
        </p>):(userData?.earnings >= 700 && userData?.earnings <1000)?(
          <p className="text-2xl font-bold text-orange-300">
          GOLD
        </p>):userData?.earnings>= 1000 ?(
          <p className="text-2xl font-bold text-purple-600">
          DIAMOND
        </p>
        ):(<p className="text-2xl font-bold text-slate-400" >No Reward</p>) }
        
      </div>
    </div>
  );
};


export default Dashboard;