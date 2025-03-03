import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({
    users: 0,
    activeUsers: 0,
    revenue: 0,
  });

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const chartData = [
        { name: "Jan", users: 400, revenue: 2400 },
        { name: "Feb", users: 300, revenue: 1398 },
        { name: "Mar", users: 500, revenue: 3800 },
        { name: "Apr", users: 278, revenue: 3908 },
        { name: "May", users: 189, revenue: 4800 },
        { name: "Jun", users: 239, revenue: 3800 },
      ];

      setData(chartData);
      setStats({
        users: 2547,
        activeUsers: 1893,
        revenue: 21240,
      });
      setLoading(false);
    }, 1500);
  }, []);

  const StatCard = ({ title, value, description, className }) => (
    <div
      className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-lg ${className}`}
    >
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 text-2xl font-bold text-gray-900">{value}</div>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  );

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Users"
          value={stats.users.toLocaleString()}
          description="↑ 12% from last month"
          className="animate-slide-up"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers.toLocaleString()}
          description="↓ 3% from last month"
          className="animate-slide-up delay-75"
        />
        <StatCard
          title="Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
          description="↑ 8% from last month"
          className="animate-slide-up delay-150"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            User Growth & Revenue
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            6-month overview of user acquisition and revenue
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="users"
                  stroke="#8884d8"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
