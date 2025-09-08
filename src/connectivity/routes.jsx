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

// Export the SERVER class
export { SERVER };
