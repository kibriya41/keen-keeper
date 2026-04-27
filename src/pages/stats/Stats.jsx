import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const { timeline } = useContext(FriendsContext);

  // ✅ Count interactions
  const counts = {
    text: 0,
    call: 0,
    video: 0,
  };

  timeline.forEach((item) => {
    const type = item.action.toLowerCase();
    if (counts[type] !== undefined) {
      counts[type]++;
    }
  });

  // ✅ Convert to chart data
  const data = [
    { name: "Text", value: counts.text },
    { name: "Call", value: counts.call },
    { name: "Video", value: counts.video },
  ];

  // ✅ Colors (match your UI)
  const COLORS = ["#7C3AED", "#244D3F", "#22C55E"];

  return (
    <div className="bg-[#F8FAFC] py-12 md:py-20">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#1F2937]">
          Friendship Analytics
        </h2>

        {/* Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">

          <h3 className="text-lg font-medium text-[#244D3F] mb-6">
            By Interaction Type
          </h3>

          {/* Chart */}
          <div className="w-full h-75">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#7C3AED] rounded-full"></span> Text
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#244D3F] rounded-full"></span> Call
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#22C55E] rounded-full"></span> Video
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;