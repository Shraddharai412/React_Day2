import React, { useState } from 'react';
const data=[
    {
        id:1,
        Product:'Desktop',
        Category:'Electronics',
    },
    {
        id:2,
        Product:'Chair',
        Category:'Furniture',
    },
    {
        id:3,
        Product:'Mobile',
        Category:'Electronics',
    },
    {
        id:4,
        Product:'Table',
        Category:'Furniture',
    },
    {
        id:5,
        Product:'Laptop',
        Category:'Electronics',
    },
    {
        id:6,
        Product:'Sofa',
        Category:'Furniture',
    }
    
]
function FilterableTable()
{
    const[searchTerm,setSearchTerm] = useState('');
    const filterabledata=data.filter(({Product, Category}) =>
        Product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <div>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{marginBottom: '20px', padding: '10px', width: '300px'}} />
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th style={{border: '2px solid blue', padding: '8px',backgroundColor:'plum'}}>ID</th>
                        <th style={{border: '2px solid blue', padding: '8px',backgroundColor:'plum'}}>Product</th>
                        <th style={{border: '2px solid blue', padding: '8px',backgroundColor:'plum'}}>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {filterabledata.map(({id,Product,Category}) => (
                        <tr key={id}>
                            <td style={{border: '2px solid blue', padding: '8px'}}>{id}</td>
                            <td style={{border: '2px solid blue', padding: '8px'}}>{Product}</td>
                            <td style={{border: '2px solid blue', padding: '8px'}}>{Category}</td>
                        </tr>
                    ))}
                    {filterabledata.length === 0 && (
                        <tr>
                            <td colSpan="3" style={{textAlign: 'center',color:'red',fontWeight:'bold', padding: '8px'}}>No results found....... </td>
                        </tr>
                    )}
                </tbody>
                
                </table>
        </div>
    )
}
export default FilterableTable;