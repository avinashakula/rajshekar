import React from 'react'

export const WelcomeNote = React.memo((props) => {
    console.log("Welcome Note Component Rendered");
    const {updateUsername, welcomeText} = props;
    const [user, setUser] = React.useState("");
    const onChangeHandler = (e) => {
        setUser(e.target.value);
    }   
    return (
        <div style={{textAlign:'center'}}>
            <h2>Welcome {welcomeText}</h2>
            <input type='text' placeholder={"Update Welcome User name"} onChange={onChangeHandler} value={user} />
            <button onClick={()=>{updateUsername(user)}}>Update</button>
        </div>
    )
})