import mongoose from "mongoose"

const messageShema = new mongoose.Schema({
    "conversationId": {
        type: String,
        required: true
    },
    "sender": {
        type: String,
        required: true
    },
    "text": {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const messageColl = new mongoose.model("messageColl", messageShema)

export default messageColl;