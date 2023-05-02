import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_VERCEL_URL?.includes(
  "localhost"
)
  ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export default axios;
