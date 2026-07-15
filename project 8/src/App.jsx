import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [name, setName] = useState('');
   const [age, setAge]= useState('');
   const [password, setPassword]= useState('');

   function handleSubmit(e){
     e.preventDefault();
     // Handle form submission logic here
     console.log('Name:', name);
      console.log('Age:', age);
     console.log('Password:', password); 
   }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={name}  onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div>
        <input type="number" value={age}  onChange={(e)=> setAge(e.target.value)}/>
      </div>
      <div>
        <input type="password" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
      </div>
      <button>Submit</button>
    </form>
    </>
  )

}

export default App;
