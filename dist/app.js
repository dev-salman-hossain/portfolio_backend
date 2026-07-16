import express from "express";
import cors from 'cors';
import rateLimit from "express-rate-limit";
const createApp = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(rateLimit);
};
export default createApp;
//# sourceMappingURL=app.js.map