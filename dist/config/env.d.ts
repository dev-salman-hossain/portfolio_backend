declare const env: {
    port: string | number;
    database_url: string | undefined;
    redis_url: string;
    jwt_access_secret: string;
    jwt_refresh_secret: string;
    jwt_temp_secret: string;
    smtp_host: string;
    smtp_port: number;
    smtp_user: string | undefined;
    smtp_pass: string | undefined;
    node_env: string;
};
export default env;
//# sourceMappingURL=env.d.ts.map