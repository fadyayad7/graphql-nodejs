import express from 'express'
import resolvers from './resolvers.js';
import schema from './schema.js';
import {graphqlHTTP} from 'express-graphql'

const app = express();

app.get('/', (req, res) => {
    res.send('Hey Dad! 👋')
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}))

app.listen(8081, () => console.log('server running 😇'));