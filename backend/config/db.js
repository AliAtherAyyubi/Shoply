

// getting-started.js
const mongoose = require('mongoose');

let ConnectToDB=async ()=>{
    
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

