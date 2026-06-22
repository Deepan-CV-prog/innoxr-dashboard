import { useState } from "react";

function DeviceDashboard({ setShowAnalytics }) {
    const [search, setSearch] = useState("");

    const devices = [
    {
        name: "EA Mall Display",
        location: "Chennai",
        status: "Online",
        active: "Now",
    },
    {
        name: "Phoenix Mall Kiosk",
        location: "Chennai",
        status: "Online",
        active: "2 min ago",
    },
    {
        name: "Madurai Store",
        location: "Madurai",
        status: "Offline",
        active: "1 hr ago",
    },
    {
        name: "Coimbatore Branch",
        location: "Coimbatore",
        status: "Online",
        active: "5 min ago",
    },
    ];  
    return (
    <div className="dashboard">
      <h1>HoloInteract Device Dashboard</h1>
      <p>Monitor devices across all customer locations</p>

      <div className="cards">
        <div className="card">
          <h3>Total Devices</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Online Devices</h3>
          <p>21</p>
        </div>

        <div className="card">
          <h3>Offline Devices</h3>
          <p>4</p>
        </div>
      </div>

      <h2>Device List</h2>

      <input
        type="text"
        placeholder="Search devices..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

      <button
        className="analytics-btn"
        onClick={() => setShowAnalytics(true)}
      >
        View Analytics
      </button>

      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Location</th>
            <th>Status</th>
            <th>Last Active</th>
          </tr>
        </thead>

        <tbody>
            {devices
                .filter(
                (device) =>
                    device.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                    device.location
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((device, index) => (
                <tr key={index}>
                    <td>{device.name}</td>
                    <td>{device.location}</td>
                    <td>
                    {device.status === "Online"
                        ? "🟢 Online"
                        : "🔴 Offline"}
                    </td>
                    <td>{device.active}</td>
                </tr>
                ))}
            </tbody>
            </table>

            <footer
                style={{
                marginTop: "40px",
                textAlign: "center",
                color: "#666",
                }}
            >
                © 2026 HoloInteract Device Management Dashboard
                <br />
                Developed by Deepan Chakkravarthy
            </footer>

    </div>
  );
}

export default DeviceDashboard;