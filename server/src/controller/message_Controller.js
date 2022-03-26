import messageColl from "../model/collection3.js";
import conversationColl from "../model/collection2.js";

export const newMessage = async (req, res) => {
    try {
        const document = new messageColl(req.body);
        await document.save();
        await conversationColl.findByIdAndUpdate(req.body.conversationId , {"message" : req.body.text});

        res.status(200).json({ "message": "Message saved successfully" })
    }
    catch (err) {
        res.status(500).json({ "error": err })
    }

}

export const getMessages = async (req, res) => {
    try {
        const id = req.params.id;

        const array = await messageColl.find({ "conversationId": id });
        res.status(200).json(array);
        
    }
    catch (err) {
        res.status(500).json({ "error": err });
    }
}


