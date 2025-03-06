import { FastifyInstance } from "fastify";
import { helloHandler } from "../controllers/hello.controller";
import { HelloSchema } from "../schemas/hello.schema";

export default async function helloRoutes(fastify: FastifyInstance) {
    fastify.get("/hello", { schema: HelloSchema }, helloHandler);
}
