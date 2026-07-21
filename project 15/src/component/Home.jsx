import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>

      {/* <button
        onClick={() => navigate("/about")}
      >
        Go To About
      </button> */}
            <button
  onClick={() => navigate(1)}
>
  Back
</button>
    </>
  );
}

export default Home;