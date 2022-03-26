import mongoose from "mongoose";

//schema
//defining schema =  define structure of document : -1)key's values datatype 2)key's values validation

const chatAppSchema = new mongoose.Schema({
    "googleId" : {
        type : String,
        required : true
    },
    "imageUrl" : {
        type : String,
        required : true
    },
    "email" : {
        type : String,
        required : true
    },
    "name" : {
        type : String,
        required : true
    },
    "givenName" : {
        type : String,
        required : true
    },
    "familyName" : {
        type : String,
        required : true
    }
})

const chatAppColl =  new mongoose.model("chatAppColl" , chatAppSchema);


export default chatAppColl;