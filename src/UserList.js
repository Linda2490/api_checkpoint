import axios from 'axios'

import React, { useEffect, useState } from "react";
import UserCard from './components/userCard/UserCard';

function UserList() {
    const [ listOfUSer, setListOfUSer] = useState ([]) 
     useEffect(() => {
         axios.get ('https://jsonplaceholder.typicode.com/users')
         .then((res) => setListOfUSer (res.data))
         .catch((err) => console.log(err));
         }
         , [])
    return (
        <div>
           { listOfUSer.map((user, i) => (
              <UserCard key={i} user={user} />
            ))}
        </div>
    )
}

export default UserList
