import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (obj) => {
    try {
        // axios used to called the function/method of backend from frontend
        // it called post function/method having /add in backend
        await axios.post(`${URL}/add`, obj);
    }
    catch (err) {
        console.log("error while calling addUser api : ", err)
    }
}
export const getUsers = async () => {
    try {
        // axios used to called the function/method of backend from frontend
        // it called get function/method having /users in backend
        const users = await axios.get(`${URL}/users`);
        return users.data;
    }
    catch (err) {
        console.log("error while calling getUsers api : ", err)
    }
}

export const setConversation = async (obj) => {
    try {
        // axios used to called the function/method of backend from frontend
        // it called post method which have /conversation/add in backend
        await axios.post(`${URL}/conversation/add`, obj);
    }
    catch (err) {
        console.log("error while calling setConversation api : ", err)
    }
}

export const getConversation = async (obj) => {
    try {
        //axios used to called the function/method of backend from frontend
        //it called post method which have /conversation/get in backend
        const result = await axios.post(`${URL}/conversation/get`, obj);
        return (result.data);

    } catch (err) {
        console.log("error while calling getConversation api :", err);
    }
}

export const newMessage = async (message) => {
    try {
        // axios used to called the function/method of backend from frontend
        // it called post method which have /conversation/add in backend
        await axios.post(`${URL}/message/add`, message);
    }
    catch (err) {
        console.log("error while calling newMessage api : ", err);
    }
}

export const getMessages = async (id) => {
    try {
        // axios used to called the function/method of backend from frontend
        // it called get method which have /message/get/${id} in backend
        const result = await axios.get(`${URL}/message/get/${id}`);
        return (result.data);
    }
    catch (err) {
        console.log("error while calling getMessages api : ", err);
    }
}