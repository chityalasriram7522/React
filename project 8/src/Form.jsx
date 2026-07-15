import { useForm } from "react-hook-form";
 

function submitform(data){
    console.log(data);
}

console.log("render");

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
     return(
        <>
        <form onSubmit={handleSubmit(submitform)}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" {...register("name",{ required:"name is required" })} />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input  id="age" {...register("age",{ required:"age is required" })} />
                {errors.age && <span>{errors.age.message}</span>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" {...register("email",{ required:"email is required" })} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" {...register("password",{ required:"password is required" })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>

        </>
     )
}
export default Form;
