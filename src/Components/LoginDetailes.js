import react, { useState } from "react";

function Log()
{
    const [formdata,setFormdata]=useState({
        username:'',
        password:''
    })
    const[isLoggedIn,setisLoggedInt]=useState(false);
    const[error,setError]=useState('');

    const handleChange=(e) => 
        {
            const{name,value}=e.target;
            setFormdata(prev => ({
                ...prev,
                [name]:value
            })
            )


    }
    const handleSubmit=(e) =>
    {
        e.preventDefault();
        if(formdata.username ==='Shraddha' && formdata.password ==="Shraddha@123")
        {
            setisLoggedInt(true);
            setError('');

        }
        else{
            setisLoggedInt(false);
            setError("Invalid username or password")
                }
    }

    const handleLogout = () => {
        setisLoggedInt(false);
        setFormdata ({
            username :'',
            password :''
        })
    }

    return(
        <div>
            <h1>Login Form</h1>
            {isLoggedIn ? (
                <div>
                    <h2>Welcome, {formdata.username}!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={formdata.username} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={formdata.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <button type="submit">Login</button>
                </form>
            )}
            
        </div>
    )

}
export default Log;