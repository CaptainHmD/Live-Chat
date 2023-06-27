const mongoose = require('mongoose');

const {DB_URL}= process.env
console.log(DB_URL);
const connectDB =  async() =>{
    try { //* try to connect with DB

         await mongoose.connect(DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('db connected');
        
    } catch (error) {
        if(error){
            console.log(error);
        }else{
            console.log('db connected');
        }
        // console.log("error");
    }

}

module.exports = connectDB;