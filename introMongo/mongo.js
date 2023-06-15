import mongodb from 'mongodb';
import dotenv from 'dotenv';

const { MongoClient, ServerApiVersion } = mongodb;

dotenv.config();
const { MONGO_USER, MONGO_PASSWORD, MONGO_HOSTNAME } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const getDB = async () => {
  try{
    await client.connect();
    return client.db('sample_mflix');;
  } catch(error) {
    console.log( "Coudn't connect to the db", { cause: error });
  }
}

export const getAll = async (collectionName, query) => {
  try {
    const database = await getDB();
    return await database.collection(collectionName).find(query).limit(5).toArray();
  }catch( error ) {
    console.log( `Coudn't get all ${collectionName} whith query ${query}`, { cause: error });
  } finally {
    await client.close();
  }
}

/* async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir); */