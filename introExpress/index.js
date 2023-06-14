import express from 'express';

const app = express();

app.get( "/", ( req, res) => {
    res.json( { message: "Hello World!" } );
});

app.get( "/hello/:name", ( req, res) => {
    res.json( { message: `Hello ${ req.params.name }!` } );
});

app.get( "/add/:num1/:num2", ( req, res) => {
    res.send( { message: `the sum of ${ req.params.num1 } and ${ req.params.num2 } is ${ parseInt(req.params.num1) + parseInt(req.params.num2) }` });
});

//middleware
app.use( express.json() );

function fullnameMiddleware( req, res, next ) {
    const { firstName, lastName } = req.body;
    if ( !firstName || !lastName ) {
        return res.status( 400 ).json( { message: "Missing first or last name" } );
    }

    req.fullName = `${ firstName } ${ lastName }`;  
    next();
}

app.get( "/fullName", fullnameMiddleware, ( req, res ) => {
    const { firstName, lastName } = req.body;
    
    console.log(req.fullName);
    res.send( `Hello ${ firstName } ${ lastName }!` );
});

app.listen( 3001, () => console.log( 'Server running on port 3001' ));