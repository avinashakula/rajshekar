export const InitialState = {
    usersDetails:{
        data:{
            firstName:"",
            lastName:"",
            contact:""
        },
        loading:false
    },
    usersPermissions:{
       data:{
            delete:false,
            create:false,
            update:true
       },
       loading:false
    },
    theme:{
        header:false,
        content:true,
        popups:true
    }
}