// import { useEffect, useState } from "react";

// function Studentlist() {

//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   async function fetchStudents() {

//     try {

//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();

//       setStudents(data);

//     } catch (error) {

//       setError(error.message);

//     } finally {

//       setLoading(false);

//     }
//   }

//   if (loading) {
//     return <h2>Loading Students...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <>
//       <h1>Students List</h1>

//       {students.map((student) => (
//         <div key={student.id}>
//           <h3>{student.name}</h3>
//           <p>{student.email}</p>
//           <hr />
//         </div>
//       ))}
//     </>
//   );
// }

// export default Studentlist;

// import { useEffect, useState } from "react";

// function Studentlist() {

//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(""); //for error handling 
//   const [loading, setLoading] =
//   useState(true); //loading state

//   useEffect(() => {

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.log(error));
//       //  setLoading(true);
//   }, []);

// // error handling
// // if (error) {
// //   return <h1>{error}</h1>;
// // }

// //loading state
// // if (loading) {
// //   return <h1>Loading...</h1>;
// // }
// // return <h1>Data Loaded</h1>;

//   return (
//     <>
//       <h1>Users List</h1>

//       {
//         users.map((user) => (
//           <h3 key={user.id}>
//             {user.name}
//           </h3>
//         ))
//       }
//     </>
//   );
// }

// export default Studentlist;


// Modern Async/Await Method

// import { useEffect, useState } from "react";

// function Studentlist() {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {

//     getUsers();

//   }, []);

//   async function getUsers() {

//     try {

//       const response =
//         await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//       const data =
//         await response.json();

//       setUsers(data);

//     } catch (error) {

//       console.log(error);

//     }
//   }
 
//   return (
//     <>
    
//       {
//         users.map((user) => (
//           <h2 key={user.id}>
//             {user.name}
//           </h2>
//         ))
//       }

      
//     </>
//   );
// }

// export default Studentlist;


//POST API CALLING 

import { useState } from "react";

function Studentlist() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   const studentData = {
  //     name,
  //     email
  //   };

  //   fetch(
  //     "https://jsonplaceholder.typicode.com/users",
  //     {
  //       method: "POST",

  //       headers: {
  //         "Content-Type":
  //           "application/json"
  //       },

  //       body: JSON.stringify(
  //         studentData
  //       )
  //     }
  //   )
  //     .then((response) =>
  //       response.json()
  //     )
  //     .then((data) => {
  //       console.log(data);
  //       alert("Student Added");
  //     })
  //     .catch((error) =>
  //       console.log(error)
  //     );
  // };

  // Modern Async/Await Version
  const handleSubmit = async (e) => {
     e.preventDefault();
  const studentData = {
    name,
    email
  };

  try {

    const response =
      await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(
            studentData
          )
        }
      );

    const data =
      await response.json();

    console.log(data);
    alert("Student Added");

  } catch (error) {

    console.log(error);

  }
};

  return (
    <>
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>
    </>
  );
}

export default Studentlist;
