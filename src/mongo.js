"use strict";
const mongoose = require("mongoose");
// const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://rjatulis:Laivas-17@cluster0.3l9hz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  year: Number,
});

const Movie = mongoose.model("Movie", movieSchema, "movies");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri);
    console.log("Prisijungta prie MongoDB per Mongoose!");
    // Send a ping to confirm a successful connection
    const movies = await Movie.find({}).limit(5);
    movies.forEach((movie) => console.log(movie.title));
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Klaida prisijungiant prie MongoDB:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
