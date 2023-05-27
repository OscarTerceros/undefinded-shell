import express from 'express';

const app = express();

app.get( "/", ( req, res) => {
    /* res.send( 'Hello express' ); */
    res.json( {"message": "Hello express"} );
});

app.listen( 3001, () => console.log( 'Server running on port 3001' ));