import react from 'react';

function Switch({status}){
    // status can be 'loading', 'success', or 'error'
    // based on the value of status, we will render different content
    // using switch case statement
   switch(status){
    case 'loading':
        return <p>Page was Loading</p>;
    case 'success':
        return <p>Page was successfully loaded</p>;
    case 'error':
        return <p>There was an error loading the page</p>;
        default:
            return <p>Unknown status</p>;
   }
}
export default Switch;