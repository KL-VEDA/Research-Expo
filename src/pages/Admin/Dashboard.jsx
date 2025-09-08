import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN } from "../../connectivity/routes.jsx";

function Dashboard() {
    const [message, setMessage] = useState("Loading...");
    const navigate = useNavigate();

    // Fetch protected info from backend
    useEffect(() => {
        const fetchData = async () => {
            const result = await ADMIN.checkProtected();
            if (result.success) {
                setMessage(`Welcome, ${result.message.split(" ")[1]}!`); // Extract username from message
            } else {
                setMessage("Session expired or invalid token.");
                ADMIN.logout();
                navigate("/login");
            }
        };

        fetchData();
    }, [navigate]);

    // Logout handler
    const handleLogout = () => {
        ADMIN.logout();
        navigate("/login");
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2>Admin Dashboard</h2>
            <p>{message}</p>

            <button onClick={handleLogout} style={{ marginTop: "20px" }}>
                Logout
            </button>

            {/* Example: you can add admin panels, user stats, etc. here */}
            <div style={{ marginTop: "30px" }}>
                <h3>Admin Panel</h3>
                <p>Here you can manage the system, view stats, and perform admin tasks.</p>
            </div>
        </div>
    );
}

export default Dashboard;
