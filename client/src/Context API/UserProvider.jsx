import React, { createContext, useState } from 'react'; 

export const  UserContext = createContext(null);

const UserProvider = ({ children }) => {

    const[person, updatePerson] = useState({});
    // console.log("person is ::" ,  person);

    return (
        <>
            <UserContext.Provider value={{
                person : person,
                updatePerson : updatePerson
            }}>
                { children }
            </UserContext.Provider>
        </>
    )
}
export default UserProvider;