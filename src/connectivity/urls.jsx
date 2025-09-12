const BACKEND_LOCAL = 'http://127.0.0.1:5000';
const BACKEND_PRODUCTION = 'https://kl-research-expo-backend.onrender.com';

const frontendURL = window.location.origin;

const BACKEND =
  (frontendURL === 'http://localhost:5173' || frontendURL === 'http://127.0.0.1') ? BACKEND_LOCAL :
  frontendURL === 'https://ird-researchexpo.vercel.app' ? BACKEND_PRODUCTION :
  BACKEND_LOCAL;

class API {
  static BACKEND = BACKEND;

  static get SERVER() {
    return {
      STATUS: `${this.BACKEND}/server_status`
    }
  };

  static get PUBLIC() {
    return {
      STATUS: `${this.BACKEND}/register`
    }
  };

  static get ADMIN() {
    // API.AUTHENTICATION.BASE  := http://.../auth
    // API.AUTHENTICATION.LOGIN := http://.../auth/login
    const base = `${this.BACKEND}/admin`;
    return {
      BASE: base,
      LOGIN: `${base}/login`
    };
  }

}


export { API };