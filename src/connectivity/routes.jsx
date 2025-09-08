import { API } from "./urls";  // Import the API from the urls file

class SERVER {
    // Define the method Backend_CheckServerStatus inside the class
    static checkServerStatus() {
        return fetch(API.SERVER.STATUS)  // Make a GET request to the server status endpoint
            .then(response => {
                if (!response.ok) {
                    // If the response is not successful, throw an error
                    throw new Error('Server not reachable');
                }
                return response.json();  // Parse and return the JSON response
            })
            .then(data => {
                // Return the processed JSON data with the status value
                return data;  // This will be something like { status: true }
            })
            .catch(error => {
                // Return a JSON with an error status if something goes wrong
                console.error('Error checking server status:', error);
                return { status: false, error: error.message };  // Return error JSON
            });
    }
}



class ADMIN {
    // Login function: stores JWT token on success
    static async login(username, password) {
        try {
            const response = await fetch(API.ADMIN.LOGIN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success && data.token) {
                // Store JWT token in localStorage
                localStorage.setItem("token", data.token);
            }

            return data; // { success: true/false, message: "...", token? }
        } catch (error) {
            console.error("Error logging in:", error);
            return { success: false, message: error.message };
        }
    }

    // Check if JWT token is valid by calling protected backend route
    static async checkProtected() {
        const token = localStorage.getItem("token");
        if (!token) return { success: false, message: "No token found" };

        try {
            const response = await fetch(`${API.ADMIN.BASE}/protected`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await response.json();
            return data; // { success: true/false, message: "..." }
        } catch (error) {
            console.error("Error checking token:", error);
            return { success: false, message: error.message };
        }
    }

    // Optional: log out admin
    static logout() {
        localStorage.removeItem("token");
    }

    // Optional: helper to get current token
    static getToken() {
        return localStorage.getItem("token");
    }
}



// Export the SERVER class

export { SERVER, ADMIN };
