import { useEffect, useState } from 'react'
import './App.css'
import { SignUpForm } from './auth/signUp';

function App() {

  let [state,setState]=useState("");

 return(
  <>
 
  <SignUpForm/>
  </>
 )
}

export default App
