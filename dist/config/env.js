import dotenv from 'dotenv';
dotenv.config();
const env = {
    port: process.env.PORT || 5000,
    database_url: process.env.DATABASE_URL,
    redis_url: process.env.REDIS_URL || 'redis://localhost:6379',
    jwt_access_secret: process.env.JWT_ACCESS_SECRET || 'access_secret',
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET || 'refresh_secret',
    jwt_temp_secret: process.env.JWT_TEMP_SECRET || 'temp_secret',
    smtp_host: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtp_port: parseInt(process.env.SMTP_PORT || '587'),
    smtp_user: process.env.SMTP_USER,
    smtp_pass: process.env.SMTP_PASS,
    node_env: process.env.NODE_ENV || 'development',
};
export default env;
//# sourceMappingURL=env.js.map