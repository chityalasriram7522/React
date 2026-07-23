import { useSearchParams } from "react-router-dom";

function Products() {

  const [searchParams,setSearchParams] = useSearchParams();

  const category =
    searchParams.get("category");
    

{/* //mutiple query parameters */}

const brand =
searchParams.get("brand");

const page =
searchParams.get("page");
  return (
    <>
      <h1>Products</h1>

      <h2>
        Category: {category}
      </h2>

{/* //mutiple query parameters */}
 <h1>Brands</h1>
       <h2>
        Brand :
        {brand}
      </h2>

 <h1>Pages</h1>
      <h2>
        Page :
        {page}
      </h2>


{/* //updating the query parameters */}
       <button
        onClick={() =>
          setSearchParams({
            category: "mobile"
          })
        }
      >
        Mobile
      </button>

      <button
        onClick={() =>
          setSearchParams({
            category: "tv"
          })
        }
      >
        TV
      </button>

{/* //mutiple values */}
      <button
        onClick={() =>
       setSearchParams({
 category: "laptop",
 brand: "Dell",
 page: 1
})}
      >
      MUTPLE VALUE CHNAGE
      </button>
      
    </>
  );
}

export default Products;