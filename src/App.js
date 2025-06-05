import react,{useState} from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Log from "./Components/LoginDetailes";
import Ifelse from "./Components/ifelse";
import Switch from "./Components/switch";
import IfelseLadder from "./Components/ifelseladder";
import Form from "./Components/form"
import ValidationForm from "./Components/ValidationForm";
import Tablebasics from "./Components/Tablebasics";
import SortedTable from "./Components/SortedTable";
import FilterableTable from "./Components/fliters";

import ContactManager from "./Components/contactManager";
import RandomQuoteGenerator from "./Components/RandomQuoteGenerator";
import LuckGenerator from "./Components/LuckGenerator";
import TodoList from "./Components/TodoList";
import Navbar from "./Navbar";

function Home()
{
  
  return (
    <div style={{alignItems: 'center', textAlign: 'center', padding: '20px'}}>
      
      <h1>Shraddha Rai</h1>
      


    </div>
  );
}
 function About()
{
  return (
    <div style={{alignItems: 'center', textAlign: 'center', padding: '20px'}}>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
function Contact()
{
  const[name,setName] = useState("");
      const[age,setAge]=useState(" ");
      const[email,setEmail]=useState("");
      const[phone,setPhone]=useState("");
      const[submittedData,setSubmittedData]=useState(null);
      const handleSubmit =(e) =>{
        e.preventDefault();
        setSubmittedData({
            name: name,
            age: age,
            email: email,
            phone: phone
            
        });
        alert(`Name: ${name}, Age: ${age}, Email: ${email}`);
    }
 return (
     <div style={{padding:'20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' ,backgroundColor:'lightblue',borderRadius: '10px', boxShadow: '1 4px 8px rgba(0,0,0,0.1)',border: '1px solid purple'}}>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px',backgroundColor:'plum', padding: '20px', borderRadius: '5px',border: '1px solid purple'}}>
                <div>
                    <label>Name:         </label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px'}}>
                    
                        </input>
                        </div>
                <div>
                        <label>Age:                </label>
                        <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px'}}></input>
                       </div>
                       <div>
                         <label >Email:        </label>
                        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px'}}></input>
                       </div>
                       <div>
                          <label>Phone:          </label>
                          <input type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)} style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px'}}></input>
                       </div>
                       <div>
                        <button type='submit' style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px'}}>Submit</button>
                       </div>
                       {submittedData &&(
                    <div>
                        <p><strong>name</strong> {submittedData.name}</p>
                        <p><strong>age</strong>{submittedData.age}</p>
                        <p><strong>email</strong>{submittedData.email}</p>
                    </div>
                )}

      </form>
      <p>Feel free to contact us!</p>
    </div>
  );
}
function Profile()
{
  return (
    <div style={{alignItems: 'center', textAlign: 'center', padding: '20px'}}>
     <img src="https://zeldazon.com/wp-content/uploads/2024/07/f93c5190-5a9d-4dca-9573-b082b7f28f1a-1.jpg" alt="Profile" style={{width: '200px', height: '200px', borderRadius: '50%',alignItems:"center"}} />
     <h1>Name : Shraddha Rai</h1>
     <h3>Email : shraddharai412@gmail.com</h3>
     <h3>Contact Num : 8688263627</h3>
     <h3>Address : Hyderabad</h3>
     <h3>Education : Btech in Computer Science and Engineering</h3>
     <h3>College: Vardhaman College of Engineering</h3>
      <h3>Year : 2022-2026</h3>
      <h3>LinkedIn profile : https://www.linkedin.com/in/shraddha-rai-a7576229a/</h3>
      
    </div>
  );
}
function Skills()
{
  return (
    <div style={{alignItems: 'center', textAlign: 'center', padding: '20px'}}>
      <h1>Skills Page</h1>
      <p>Here are your skills.</p>
    </div>
  );
}

function App()
{
  //iselse
  const countunread =5;
  //ielseladdr
   const status =['About', 'Contact', 'profile', 'Blank'];
   const statusrandom=status[Math.floor(Math.random()*status.length)];
  return(
    //task 1
    // <div>
    //   <Log/>
    // </div>
    //task 2
    // <div>
    //   <Ifelse countunread={countunread}  />
    // </div>
    //task 3
  //   <div>
  //     <h1>Switch Example</h1>
  // <Switch status="loading" />
  // <Switch status="success" />
  // <Switch status="error" />
  // <Switch status="" />
  // <Switch />
  //   </div>
  //task 4
  // <div>
  //    <h1>If Else Ladder Example</h1>
 
  // <IfelseLadder status={statusrandom}/> 

  // </div>
  //task 5
  // <div>
  //   <Form/>
  // </div>

  //task 6
  // <div>
  //   <ValidationForm/>
  // </div>
  //task 7 8 9
  // <div>
  //   <Tablebasics/>
  //   <SortedTable/>
  //   <FilterableTable/>
  // </div>
  //task 10
  // <div>
  //   <ContactManager/>
  // </div>
  //task 11
  // <div>
  //   <RandomQuoteGenerator/>
  // </div>
  //task 12
  // <div>
  //   <LuckGenerator/>
  // </div>
  //task 13 
  // <div>
  //   <TodoList/>
  // </div>
  //task 14
 <div style ={{backgroundImage:'url(https://e0.pxfuel.com/wallpapers/112/365/desktop-wallpaper-premium-vector-of-terrazzo-frame-on-beige-background-vector-powerpoint-background-design-flower-background-abstract-iphone-portfolio.jpg',padding:'20px', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
 <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
   
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/skills" element={<Skills />} />
    
    <Route path="/profile" element={<Profile />} />
    

  </Routes>
 
 </Router>
 </div>

   
  )
}
export default App;
