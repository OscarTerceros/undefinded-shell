import express from 'express';
import dotenv from 'dotenv';
import { getAll } from './mongo.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get( '/', ( req, res ) => {
    res.send( 'API is running!' );
});

let posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is post 1',
        userId: 1,
        tags: ['tag1', 'tag2'],
        reactions: 2
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is post 2',
        userId: 2,
        tags: ['tag1', 'tag2'],
        reactions: 2
    }];

app.get( '/posts', async ( req, res ) => {
    const posts = await getAll('theaters');
    res.send({ posts });
});

app.post( '/create-post', ( req, res ) => {
    const post = {
        id: posts.length + 1,
        title: "lorem ipsum",
        body: "lorem ipsum",
        userId: 1,
        tags: ['tag1', 'tag2'],
        reactions: 2
    };
    posts.push( post );
    res.json({ post });
});

app.listen( PORT, console.log( `🌎 Server running on port http://localhost:${PORT}` ) );