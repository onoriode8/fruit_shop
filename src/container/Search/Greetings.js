
const greetings = () => {
    const date = new Date();
    const hour = date.getHours();
    let showTime = <p style={{color:'blue', textAlign:'center'}}>Good Morning</p>;
    if(hour >= 12) {
        showTime = <p style={{color:'blue', textAlign:'center' }}>Good Afternoon</p>
    }
    else if(hour >= 16){
        showTime = <p style={{color:'blue', textAlign:'center'}}>Good Evening</p>
    }
    return(
        <header>
            {showTime}
        </header>
)}

export default greetings;