import React, { use } from "react";
import { useState } from "react";
function Form()
{
    const[name,setName] = useState("");
    const[age,setAge]=useState(" ");
    const[email,setEmail]=useState("");
    const[submittedData,setSubmittedData]=useState(null);
   
    // const[isChecked,setIsChecked]=useState(false);
    const handleSubmit =(e) =>{
        e.preventDefault();
        setSubmittedData({
            name: name,
            age: age,
            email: email,
            
        });
        alert(`Name: ${name}, Age: ${age}, Email: ${email}`);
    }
    return (
       
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}>
                    
                        </input>
                        </div>
                <div>
                        <label>Age</label>
                        <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}></input>
                       </div>
                       <div>
                         <label>Email</label>
                        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                       </div>
                       
                       <div> <button type='submit'>submit</button>
                </div>
                
                {submittedData &&(
                    <div>
                        <p><strong>name</strong> {submittedData.name}</p>
                        <p><strong>age</strong>{submittedData.age}</p>
                        <p><strong>email</strong>{submittedData.email}</p>
                    </div>
                )}
            </form>
        
    )
}
export default Form;