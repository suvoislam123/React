import { useEffect, useRef, useState } from 'react';
import './App.css';
function App() {
  const [user,setUser] = useState([])
  const emailRef = useRef('');
  const passwordRef = useRef('')

  const handleSubmit= (event)=>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = {email:email,password:password}
    fetch('http://localhost:5000/user/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'

      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>console.log('success',data))
  }

  
  return (
    <div className="App">
     <form action="" onSubmit={handleSubmit}>
       <input type="email"  name='email' placeholder='mail' ref={emailRef} /> <br />
       <input type="password" name='password' placeholder='pass' ref={passwordRef}/><br />
       <input type="submit" value="Submit" />
     </form>
    </div>
  );
}

export default App;
