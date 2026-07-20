import { Link } from "react-router-dom";
function Navbar(){


    return(
        <>

        {/* //using anchor tag the browser reload the page when we navigate to another page so for that we need to use link tag instead of href we use to */}
         {/* <nav>
            <a href="/"><h1>Home</h1></a>
            <a href="/about"><h1>About</h1></a>
            <a href="/login"><h1>Login</h1></a>
         </nav> */}

         <nav>
            <Link to="/"><h1>HOME</h1></Link>
            <Link to="/about"><h1>ABOUT</h1></Link>
            <Link to="/login"><h1>LOGIN</h1></Link>
            
         </nav>
        </>
    )
}
export default Navbar;