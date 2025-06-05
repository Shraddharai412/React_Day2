const data=[
    {id:1,name:"Shraddha Rai",age:19,email:"shraddha@gmail.com"},
    {id:2,name:"John Doe",age:25,email:"john@gmail.com"},
{id:3,name:"Jane Smith",age:30,email:"jane@gmail.com"},
{id:4,name:"Alice Johnson",age:22,email:"Alice@gmail.com"}];
function Tablebasics() {

    return (
        <table style={{border: "1px solid black", width: "100%", textAlign: "left",boarderCollapse: "collapse",cellPadding: "8px"}}>
            <thead style={{backgroundColor:"lightblue"}}>
                <tr>
                    <th style={{border: "1px solid black"}}>ID</th>
                    <th style={{border: "1px solid black"}}>Name</th>
                    <th style={{border: "1px solid black"}}>Age</th>
                    <th style={{border: "1px solid black"}}>Email</th>
                </tr>

            </thead>
            <tbody>
                {data.map(({id, name, age, email}) => (
                    <tr key={id}>
                        <td style={{border: "1px solid black"}}>{id}</td>
                        <td style={{border: "1px solid black"}}>{name}</td>
                        <td style={{border: "1px solid black"}}>{age}</td>
                        <td style={{border: "1px solid black"}}>{email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Tablebasics;
