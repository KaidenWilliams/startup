// const {MongoClient} = require('mongodb');
// require('dotenv').config();

// const userName = process.env.MONGOUSER;
// const password = process.env.MONGOPASSWORD;
// const hostname = process.env.MONGOHOSTNAME;

// if (!userName) {
//     throw Error('Database not configured. Set environment variables');
//   }
  
//   const url = `mongodb+srv://${userName}:${password}@${hostname}`;
  
//   const client = new MongoClient(url);
//   const spotCollection = client.db('Mapz').collection('spot');

//   getLocation