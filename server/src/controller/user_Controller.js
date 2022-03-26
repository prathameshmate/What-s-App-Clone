import chatAppColl from "../model/collection1.js"

export const addUser = async (req, res) => {
    try {

        const result = await chatAppColl.findOne({ "googleId": req.body.googleId});

        // console.log("user exit or not: " ,  result);

        if (result) {
            res.status(200).json({ "message": "User already exits" })
            return;
        }

        const document = new chatAppColl(req.body);
        await document.save();
        res.status(200).json({ "message": "User saved successfully" });
    }
    catch (err) {
        res.status(500).json({ "error": err })
    }
}

export const getUsers = async (req, res) => {
    try {
        const results = await chatAppColl.find();
        res.status(200).json(results);
    }
    catch (err) {
        res.status(500).json({ "error": err })
    }
}