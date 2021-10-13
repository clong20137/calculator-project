import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

const App = () => {
    const [result, setResult] = useState("");


  
  
    const handleClick = (e) => { // USE NAME VALUE FOR CALCULATOR
        setResult(result.concat(e.target.name));
    }
    const ac = () => { // ALL CLEAR 
        setResult("");
    }
    const backspace = () => { // DELETE LAST INPUT
        setResult(result.slice(0, -1));

    }
    const log = () => { // LETS LOG THE INPUT

    }


   const equal = () => {
       try {
        setResult(eval(result).toString());
       } catch (err) {
           setResult("Error");
       }
     
   
   
}

    return (
     
        <div className="calculator">
<div className="topbar">
  

<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
</div>


            <form>
                <input type="text" value={result} disabled />
            </form>

            <div className="inputKeys">
            <button onClick={backspace} id="delete" class="buttonKey-yellow">C</button>
            <button onClick={ac} id="ac" class="buttonKey-yellow">AC</button>
            <button onClick={handleClick} id="divide" name="/" class="buttonKey">&divide;</button>
            <button onClick={handleClick} name="*" class="buttonKey">&times;</button>
                
                <button onClick={handleClick} name="7" class="buttonKey-white">7</button>
                <button onClick={handleClick} name="8" class="buttonKey-white">8</button>
                <button onClick={handleClick} name="9" class="buttonKey-white">9</button>
                <button onClick={handleClick} name="-" class="buttonKey">&ndash;</button>
                <button onClick={handleClick} name="4" class="buttonKey-white">4</button>
                <button onClick={handleClick} name="5" class="buttonKey-white">5</button>
                <button onClick={handleClick} name="6" class="buttonKey-white">6</button>
                <button onClick={handleClick} name="+" class="buttonKey">+</button>
                
                <button onClick={handleClick} name="1" class="buttonKey-white">1</button>
                <button onClick={handleClick} name="2" class="buttonKey-white">2</button>
                <button onClick={handleClick} name="3" class="buttonKey-white">3</button>
                <div class="empty"></div>
                <button onClick={handleClick} id="zero" name="0" class="buttonKey-white">0</button>
                <button onClick={handleClick} id="dot" name="." class="buttonKey-white">.</button>
                <div class="empty"></div>
                <button onClick={equal} id="equal" class="buttonKey">=</button>
            </div>
            

</div>

        
    )
}

export default App;