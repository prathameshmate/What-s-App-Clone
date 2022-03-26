import { Server } from "socket.io";

const PORT = 9000;

const io = new Server(PORT, {
    cors: {
        origin: "http://localhost:3000"
    }
})

var users = [];
const addUser = (userId, socketId) => {
    !users.some((user) => { return (user.userId === userId) }) && users.push({ userId, socketId });
}

const getUser = (receiverId) => {
    return users.find((user) => { return (user.userId === receiverId) })
}

const removeUser = (socketId)=>{
    users = users.filter((user)=>{ return(user.socketId !== socketId)})
}

io.on("connection", (socket) => {
    console.log("user connected");

    //connect
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        console.log("userId is : " , userId);
        console.log("users are : " , users);

        io.emit("getUsers", users)
    })

    //send Message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        
        console.log("senderId : ", senderId);
        console.log("receiverId : ", receiverId);
        console.log("text : ", text);

        const user = getUser(receiverId);
        console.log("user is : ", user);

        io.to(user.socketId).emit("getMessage", {
            senderId: senderId,
            text: text
        })
    })

    //disconnect
    socket.on("disconnect" , ()=>{
        console.log("user disconnected");
        removeUser(socket.id);
        io.emit("getUsers" ,  users)
    })
})    