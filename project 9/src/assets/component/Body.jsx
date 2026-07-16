
import Counter from "./Counter";
function Body({count, setCount}){
 
    return(
        <>
        <h1>this is blinkit body</h1>
        <Counter count={count} setCount={setCount}/>
        </>
    )
}
export default Body;