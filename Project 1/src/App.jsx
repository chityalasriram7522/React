
//default App component
// in react we can create a component using function or class
// in react we can have only one default export component per file
export default function App() {
  return(
    <h1>hello welcome to the react app</h1>
  );
}

//named export component
export function Run() {
  return(
    <h1>
      this is the first named export component
    </h1>
  );
}

export function Run2() {
  return(
    <h1>
      this is the second named export component
    </h1>
  );
}


// suppose i get npm missing script :"dev" then go to package.json and add "dev": "vite" in scripts section and then run npm run dev
//if you have dev in script your package.json then your in the wrong directory so go to the correct directory and then run npm run dev 
// to go that directory use cd "that folder name " 
// soppose my package.json inside the project 1 but i am curent in that react but project 1 is  inside the react so i will go to that directory using cd "project 1" and then run npm run dev