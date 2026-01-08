let IS_PROD = true;
const server = IS_PROD
  ? "https://webrtc-video-call-application.onrender.com"
  : "http://localhost:8000";


export default server;