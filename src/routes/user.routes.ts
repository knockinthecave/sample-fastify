import { FastifyInstance } from "fastify";
import { createUserHandler, getUsersHandler } from "../controllers/user.controller";

export default async function userRoutes(fastify: FastifyInstance) {
    fastify.post("/users", createUserHandler);
    fastify.get("/users", getUsersHandler);
}
