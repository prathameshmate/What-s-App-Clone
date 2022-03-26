import conversationColl from "../model/collection2.js"

const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const exit = await conversationColl.findOne({ "members":{ $all: [receiverId, senderId] } })

        // console.log("conversation exit or not : " + exit);
        if (exit) {
            res.status(200).json({ "message": "conversation already exit" })
            return;
        }

        const document = new conversationColl({
            "members": [senderId, receiverId]
        })
        // console.log(document);
        await document.save();
        // console.log(result);
        res.status(200).json({ "message": "new conversation added successfully" });


    } catch (err) {
        res.status(500).json({ "error": err })
    }
}

const getConversation = async (req , res ) => {
    try{
        const{sender , receiver}  = req.body;
        const document =  await conversationColl.findOne({"members":{ $all: [ sender ,receiver] }})
        res.status(200).json(document);
    }
    catch(err){
        res.status(500).json({"error" : err});
    }
}

export { newConversation, getConversation };