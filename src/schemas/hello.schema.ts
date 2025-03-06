import { Type, Static } from "@sinclair/typebox";

export const HelloSchema = {
    querystring: Type.Object({
        name: Type.String()
    }),
    response: {
        200: Type.Object({
            message: Type.String()
        })
    }
};

export type HelloQuery = Static<typeof HelloSchema.querystring>;