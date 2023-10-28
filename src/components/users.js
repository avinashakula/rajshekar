import React from 'react'

export const Users = (props) => {
    // console.log("Users Component Rendered");
    const {users} = props;
    return (
        <div style={{textAlign:'center'}}>
            <p>First Name: {users.firstName}</p>
            <p>Last Name: {users.lastName}</p>
            <p>Contact: {users.contact}</p>            
        </div>
    )
}
