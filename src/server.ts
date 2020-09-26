import express from 'express';
import compression from "compression";
import cors from "cors";
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
const app_express = express();
const PORT = 8000;
const typeDefs = ` type Query {
    hola: String! 
    holaNombre(nombre: String!): String!
} `
const resolvers : IResolvers = {
    Query : {
        hola(): string {
            return '¿ Hola como estas ?';
        },
        holaNombre(__:void, { nombre }): string {
            return `¿ Hola como estas ${nombre} ?`;
        }        
    }
}
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app_express.use('*', cors());
app_express.use(compression());

app_express.use('/', graphqlHTTP({
    schema,
    graphiql: true
}));


app_express.listen({ port: PORT }, () => {
    console.log("Server on port 8000 -> url http://localhost:8000/graphql");
});