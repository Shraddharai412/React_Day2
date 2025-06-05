import react from 'react';

function RandomQuoteGenerator()
{
    const quotes=['practice makes man perfect','every apple a daya keeps the docter Away','slow and steady wins the race','drop and drop makes an ocean','quote 1','quote 2','quote 3','quote 4','quote 5']
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return (
        <div style={{ 
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
           
            <h2 style={{alignContent:'center',alignItems:'center'}}>Random Quote</h2>
            <h5>Namaste ,Have a Good Day</h5>
            <p>Lets see todays Quote!!!</p>
            <div style={{textAlign:'center'}} >
            <button style={{padding:'10px',borderRadius:'10px',backgroundColor:'purple',color:'white'}} onClick={() =>window.location.reload()} >CLICK HERE TO SEE QUOTE</button>
            </div><h1>Todays Quote : {randomQuote}</h1>
        </div>
    );
}
export default RandomQuoteGenerator;