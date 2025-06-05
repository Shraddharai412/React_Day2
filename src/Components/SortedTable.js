import react from "react";


const data=[
    {id:1,name:"Shraddha Rai",age:19,email:"shraddha@gmail.com"},
    {id:2,name:"John Doe",age:25,email:"john@gmail.com"},
{id:3,name:"Jane Smith",age:30,email:"jane@gmail.com"},
{id:4,name:"Alice Johnson",age:22,email:"Alice@gmail.com"}];

function SortedTable()
{

    const [sortconfig, setsortconfig] = react.useState({key:'name',direction:'ascending'});
     const sortedData=[...data].sort((a,b)=>{
        if(a[sortconfig.key] < b[sortconfig.key]) {
            return setsortconfig === 'ascending' ? -1 : 1;
        }
        if(a[sortconfig.key] > b[sortconfig.key]) {
            return setsortconfig === 'ascending' ? 1 : -1;
        }

     })

     function requestSort(key) {
        let direction = 'ascending';
        if(sortconfig.key === key && sortconfig.direction === 'ascending') {
            direction = 'descending';
        }
        setsortconfig({key, direction});
     }
        return (
            <table style={{border: "1px solid black", width: "100%", textAlign: "left", boarderCollapse: "collapse", cellPadding: "8px"}}>
                <thead style={{backgroundColor:"lightblue"}}>
                    <tr>
                        <th style={{border: "1px solid black"}} onClick={() => requestSort('id')}>ID</th>
                <th onClick={()=> requestSort('name')} style={{cursor:'pointer'}}>Name {sortconfig.key==='name' ? (sortconfig.direction==='ascending'):''}</th>
                <th onClick={()=> requestSort('age')} style={{cursor:'pointer'}}>Age {sortconfig.key==='age' ? (sortconfig.direction==='ascending'):''}</th>
                <th onClick={()=> requestSort('email')} style={{cursor:'pointer'}}>Email {sortconfig.key==='email' ? (sortconfig.direction==='ascending'):''}</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((user) => (
                        <tr key={user.id}>
                            <td style={{border: "1px solid black"}}>{user.id}</td>
                            <td style={{border: "1px solid black"}}>{user.name}</td>
                            <td style={{border: "1px solid black"}}>{user.age}</td>
                            <td style={{border: "1px solid black"}}>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
export default SortedTable;
