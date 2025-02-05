

// getting-started.js
const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

let ConnectToDB=async ()=>{
    // if (mongoose.connection.readyState >= 1) {
    //     console.log('Already connected to MongoDB');
    //     return;
    // }
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');
    // return handler(req,res);
        
    } catch (error) {
        console.log('Error while connecting to DB');
    }
    // return handler(req,res);

}

module.exports= ConnectToDB;

