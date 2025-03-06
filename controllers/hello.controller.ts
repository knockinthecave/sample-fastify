import { FastifyReply, FastifyRequest } from "fastify";
import { HelloQuery } from "../schemas/hello.schema";

export const helloHandler = async(
    request: FastifyRequest<{ Querystring: HelloQuery }>,
    reply: FastifyReply
) => {
    return { message: `Hello, ${request.query.name}` };
};