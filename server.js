import express from "express";
// third party components
import {graphqlHTTP} from "express-graphql";
import myGraphQLSchema from "./schema.js";

const app = express();

app.use('/graphql', graphqlHTTP({
  schema : myGraphQLSchema,
  graphiql : true
}));

const PORT = 4000
app.listen(PORT, ()=>{ 
  console.log(`Server ${PORT} üzerinde çalışmaya başladı`);
});

