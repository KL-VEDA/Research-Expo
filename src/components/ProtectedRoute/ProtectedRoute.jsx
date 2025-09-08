import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ADMIN } from "../../connectivity/routes.jsx";

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null); // null = loading

    useEffect(() => {
        const checkToken = async () => {
            const result = await ADMIN.checkProtected();
            if (result.success) {
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
                ADMIN.logout(); // clear invalid token
            }
        };

        checkToken();
    }, []);

    if (isAuthorized === null) {
        // Loading state while verifying token
        return <div>Checking authentication...</div>;
    }

    if (!isAuthorized) {
        // Redirect to login if not authorized
        return <Navigate to="/login" replace />;
    }

    // Render the protected component if authorized
    return children;
}

export default ProtectedRoute;
