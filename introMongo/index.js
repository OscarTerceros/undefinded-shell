import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.get( '/', ( req, res ) => {
    res.send( 'API is running!' );
});

const post = [{
    id: 1,
    title: 'Post 1',
    body: 'This is post 1',
    userId: 1,
    tags: ['tag1', 'tag2'],
    reactions: 2
}, {
    id: 2,
    title: 'Post 2',
    body: 'This is post 2',
    userId: 2,
    tags: ['tag1', 'tag2'],
    reactions: 2
}];

app.get( '/posts', ( req, res ) => {
    res.send( post );
});

app.post( '/posts', ( req, res ) => {
    res.send( 'Products' );
});

app.listen( PORT, console.log( `🌎 Server running on port http://localhost:${PORT}` ) );