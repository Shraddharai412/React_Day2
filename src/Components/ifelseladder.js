import react from 'react';
function IfelseLadder({status})
{
    
    if(status === 'About')
    {
        return <p>Page is About Page</p>
    }
    else if(status === 'Contact')
    {
        return <p>Page is Contact Page</p>
    }
    else if(status === 'profile')
    {
        return <p>Page is profile Page</p>
    }
    else
    {
        return <p>Blank Page</p>
    }
}
export default IfelseLadder;