import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
 

const formschema=z.object({
    name: z.string().min(3, "name should be more than 3 characters").max(20, "name should not exceed 20 characters"),
    email:z.string().email("invalid email address"),
    age: z.coerce.number().min(10, "age should be a positive number").max(80, "age should not exceed 100"),
    password: z.string().min(6, "password should be at least 6 characters").max(20, "password should not exceed 20 characters"),
    confirmPassword: z.string().min(6, "confirm password should be at least 6 characters").max(20, "confirm password should not exceed 20 characters")
}).refine((data)=> data.password===data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

function submitform(data){
    console.log(data);
}

console.log("render");

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver:zodResolver(formschema)});
     return(
        <>
        <form onSubmit={handleSubmit(submitform)}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" {...register("name",{ required:"name is required" })} />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" {...register("email",{ required:"email is required" })} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input  id="age" {...register("age",{ required:"age is required" })} />
                {errors.age && <span>{errors.age.message}</span>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" {...register("password",{ required:"password is required" })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
             <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" {...register("confirmPassword",{ required:"confirm password is required" })} />
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>

        </>
     )
}
export default Form;
