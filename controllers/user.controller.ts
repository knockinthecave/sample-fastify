import { FastifyReply, FastifyRequest } from "fastify";
import { createUser, getUsers } from "../services/user.service";

export const createUserHandler = async( request: FastifyRequest, reply: FastifyReply ) => {
    const user = await createUser(request.body);
    return reply.status(201).send(user);
};

export const getUsersHandler = async( request: FastifyRequest, reply: FastifyReply ) => {
    const users = await getUsers();
    return reply.send(users);
};