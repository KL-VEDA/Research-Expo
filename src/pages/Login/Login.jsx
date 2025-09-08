import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN } from "../../connectivity/routes.jsx";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // for redirecting after login

    // Check if a valid token already exists
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // Verify token with backend
            ADMIN.checkProtected().then(res => {
                if (res.success) {
                    // Token valid, redirect to admin dashboard
                    navigate("/dashboard");
                } else {
                    // Token invalid/expired, remove it
                    localStorage.removeItem("token");
                }
            });
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await ADMIN.login(username, password);

        if (result.success) {
            setMessage("✅ Login successful!");
            // Store JWT token in localStorage
            localStorage.setItem("token", result.token);
            // Redirect to admin dashboard
            navigate("/dashboard");
        } else {
            setMessage("❌ " + result.message);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label><br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;
