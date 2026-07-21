import { useParams } from "react-router-dom";


function Login() {
  const { id } = useParams();

  return (
    <>
      <h1>Login Page</h1>
      <h2>ID: {id}</h2>
    </>
  );
}

export default Login;
