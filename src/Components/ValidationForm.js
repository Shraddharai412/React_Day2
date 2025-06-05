import react, { useState } from 'react';
function ValidationForm()
{
    const[form,setForm]=useState({name:'',email:'',password:''});
    const[errors,setErrors]=useState({});
    const validate =()=>{
        const newErrors ={};
        if(!form.name.trim())
        {
            newErrors.name="Name is required";
        }
        if(!form.email.trim()){
            newErrors.email="Email is required";
        }
        else if(!/\S+@\S+\.\S+/.test(form.email)){
            newErrors.email="Email is invalid";
        }
        if(!form.password.trim()){
            newErrors.password="Password is required";
        }
        else if(form.password.length<6){
            newErrors.password="Password must be at least 6 characters long";
        }
        return newErrors;
    };
    const handleChange=(e) =>{
         e.preventDefault();
         const validatedErrors = validate();
         setErrors(validatedErrors);

         if(Object.keys(validatedErrors).length === 0){
            alert(`Form submitted successfully! \n ${form.name}\n Email: ${form.email}`);
            

         }
    }
    return(
        <form onSubmit={{handleChange}} style={{fontSize: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
            <div>
                <label>Name</label>
                <input 
                type ='text' value={form.name} name="name" onChange={handleChange}/>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email</label>
                <input 
                type='email' value={form.email} name="email" onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
                </div>
            <div>
                <label>Password</label>
                <input 
                type='password' value={form.password} name="password" onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
        </form>
    )
}
export default ValidationForm;