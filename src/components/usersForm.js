import React from 'react'

export const UsersForm = (props) => {
    const {onSubmit} = props;
    const [users, setUsers] = React.useState(
        {firstName:"", lastName:"", contact:""}
    )
    const changeHandler = (e) => {
        setUsers((users)=>{
            return {...users, [e.target.name]:e.target.value}
        })
    }
    const onFormSubmit = () => {
        onSubmit(users);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>User Form</h2>
            {/* <input onChange={changeHandler} name={"firstName"} type="text" placeholder={"First Name"} value={users.firstName} />
            <br /><input onChange={changeHandler} name={"lastName"} type="text" placeholder={"Last Name"} value={users.lastName} />
            <br /><input onChange={changeHandler} name={"contact"} type="text" placeholder={"Contact"} value={users.contact} />
            <br /><button>Submit</button> */}

            <input onChange={changeHandler} name={"firstName"} type="text" placeholder={"First Name"} value={users.firstName} />
            <br /><input onChange={changeHandler} name={"lastName"} type="text" placeholder={"Last Name"} value={users.lastName} />
            <br /><input onChange={changeHandler} name={"contact"} type="text" placeholder={"Contact"} value={users.contact} />
            <br /><button onClick={onFormSubmit}>Submit</button>
        </div>
    )
}
