
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();

  return(
    <>
       <h1>about Page</h1>

      <button
        onClick={() => navigate("/login")}
      >
        Go To Login
      </button>
      <button
  onClick={() => navigate(-1)}
>
  Back
</button>
      </>
  )
  
}

export default About;