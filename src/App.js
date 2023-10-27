import React, {useState, useEffect} from 'react';
import './App.css';
import { WelcomeNote } from './components/welcomeNote';
import {Users} from './components/users'
import {UsersForm} from './components/usersForm'
import {useSelector,useDispatch} from 'react-redux'

import {setName} from './store/welcomeSlice';
import {setUsersList, activeUsersDetailsLoading, InactiveUsersDetailsLoading} from './store/usersSlice'
function App() {
  const dispatch = useDispatch();
  const {name} = useSelector((state)=>(state.welcome));
  const {usersDetails} = useSelector((state)=>(state.users))

  const handleUserForm = (data) => {
    dispatch(activeUsersDetailsLoading());
    setTimeout(()=>{
      dispatch(setUsersList(data));
      dispatch(InactiveUsersDetailsLoading());
    }, 2000)
  
    
  }

  const updateUsername = (e) =>{
    dispatch(setName(e));
  }
  return (
    <div className="App">
      <WelcomeNote welcomeText={name} updateUsername={updateUsername} />
      { usersDetails.loading ? <p style={{textAlign:"center"}}>Loading...</p> : <Users users={usersDetails.data} />}
      <UsersForm onSubmit={handleUserForm} />
    </div>
  );
}

export default App;
