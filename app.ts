import Fastify from "fastify";
import helloRoutes from "./src/routes/hello.routes";
import userRoutes from "./src/routes/user.routes";

const fastify = Fastify({ logger: true });

// 플러그인 등록
// fastify.register(dbPlugin);

// 라우트 등록
fastify.register(helloRoutes);
fastify.register(userRoutes);

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: "0.0.0.0" });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();