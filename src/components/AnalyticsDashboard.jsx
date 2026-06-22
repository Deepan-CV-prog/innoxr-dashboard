import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
function AnalyticsDashboard({ setShowAnalytics }) {
    const interactionData = [
        {
            device: "EA Mall",
            interactions: 4500,
        },
        {
            device: "Phoenix",
            interactions: 3800,
        },
        {
            device: "Madurai",
            interactions: 2200,
        },
        {
            device: "Coimbatore",
            interactions: 1950,
        },
        ];
        const deviceStatusData = [
            { name: "Online", value: 21 },
            { name: "Offline", value: 4 },
        ];
    return (
    <div className="dashboard">
      <h1>Analytics Dashboard</h1>
      <p>Campaign and Device Performance Overview</p>

      <div className="cards">
        <div className="card" style={{ background: "#2563eb" }}>
            <h3>Total Devices</h3>
            <p>25</p>
        </div>

        <div className="card" style={{ background: "#16a34a" }}>
            <h3>Active Devices</h3>
            <p>21</p>
        </div>

        <div className="card" style={{ background: "#f97316" }}>
            <h3>Interactions</h3>
            <p>12,450</p>
        </div>

        <div className="card" style={{ background: "#9333ea" }}>
            <h3>Campaign Performance</h3>
            <p>82%</p>
        </div>
      </div>
        <h2>Device Interaction Analytics</h2>

        <div
        style={{
            width: "100%",
            height: 300,
            marginBottom: "30px",
        }}
        >
        <ResponsiveContainer>
            <BarChart data={interactionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="device" />
            <YAxis />
            <Tooltip />
            <Bar
                dataKey="interactions"
                fill="#2563eb"
            />
            </BarChart>
        </ResponsiveContainer>
        </div>
        <h2>Device Status Distribution</h2>

        <div
        style={{
            width: "100%",
            height: 300,
            marginBottom: "30px",
        }}
        >
        <ResponsiveContainer>
            <PieChart>
            <Pie
                data={deviceStatusData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
            >
                <Cell fill="#22c55e" />
                <Cell fill="#ef4444" />
            </Pie>
            <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        </div>
      <h2>Performance Summary</h2>

      <table>
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Views</th>
            <th>Interactions</th>
            <th>Performance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Summer Sale</td>
            <td>5000</td>
            <td>1400</td>
            <td>Excellent</td>
          </tr>

          <tr>
            <td>New Arrivals</td>
            <td>3500</td>
            <td>900</td>
            <td>Good</td>
          </tr>

          <tr>
            <td>Festival Offer</td>
            <td>4200</td>
            <td>1100</td>
            <td>Excellent</td>
          </tr>
        </tbody>
      </table>

      <br />
        <h2>Bonus Features</h2>

        <ul>
            <li>
                <strong>Remote Content Management:</strong> 
                Push advertisements and promotional content to all HoloInteract devices remotely.
            </li>

            <li>
                <strong>Device Health Monitoring:</strong> 
                Track CPU usage, storage, temperature, and device uptime to prevent failures.
            </li>

            <li>
                <strong>AI Visitor Insights:</strong> 
                Analyze customer interactions, peak hours, and engagement trends using AI.
            </li>
        </ul>
      <button
        className="analytics-btn"
        onClick={() => setShowAnalytics(false)}
      >
        Back to Devices
      </button>
      <footer
        style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#666",
        }}
        >
        © 2026 HoloInteract Device Management Dashboard
        <br />
        Developed by Deepan Chakravarthy
        </footer>
    </div>
  );
}

export default AnalyticsDashboard;