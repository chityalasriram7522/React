import { useRef } from "react";

function Login() {
  const emailRef = useRef();
  const passRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Email:", emailRef.current.value);
    console.log("Password:", passRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} />
      <input type="password" ref={passRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;