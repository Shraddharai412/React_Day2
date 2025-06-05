import react from "react";
function Ifelse({countunread})
{

    
   return (
    <div>
    {/* {isLoggedIn ?<p>Welcome back, User!</p> : <p>Please log in to continue.</p>}
    {isLoggedIn && <p>You have new notifications.</p> } */}
    {countunread >0 && <p>You have {countunread} unread messages</p>}
    
   
    </div>

   )

}
export default Ifelse;