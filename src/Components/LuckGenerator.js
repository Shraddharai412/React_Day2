import react from "react";


function LuckGenerator()
{
    const Luck=["u will find money", "u will find love", "u will find happiness", "u will find success"];
  const Luckrandom=Luck[Math.floor(Math.random()*Luck.length)];
    return (
        <div  style={{ 
        marginLeft:'25%',
        padding: '20px',
        backgroundColor: 'plum',
        borderRadius: '8px',
        textAlign: 'center',
        boxshadow: '0 2px 4px rgba(138, 65, 235, 0.1)',
        width: '50%',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        marginBottom:'10px'}}>
            <h1 style={{textAlign:'center',alignContent:'center',alignItems:'center',}}>Luck Generator</h1>
            <button  style={{padding:'10px',borderRadius:'10px' ,backgroundColor:'purple',color:'white'}} onClick={() => window.location.reload()}>LuckGenerator</button>
            <p>Your Luck is: {Luckrandom}</p>
            
        
        </div>
    )
}
export default LuckGenerator;