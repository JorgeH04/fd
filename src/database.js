const mongoose = require('mongoose');
const dotenv = require('dotenv'); dotenv.config();


  mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true

      
  }) 
      .then(db => console.log(`DB is connected`))
      .catch(err => console.error(err));

     
