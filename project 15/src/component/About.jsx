
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const location =useLocation();

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
    <button
  onClick={() => navigate(-1)}
>
  Move forward
</button>
<h1>{location.state.name}</h1>
      <h1>{location.state.age}</h1>

      </>
  )
  
}

export default About;