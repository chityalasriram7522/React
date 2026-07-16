import { useContext } from "react";
import { CountContext } from "../../App";

function Display( ){
    const { count } = useContext(CountContext);
    return(
        <>
        <h1>this is blinkit display</h1>
        <h1>Count: {count}</h1>
        </>
    )
}
export default Display;