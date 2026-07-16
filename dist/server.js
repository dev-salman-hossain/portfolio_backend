import app from "./app.js";
import env from "./config/env.js";
let server;
async function bootstrap() {
    try {
        server = app.listen(env.port, () => {
            console.log(`server is running on port ${env.port}`);
        });
    }
    catch (error) {
        console.error('Failed to start server :', error);
        process.exit(1);
    }
}
(async () => {
    await bootstrap();
})();
//# sourceMappingURL=server.js.map