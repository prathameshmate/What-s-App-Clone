import mongoose from "mongoose";

//schema
//defining schema =  define structure of document : -1)key's values datatype 2)key's values validation

const conversationSchema = new mongoose.Schema(
    {
        "members": {
            type: Array
        },
        "message": {
            type : String,
        }
    },

    {
        timestamps: true
    }
)


const conversationColl = new mongoose.model("conversationColl", conversationSchema)

export default conversationColl;